import {
  ProjectTemplate,
  createProjectMeta,
} from '~/components/project-template';
import { rentAFriendProject } from './rent-a-friend.project';

export const meta = createProjectMeta(
  rentAFriendProject.title,
  rentAFriendProject.description
);

export const RentAFriend = () => (
  <ProjectTemplate {...rentAFriendProject} />
);