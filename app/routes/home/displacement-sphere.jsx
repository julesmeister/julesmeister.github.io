import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useReducedMotion, useSpring } from 'framer-motion';
import { useInViewport, useWindowSize } from '~/hooks';
import { startTransition, useEffect, useRef } from 'react';
import {
  AmbientLight,
  BufferGeometry,
  DirectionalLight,
  Euler,
  Float32BufferAttribute,
  IcosahedronGeometry,
  LinearSRGBColorSpace,
  Mesh,
  MeshPhongMaterial,
  OctahedronGeometry,
  PerspectiveCamera,
  Scene,
  TorusKnotGeometry,
  UniformsUtils,
  Vector2,
  WebGLRenderer,
} from 'three';
import { media } from '~/utils/style';
import { throttle } from '~/utils/throttle';
import { cleanRenderer, cleanScene, removeLights } from '~/utils/three';
import fragmentShader from './displacement-sphere-fragment.glsl?raw';
import vertexShader from './displacement-sphere-vertex.glsl?raw';
import styles from './displacement-sphere.module.css';

const springConfig = {
  stiffness: 30,
  damping: 20,
  mass: 2,
};

export const DisplacementSphere = props => {
  const { theme } = useTheme();
  const start = useRef(Date.now());
  const canvasRef = useRef();
  const mouse = useRef();
  const renderer = useRef();
  const camera = useRef();
  const scene = useRef();
  const lights = useRef();
  const uniforms = useRef();
  const material = useRef();
  const geometry = useRef();
  const sphere = useRef();
  const reduceMotion = useReducedMotion();
  const isInViewport = useInViewport(canvasRef);
  const windowSize = useWindowSize();
  const rotationX = useSpring(0, springConfig);
  const rotationY = useSpring(0, springConfig);

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    mouse.current = new Vector2(0.8, 0.5);
    renderer.current = new WebGLRenderer({
      canvas: canvasRef.current,
      antialias: false,
      alpha: true,
      powerPreference: 'high-performance',
      failIfMajorPerformanceCaveat: true,
    });
    renderer.current.setSize(innerWidth, innerHeight);
    renderer.current.setPixelRatio(1);
    renderer.current.outputColorSpace = LinearSRGBColorSpace;

    camera.current = new PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
    camera.current.position.z = 52;

    scene.current = new Scene();

    material.current = new MeshPhongMaterial({
      color: theme === 'light' ? 'oklch(45.33% 0.19 284.82)' : 'oklch(45.33% 0.19 284.82)',
      shininess: 10,
    });
    material.current.onBeforeCompile = shader => {
      uniforms.current = UniformsUtils.merge([
        shader.uniforms,
        { time: { type: 'f', value: 0 } },
      ]);

      shader.uniforms = uniforms.current;
      shader.vertexShader = vertexShader;
      shader.fragmentShader = fragmentShader;
    };

    startTransition(() => {
      // Create a custom geometry by combining vertices of different shapes
      const ico = new IcosahedronGeometry(15, 1);
      const oct = new OctahedronGeometry(18, 2);
      
      // Combine vertices from both geometries
      const positions = [];
      const icoPositions = ico.attributes.position.array;
      const octPositions = oct.attributes.position.array;
      
      // Add icosahedron vertices with a twist
      for (let i = 0; i < icoPositions.length; i += 3) {
        const angle = (i / icoPositions.length) * Math.PI * 2;
        positions.push(
          icoPositions[i] * Math.cos(angle),
          icoPositions[i + 1],
          icoPositions[i + 2] * Math.sin(angle)
        );
      }
      
      // Add octahedron vertices with offset
      for (let i = 0; i < octPositions.length; i += 3) {
        positions.push(
          octPositions[i] * 0.8,
          octPositions[i + 1] * 0.8,
          octPositions[i + 2] * 0.8
        );
      }
      
      // Create new geometry from combined vertices
      geometry.current = new BufferGeometry();
      geometry.current.setAttribute('position', new Float32BufferAttribute(positions, 3));
      geometry.current.computeVertexNormals();
      
      sphere.current = new Mesh(geometry.current, material.current);
      sphere.current.position.z = 0;
      sphere.current.rotation.x = 0.3;
      sphere.current.rotation.y = 0.2;
      sphere.current.modifier = Math.random();
      scene.current.add(sphere.current);
    });

    return () => {
      cleanScene(scene.current);
      cleanRenderer(renderer.current);
    };
  }, []);

  useEffect(() => {
    const dirLight = new DirectionalLight(0xffffff, theme === 'light' ? 2.0 : 2.5);
    const ambientLight = new AmbientLight(0xffffff, theme === 'light' ? 2.0 : 0.5);

    dirLight.position.z = 200;
    dirLight.position.x = 100;
    dirLight.position.y = 100;

    lights.current = [dirLight, ambientLight];
    lights.current.forEach(light => scene.current.add(light));

    return () => {
      removeLights(lights.current);
    };
  }, [theme]);

  useEffect(() => {
    const { width, height } = windowSize;

    const adjustedHeight = height + height * 0.3;
    renderer.current.setSize(width, adjustedHeight);
    camera.current.aspect = width / adjustedHeight;
    camera.current.updateProjectionMatrix();

    // Render a single frame on resize when not animating
    if (reduceMotion) {
      renderer.current.render(scene.current, camera.current);
    }

    if (width <= media.mobile) {
      sphere.current.position.x = 14;
      sphere.current.position.y = 10;
    } else if (width <= media.tablet) {
      sphere.current.position.x = 18;
      sphere.current.position.y = 14;
    } else {
      sphere.current.position.x = 22;
      sphere.current.position.y = 16;
    }
  }, [reduceMotion, windowSize]);

  useEffect(() => {
    const onMouseMove = throttle(event => {
      const position = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      };

      rotationX.set(position.y / 2);
      rotationY.set(position.x / 2);
    }, 100);

    if (!reduceMotion && isInViewport) {
      window.addEventListener('mousemove', onMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  useEffect(() => {
    let animation;

    const animate = () => {
      animation = requestAnimationFrame(animate);

      if (uniforms.current !== undefined) {
        uniforms.current.time.value = 0.00005 * (Date.now() - start.current);
      }

      sphere.current.rotation.z += 0.001;
      sphere.current.rotation.x = rotationX.get();
      sphere.current.rotation.y = rotationY.get();

      renderer.current.render(scene.current, camera.current);
    };

    if (!reduceMotion && isInViewport) {
      animate();
    } else {
      renderer.current.render(scene.current, camera.current);
    }

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [isInViewport, reduceMotion, rotationX, rotationY]);

  return (
    <Transition in timeout={3000} nodeRef={canvasRef}>
      {({ visible, nodeRef }) => (
        <canvas
          aria-hidden
          className={styles.canvas}
          data-visible={visible}
          ref={nodeRef}
          {...props}
        />
      )}
    </Transition>
  );
};
