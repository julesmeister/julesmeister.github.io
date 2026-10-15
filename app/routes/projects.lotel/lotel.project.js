// @ts-check
import lotelHome from '~/assets/Lotel-Home-Cut.jpg';
import lotelMart from '~/assets/Lotel-Mart.jpg';
import lotelTransactions from '~/assets/Lotel-Transactions.jpg';
import lotelRemittance from '~/assets/Lotel-Remittance-Cut.jpg';
import remittanceReport from '~/assets/Remittance-Report.png';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const lotelProject = {
  title: 'Lotel Android App (Flutterflow Version)',
  description: 'This is the original version of Lotel, built using Flutterflow and Firebase. It was migrated from a desktop Electron app with a Vue frontend. The app has been successfully running in production for over a year with active daily usage by our staff and co-owners. This version is now being superseded by a more modern React Native/Expo rebuild with enhanced features and improved UI/UX.',
  roles: ['Android', 'Flutterflow', 'Firebase', 'No-Code'],
  url: 'https://lotel-7ac21u.flutterflow.app/',
  linkLabel: 'Visit website',
  secondaryUrl: 'https://github.com/julesmeister/lotel',
  secondaryLinkLabel: 'View on Github',
  backgroundImage: lotelHome,
  backgroundOptions: {
    srcSet: `${lotelHome} 1280w, ${lotelHome} 2560w`,
    width: 1280,
    height: 800,
    opacity: 0.8,
  },
  theme: {
    primary: '#10b981',
    secondary: '#059669',
  },
  imageViewer: true,
  sections: [
    {
      id: 'intro',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [60, 20, 40],
      imageOptions: { width: 600, height: 400 },
      imageSizes: '(max-width: 768px) 90vw, 45vw',
      items: [
        {
          stepNumber: 1,
          image: lotelHome,
          title: 'Dashboard Overview',
          description: 'Monitor all hotel operations from a centralized dashboard. Track daily sales, occupancy rates, and key performance indicators in real-time.',
        },
        {
          stepNumber: 2,
          image: lotelMart,
          title: 'Point of Sale',
          description: 'Process transactions seamlessly with integrated POS functionality. Handle room bookings, food orders, and additional services all in one place.',
        },
        {
          stepNumber: 3,
          image: lotelTransactions,
          title: 'Transaction History',
          description: 'Access comprehensive transaction records with detailed filtering and search capabilities. Generate reports and track financial performance over time.',
        },
      ],
    },
    {
      id: 'features',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4],
      heading: 'Advanced Features',
      description: 'Lotel combines powerful no-code development with production-ready hotel management capabilities. Built with Flutterflow and Firebase, the app delivers comprehensive POS functionality, real-time analytics, and automated reporting for efficient hotel operations.',
      imageOptions: { width: 500, height: 350 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        {
          id: 'remittance',
          featureNumber: 4,
          image: lotelRemittance,
          title: 'Remittance Management',
          description: 'Streamline daily cash flow with automated remittance tracking and comprehensive financial summaries.',
        },
        {
          id: 'reports',
          featureNumber: 5,
          image: remittanceReport,
          title: 'PDF Report Generation',
          description: 'Generate professional reports in PDF format for easy sharing and record-keeping with stakeholders.',
        },
      ],
    },
    {
      id: 'reports',
      type: 'image-text',
      heading: 'Why I chose Flutterflow?',
      paragraphs: [
        'Having already worked with Flutter in the past, I strategically chose Flutterflow for its rapid prototyping capabilities. For a project with straightforward CRUD requirements and minimal UI complexity, this decision allowed me to quickly develop a functional app that was easily accessible to my target users on Android.',
        'Flutterflow provides a high-level abstraction of UI code, making it easier to work with. Furthermore, its built-in state management features were easy to work with and did not require any additional libraries. If needed, I could still utilize Flutter packages for advanced functionality like PDF generation.',
      ],
      imageOptions: { width: 350, height: 750 },
      imageSizes: '(max-width: 696px) 200px, 343px',
      imageOffsets: [5, -5],
      images: [
        { src: lotelRemittance, alt: 'Lotel: Remittance management interface for tracking daily cash flow' },
        { src: remittanceReport, alt: 'Lotel: Professional PDF report showing detailed remittance summary' },
      ],
    },
  ],
};