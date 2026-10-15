import adobeAfterEffectsCert from '~/assets/certificates/UC-4c7604d3-efdb-4a3d-aeaf-ebe7cf7cba26.jpg';
import dartAdvancedCert from '~/assets/certificates/UC-9eca3ac5-80b1-4deb-9634-bb9333f56aca.jpg';
import iosSwiftBootcampCert from '~/assets/certificates/UC-NNL2TKF5.jpg';
import flutterDartGuideCert from '~/assets/certificates/UC-BSX4F1TQ.jpg';
import pythonAlgorithmicTradingCert from '~/assets/certificates/1735458642431.jpg';
import pythonCoreCert from '~/assets/certificates/cert-CT-EXR6ALDW.pdf';
import salesforcePlatformDeveloperCert from '~/assets/certificates/UC-0f64e9d6-3334-4a59-aec6-56dd7a7204de.jpg';
import youtubeAudienceGrowthCert from '~/assets/certificates/UC-9006c19c-aff5-4b17-900f-c714cde937cf.jpg';
import javaBasicElementsCert from '~/assets/certificates/java-foundations-basic-elements.pdf';
import javaDataTypesCert from '~/assets/certificates/java-foundations-data-types.pdf';
import javaDecisionStatementsCert from '~/assets/certificates/java-foundations-decision-statements.pdf';
import javaDevelopmentEnvironmentCert from '~/assets/certificates/java-foundations-development-environment.pdf';
import javaConceptsFeaturesCert from '~/assets/certificates/java-foundations-java-concepts-and-features.pdf';
import javaOperatorsCert from '~/assets/certificates/java-foundations-java-operators.pdf';

export const certificatesData = [
  {
    title: 'Java Certified Foundations Associate',
    description: 'Six course completion certificates covering Java fundamentals and core language concepts.',
    documents: [
      { title: 'Basic Elements', file: javaBasicElementsCert },
      { title: 'Data Types', file: javaDataTypesCert },
      { title: 'Decision Statements', file: javaDecisionStatementsCert },
      { title: 'Development Environment', file: javaDevelopmentEnvironmentCert },
      { title: 'Java Concepts & Features', file: javaConceptsFeaturesCert },
      { title: 'Java Operators', file: javaOperatorsCert },
    ],
  },
  {
    image: salesforcePlatformDeveloperCert,
    title: 'Salesforce Certified Platform Developer I (LWC & Aura)',
    issuer: 'Udemy',
    date: 'December 29, 2024',
    description: 'Course covering Salesforce Platform Developer concepts, Lightning Web Components, and Aura.',
  },
  {
    image: adobeAfterEffectsCert,
    title: 'Adobe After Effects CC Bootcamp: Beginner to Advanced',
    issuer: 'Udemy',
    date: 'April 15, 2026',
    description: 'A 35-hour course in Adobe After Effects, from beginner foundations to advanced techniques.',
  },
  {
    title: 'Flutter & Dart Development',
    issuer: 'Udemy',
    date: 'October & December 2020',
    description: 'Two courses covering Flutter app development and advanced Dart.',
    gallery: [
      {
        image: flutterDartGuideCert,
        title: 'Flutter & Dart - The Complete Guide [2020 Edition]',
        label: 'Flutter & Dart guide',
        date: 'October 4, 2020',
      },
      {
        image: dartAdvancedCert,
        title: 'Dart - Advanced Course',
        label: 'Dart Advanced',
        date: 'December 3, 2020',
      },
    ],
  },
  {
    image: pythonAlgorithmicTradingCert,
    title: 'Algorithmic Trading: Backtest, Optimize & Automate in Python',
    issuer: 'Udemy',
    date: 'September 19, 2019',
    description: 'An 8.5-hour course in algorithmic trading with Python.',
  },
  {
    title: 'Python Core',
    issuer: 'Sololearn',
    description: 'Course certificate demonstrating core Python knowledge.',
    documents: [
      { title: 'View certificate PDF', file: pythonCoreCert },
    ],
  },
  {
    image: youtubeAudienceGrowthCert,
    title: 'YouTube Audience Growth 101: Build What Attracts Audiences',
    issuer: 'Udemy',
    date: 'May 14, 2020',
    description: 'A 4.5-hour course on building and growing a YouTube audience.',
  },
  {
    image: iosSwiftBootcampCert,
    title: 'iOS 12 & Swift - The Complete iOS App Development Bootcamp',
    issuer: 'Udemy',
    date: 'July 30, 2019',
    description: 'A 55.5-hour bootcamp in iOS app development with Swift.',
  },
];