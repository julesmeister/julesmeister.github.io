import { ProjectTemplate, createProjectMeta } from '~/components/project-template';
import { deutschCraftChatProject } from './deutschcraft-chat.project';

export const meta = createProjectMeta(deutschCraftChatProject.title, deutschCraftChatProject.description);

export const DeutschCraftChat = () => <ProjectTemplate {...deutschCraftChatProject} />;