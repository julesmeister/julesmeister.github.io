import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { lotelProject } from './lotel.project';

export const meta = createProjectMeta(lotelProject.title, lotelProject.description);

export const Lotel = () => <ProjectTemplate {...lotelProject} />;
