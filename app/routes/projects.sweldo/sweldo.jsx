import sweldoHome from '~/assets/sweldo-nextron.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Icon } from '~/components/icon'; 
import wl20 from '~/assets/wl-20.jpg';	
import editAttendance from '~/assets/edit-attendance.png';
import settings from '~/assets/settings-sweldo.png';
import summaryPayroll from '~/assets/summary-payroll.png';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';

import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectImageColumns,
  ProjectTextRow,
} from '~/layouts/project';
import { Fragment, useRef, useState, useEffect } from 'react';
import { media } from '~/utils/style';
import { baseMeta } from '~/utils/meta';
import styles from './sweldo.module.css';

const title = 'Sweldo Salary System (Windows and MacOS)';
const description =
  'We use the ZKTeco biometric scanner to capture attendance. This app allows the upload of time sheet data and has a dashboard to track employee performance. This offers similar features to the previous version but with a more modern look and feel and is now offline-based. It no longer has online capabilities, but it is several times faster and more stable.';
const roles = ['CSV', 'Nextron', 'React', 'Electron'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Sweldo = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  // Create refs for each section
  const headerSection = useRef(); // Header section
  const introSection = useRef(); // Introduction section
  const problemSection = useRef(); // Problem statement section
  const pdfSection = useRef(); // PDF download section
  const attendanceSection = useRef(); // Attendance data section
  const payrollSummarySection = useRef(); // Payroll summary section

  const sections = [
    headerSection,
    introSection,
    problemSection,
    pdfSection,
    attendanceSection,
    payrollSummarySection,
  ];

  useEffect(() => {
    // Initialize sections observer only when refs are ready
    if (!sections.every(section => section.current)) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            const sectionIndex = sections.findIndex(s => s.current === section);

            if (sectionIndex !== -1) {
              setCurrentSectionIndex(sectionIndex);
            }
          }
        });
      },
      { 
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1] 
      }
    );

    sections.forEach(section => {
      if (section.current) {
        sectionObserver.observe(section.current);
      }
    });

    return () => sectionObserver.disconnect();
  }, [sections]);

  useEffect(() => {
    const handleSectionNav = (event) => {
      const direction = event.detail;
      const newIndex = direction === 'up' ? currentSectionIndex - 1 : currentSectionIndex + 1;
      
      if (newIndex >= 0 && newIndex < sections.length) {
        setCurrentSectionIndex(newIndex);
        sections[newIndex].current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    window.addEventListener('navigate-section', handleSectionNav);
    return () => window.removeEventListener('navigate-section', handleSectionNav);
  }, [currentSectionIndex, sections]);




  return (
    <Fragment>
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sweldoHome}
          srcSet={`${sweldoHome} 1280w, ${sweldoHome} 2560w`}
          width={1280}
          height={800}
          placeholder={sweldoHome}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/julesmeister/sweldo"
          linkLabel="View on Github"
          roles={roles}
          ref={headerSection}
        />
        <ProjectSection padding="top" ref={attendanceSection}>
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={`${wl20} 440w, ${wl20} 880w`}
                  width={440}
                  height={790}
                  placeholder={wl20}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>ZKTeco Biometric Scanner</ProjectSectionHeading>
              <ProjectSectionText>
                Not all attendance data from the biometric scanner is reliable. It's possible that some data is missing or incorrect or the employee forgot to clock in or out.

                <br></br>
                <br></br>
                This scanner exports the data in an xls file. I have a script that parses everything and organizes all the data into CSV files. My app aims to make it easier to visualize the data and make it more user-friendly. Any post-processing of the data is done in the app.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top" ref={introSection}>
          <ProjectSectionContent>
          <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${editAttendance} 1280w, ${editAttendance} 2560w`
                  : `${editAttendance} 1280w, ${editAttendance} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? sweldoHome
                  : sweldoHome
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Sweldo Time Sheet"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "Time Sheet shows the time in and out of each employee. With this, their summary can be easily calculated. As you can see, the data is editable. Absences do not include weekends and holidays."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
    
        <ProjectSection ref={problemSection}>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              I am not aware of any post-processing system that can handle the data from the biometric scanner apart from the xls file. It is not user-friendly and it is not easy to understand. Hence, I decided to create my own app to make it easier to understand and modify any data that might need to be changed.
              <br></br>
              <br></br>
              The xls file alone do not have computations for the pay of each employee. It only has the data that is needed to be computed. It also does not account for the holiday of that day, leave of absence of the employee and other calculations needed to calculate the employee's pay of that particular day or cash advances.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        <ProjectSection padding="top" ref={pdfSection}>
          <ProjectSectionContent>
          <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${settings} 1280w, ${settings} 2560w`
                  : `${settings} 1280w, ${settings} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? settings
                  : settings
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Sweldo Time Sheet"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "This is the settings page. It allows the user to configure the app to their liking. It also allows the user to make schedules for each employee type like in the image above. It also allows the HR to modify deductions for things like late, undertime, and overtime."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
       <ProjectSection padding="top" ref={payrollSummarySection}>
          <ProjectSectionContent>
          <ProjectImage
              className={styles.themeImage}
              key={theme}
              srcSet={
                isDark
                  ? `${summaryPayroll} 1280w, ${summaryPayroll} 2560w`
                  : `${summaryPayroll} 1280w, ${summaryPayroll} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? summaryPayroll
                  : summaryPayroll
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Sweldo Time Sheet"
            />
            <div className={styles.captionWrapper}>
              <span className={styles.captionContent}>
                <Icon icon="link" className={styles.captionIcon} />
                <span className={styles.imageCaption}>
                  "This is the summary payroll page. It shows the total pay of each employee. It also shows the total deductions and the net pay of each employee."
                </span>
              </span>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
