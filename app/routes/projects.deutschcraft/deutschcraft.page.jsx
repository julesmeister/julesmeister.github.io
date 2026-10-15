import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { deutschCraftProject } from './deutschcraft.project';

export const meta = createProjectMeta(deutschCraftProject.title, deutschCraftProject.description);

export const DeutschCraft = () => <ProjectTemplate {...deutschCraftProject} />;
