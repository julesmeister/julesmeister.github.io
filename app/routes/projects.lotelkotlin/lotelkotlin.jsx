import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { lotelKotlinProject } from './lotelkotlin.project';

export const meta = createProjectMeta(lotelKotlinProject.title, lotelKotlinProject.description);

export const LotelKotlin = () => <ProjectTemplate {...lotelKotlinProject} />;
