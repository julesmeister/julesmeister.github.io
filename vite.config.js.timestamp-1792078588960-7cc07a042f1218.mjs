// vite.config.js
import {
  vitePlugin as remix,
  cloudflareDevProxyVitePlugin as remixCloudflareDevProxy
} from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///C:/Users/jules.leslie.s.lee/Documents/julesmeister.github.io/node_modules/@mapbox/rehype-prism/index.js";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remixCloudflareDevProxy(),
    remix({
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxqdWxlcy5sZXNsaWUucy5sZWVcXFxcRG9jdW1lbnRzXFxcXGp1bGVzbWVpc3Rlci5naXRodWIuaW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGp1bGVzLmxlc2xpZS5zLmxlZVxcXFxEb2N1bWVudHNcXFxcanVsZXNtZWlzdGVyLmdpdGh1Yi5pb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvanVsZXMubGVzbGllLnMubGVlL0RvY3VtZW50cy9qdWxlc21laXN0ZXIuZ2l0aHViLmlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHtcclxuICB2aXRlUGx1Z2luIGFzIHJlbWl4LFxyXG4gIGNsb3VkZmxhcmVEZXZQcm94eVZpdGVQbHVnaW4gYXMgcmVtaXhDbG91ZGZsYXJlRGV2UHJveHksXHJcbn0gZnJvbSAnQHJlbWl4LXJ1bi9kZXYnO1xyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IGpzY29uZmlnUGF0aHMgZnJvbSAndml0ZS1qc2NvbmZpZy1wYXRocyc7XHJcbmltcG9ydCBtZHggZnJvbSAnQG1keC1qcy9yb2xsdXAnO1xyXG5pbXBvcnQgcmVtYXJrRnJvbnRtYXR0ZXIgZnJvbSAncmVtYXJrLWZyb250bWF0dGVyJztcclxuaW1wb3J0IHJlbWFya01keEZyb250bWF0dGVyIGZyb20gJ3JlbWFyay1tZHgtZnJvbnRtYXR0ZXInO1xyXG5pbXBvcnQgcmVoeXBlSW1nU2l6ZSBmcm9tICdyZWh5cGUtaW1nLXNpemUnO1xyXG5pbXBvcnQgcmVoeXBlU2x1ZyBmcm9tICdyZWh5cGUtc2x1Zyc7XHJcbmltcG9ydCByZWh5cGVQcmlzbSBmcm9tICdAbWFwYm94L3JlaHlwZS1wcmlzbSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5nbGInLCAnKiovKi5oZHInLCAnKiovKi5nbHNsJ10sXHJcbiAgYnVpbGQ6IHtcclxuICAgIGFzc2V0c0lubGluZUxpbWl0OiAxMDI0LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiA3Nzc3LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgbWR4KHtcclxuICAgICAgcmVoeXBlUGx1Z2luczogW1tyZWh5cGVJbWdTaXplLCB7IGRpcjogJ3B1YmxpYycgfV0sIHJlaHlwZVNsdWcsIHJlaHlwZVByaXNtXSxcclxuICAgICAgcmVtYXJrUGx1Z2luczogW3JlbWFya0Zyb250bWF0dGVyLCByZW1hcmtNZHhGcm9udG1hdHRlcl0sXHJcbiAgICAgIHByb3ZpZGVySW1wb3J0U291cmNlOiAnQG1keC1qcy9yZWFjdCcsXHJcbiAgICB9KSxcclxuICAgIHJlbWl4Q2xvdWRmbGFyZURldlByb3h5KCksXHJcbiAgICByZW1peCh7XHJcbiAgICAgIHJvdXRlcyhkZWZpbmVSb3V0ZXMpIHtcclxuICAgICAgICByZXR1cm4gZGVmaW5lUm91dGVzKHJvdXRlID0+IHtcclxuICAgICAgICAgIHJvdXRlKCcvJywgJ3JvdXRlcy9ob21lL3JvdXRlLmpzJywgeyBpbmRleDogdHJ1ZSB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAganNjb25maWdQYXRocygpLFxyXG4gIF0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdYO0FBQUEsRUFDOVcsY0FBYztBQUFBLEVBQ2QsZ0NBQWdDO0FBQUEsT0FDM0I7QUFDUCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLFNBQVM7QUFDaEIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxpQkFBaUI7QUFFeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsZUFBZSxDQUFDLFlBQVksWUFBWSxXQUFXO0FBQUEsRUFDbkQsT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixlQUFlLENBQUMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxZQUFZLFdBQVc7QUFBQSxNQUMzRSxlQUFlLENBQUMsbUJBQW1CLG9CQUFvQjtBQUFBLE1BQ3ZELHNCQUFzQjtBQUFBLElBQ3hCLENBQUM7QUFBQSxJQUNELHdCQUF3QjtBQUFBLElBQ3hCLE1BQU07QUFBQSxNQUNKLE9BQU8sY0FBYztBQUNuQixlQUFPLGFBQWEsV0FBUztBQUMzQixnQkFBTSxLQUFLLHdCQUF3QixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsUUFDcEQsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
