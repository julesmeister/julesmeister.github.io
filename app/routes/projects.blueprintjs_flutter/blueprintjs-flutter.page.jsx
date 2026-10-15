import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { blueprintFlutterProject } from './blueprintjs-flutter.project';

export const meta = createProjectMeta(blueprintFlutterProject.title, blueprintFlutterProject.description);

export const BlueprintjsFlutter = () => <ProjectTemplate {...blueprintFlutterProject} />;
