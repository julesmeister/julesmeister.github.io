import usesBackgroundPlaceholder from '~/assets/uses-background-placeholder.jpg';
import usesBackground from '~/assets/uses-background.mp4';
import { Footer } from '~/components/footer';
import { Link } from '~/components/link';
import { List, ListItem } from '~/components/list';
import { Table, TableBody, TableCell, TableHeadCell, TableRow } from '~/components/table';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import styles from './uses.module.css';

export const meta = () => {
  return baseMeta({
    title: 'Uses',
    description: 'A list of hardware and software I use to do my thing',
  });
};

export const Uses = () => {
  return (
    <>
      <ProjectContainer className={styles.uses}>
        <ProjectBackground
          src={usesBackground}
          placeholder={usesBackgroundPlaceholder}
          opacity={0.7}
        />
        <ProjectHeader
          title="Uses"
          description="A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things."
        />
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Design</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    As a non-designer, I don't pretend to have the skills of a seasoned
                    designer. I actually grabbed this portfolio design from GitHub where
                    I stumbled upon the work of Hamish Williams, his portfolio.
                  </ListItem>
                    <ListItem>I did tweak some things here and there and you'll see the difference once you visit <Link href="https://hamishw.com" target="_blank">his portfolio.</Link></ListItem>
                    <ListItem>My intention is to have a
                    presentable portfolio and not market design skills. I do not have the
                    intention to apply for design positions but if the employer demands it
                    or needs my assistance on design tasks, I'll do what I can. I'm a
                    developer and my focus
                    is on developing software.
                  </ListItem>
                  <ListItem>At times, I design a bit but not professionally. I would leverage online resources and design communities like Dribbble to
                    explore different visual approaches and gather inspiration for my
                    projects. I then use AI-powered tools to help me
                    generate ideas and then refining them to fit the needs of the project.</ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow width="m">
              <ProjectSectionHeading>Development</ProjectSectionHeading>
              <ProjectSectionText as="div">
                <List>
                  <ListItem>
                    I use <Link href="https://github.com/getwindsurf/windsurf">Windsurf</Link>{' '}
                    as my text editor, which is a fork of VScode, with the Light+ theme and Consolas as my
                    typeface of choice.
                  </ListItem>
                  <ListItem>
                    Arc is my main browser for both development and general use.
                  </ListItem>
                  <ListItem>
                    <Link href="https://reactjs.org/">React</Link> is my front end
                    Javascript library of choice. I find it to be very intuitive and
                    effective for building web applications.
                  </ListItem>
                  <ListItem>
                    For CSS I use <Link href="https://tailwindcss.com/">Tailwind CSS</Link>,
                    it’s great for utility-first CSS and has a really good community and
                    ecosystem.
                  </ListItem>
                  <ListItem>
                    For Javascript animations I use{' '}
                    animations that are automatically generated by AI, which allows me to
                    focus on the function and layout of my components without worrying about
                    the animation details.
                  </ListItem>
                  <ListItem>
                    For building and testing UI components in isolation I use{' '}
                    <Link href="https://github.com/shadcn/ui">shadcn/ui</Link>.
                  </ListItem>
                </List>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="none" className={styles.section}>
          <ProjectSectionContent>
            <ProjectTextRow stretch width="m">
              <ProjectSectionHeading>System</ProjectSectionHeading>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableHeadCell>Desktop</TableHeadCell>
                    <TableCell>Custom built</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Operating system</TableHeadCell>
                    <TableCell>Windows 11</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Browser</TableHeadCell>
                    <TableCell>Arc Browser</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Monitor</TableHeadCell>
                    <TableCell>Gamdias Atlas 24" Curve HD24C and Nvision QS34G1 Ultra Wide</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Keyboard</TableHeadCell>
                    <TableCell>MSI VIGOR GK50Z & VIGOR GK50Z V2 Gaming Mechanical Keyboard Black RGB Light</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Mouse</TableHeadCell>
                    <TableCell>Logitech Lift Vertical Ergonomic Mouse</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Laptop</TableHeadCell>
                    <TableCell>Macbook Air M2</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableHeadCell>Microphone</TableHeadCell>
                    <TableCell>HyperX QuadCast Gaming Microphone</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </>
  );
};
