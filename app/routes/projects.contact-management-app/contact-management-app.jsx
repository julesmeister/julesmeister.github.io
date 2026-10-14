import dashboard from '~/assets/contact_management_app/contact-management-dashboard.png';
import tableView from '~/assets/contact_management_app/contact-management-table.png';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

const title = 'Contact Management App';
const description =
  'A practical Angular contact manager with responsive card and table views, contact details, and complete create, edit, and delete workflows.';
const roles = ['Angular', 'TypeScript', 'Angular Material', 'RxJS', 'JSON Server'];

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const ContactManagementApp = () => (
  <ProjectContainer>
    <ProjectHeader
      title={title}
      description={description}
      url="https://github.com/julesmeister/Angular-Contact-Management-Demo"
      linkLabel="View on GitHub"
      roles={roles}
    />
    <ProjectSection padding="top">
      <ProjectSectionContent>
        <ProjectSectionHeading>Contact workspace</ProjectSectionHeading>
        <ProjectSectionText>
          Contacts can be browsed as cards or in a sortable-style table. Each view keeps the main actions close to the record, while the detail screen presents contact information clearly.
        </ProjectSectionText>
        <ProjectImage
          srcSet={`${dashboard} 1600w`}
          width={1600}
          height={1000}
          alt="Contact Management App card dashboard with fictional sample contacts"
        />
      </ProjectSectionContent>
    </ProjectSection>
    <ProjectSection>
      <ProjectSectionContent>
        <ProjectSectionHeading>Two ways to scan records</ProjectSectionHeading>
        <ProjectSectionText>
          Angular Material powers the responsive controls and table, with JSON Server providing a lightweight local API for contact CRUD operations.
        </ProjectSectionText>
        <ProjectImage
          srcSet={`${tableView} 1600w`}
          width={1600}
          height={1000}
          alt="Contact Management App table view with fictional sample contacts"
        />
      </ProjectSectionContent>
    </ProjectSection>
  </ProjectContainer>
);