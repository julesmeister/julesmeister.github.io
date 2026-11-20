import {
  ProjectTemplate,
  createProjectMeta,
} from '~/components/project-template';
import { sangfroidProject } from './sangfroid.project';

export const meta = createProjectMeta(
  sangfroidProject.title,
  sangfroidProject.description
);

export const Sangfroid = () => (
  <ProjectTemplate {...sangfroidProject} />
);