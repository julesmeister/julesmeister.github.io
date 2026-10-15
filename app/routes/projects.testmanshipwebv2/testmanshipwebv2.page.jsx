import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { testmanshipWebV2Project } from './testmanshipwebv2.project';

export const meta = createProjectMeta(testmanshipWebV2Project.title, testmanshipWebV2Project.description);

export const TestmanshipWebV2 = () => <ProjectTemplate {...testmanshipWebV2Project} />;
