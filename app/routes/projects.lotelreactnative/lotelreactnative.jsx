import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { lotelReactNativeProject } from './lotelreactnative.project';

export const meta = createProjectMeta(lotelReactNativeProject.title, lotelReactNativeProject.description);

export const LotelReactNative = () => <ProjectTemplate {...lotelReactNativeProject} />;
