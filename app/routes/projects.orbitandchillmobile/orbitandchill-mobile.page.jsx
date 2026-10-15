import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { orbitAndChillMobileProject } from './orbitandchill-mobile.project';

export const meta = createProjectMeta(orbitAndChillMobileProject.title, orbitAndChillMobileProject.description);

export const OrbitAndChillMobile = () => <ProjectTemplate {...orbitAndChillMobileProject} />;
