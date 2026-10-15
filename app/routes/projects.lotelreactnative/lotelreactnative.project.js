// @ts-check
import handymenPayments from '~/assets/lotel_react_native/handymen-payments.jpg';
import groceryAnalytics from '~/assets/lotel_react_native/grocery-analytics.jpg';
import remittance from '~/assets/lotel_react_native/remittance.jpg';
import beddings from '~/assets/lotel_react_native/beddings.jpg';
import issues from '~/assets/lotel_react_native/issues.jpg';
import roomBooking from '~/assets/lotel_react_native/room-booking.jpg';
import expenses from '~/assets/lotel_react_native/expenses.jpg';
import roles from '~/assets/lotel_react_native/roles.jpg';
import inventory from '~/assets/lotel_react_native/inventory.jpg';
import mart from '~/assets/lotel_react_native/mart.jpg';
import transactions from '~/assets/lotel_react_native/transactions.jpg';
import payroll from '~/assets/lotel_react_native/payroll.jpg';
import homeDashboard from '~/assets/lotel_react_native/home-dashboard.jpg';
import staffPayroll from '~/assets/lotel_react_native/staff-payroll.jpg';
import salesDashboard from '~/assets/lotel_react_native/sales-dashboard.jpg';

/** @type {import('~/components/project-template/project-definition').ProjectDefinition} */
export const lotelReactNativeProject = {
  title: 'Lotel React Native',
  description: 'Modern rebuild of the Lotel hotel management system using React Native and Expo. Features enhanced UI/UX with handymen payment tracking, grocery profitability analytics, remittance management with PDF generation, beddings/linens inventory, maintenance issue tracking, and comprehensive room booking management. Built for production use with real-time Firebase synchronization.',
  roles: ['React Native', 'Expo', 'Firebase', 'TypeScript'],
  url: 'https://github.com/julesmeister/lotel',
  linkLabel: 'View on GitHub',
  backgroundImage: salesDashboard,
  backgroundOptions: {
    srcSet: `${salesDashboard} 800w, ${salesDashboard} 1600w`,
    width: 800,
    height: 1600,
    opacity: 0.8,
  },
  theme: {
    primary: '#5b5bd6',
    secondary: '#4c4cc7',
  },
  imageViewer: true,
  sections: [
    {
      id: 'intro',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [55, 25, 45],
      imageOptions: { width: 400, height: 800 },
      imageSizes: '(max-width: 768px) 90vw, 45vw',
      items: [
        {
          stepNumber: 1,
          image: handymenPayments,
          title: 'Handymen Payment Tracking',
          description: 'Track daily rates and monthly payments for handymen like Ariel, Bersamin, and others. Calendar view shows payment history with remittance status and details for each payment including days worked and hotel assignment.',
        },
        {
          stepNumber: 2,
          image: remittance,
          title: 'Daily Remittance Management',
          description: 'Comprehensive daily remittance tracking with breakdown of expenses, handymen costs, and sales. Generate PDF reports showing prepared by/collected by staff members. Net amount calculation with emoji feedback for profitability.',
        },
        {
          stepNumber: 3,
          image: roomBooking,
          title: 'Room Booking Details',
          description: 'Complete room booking management showing stay information, guest count, duration, payment status, and guest details. Modify bookings or process checkouts with a single tap.',
        },
      ],
    },
    {
      id: 'features',
      type: 'features',
      layout: 'alternating',
      heading: 'Advanced Management Features',
      description: 'Lotel React Native modernizes hotel operations with a comprehensive suite of management tools. Built with React Native and Expo for cross-platform compatibility, the app features real-time Firebase synchronization, PDF report generation, and intuitive UI components designed for daily operational efficiency.',
      imageOptions: { width: 400, height: 800 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        { featureNumber: 4, image: groceryAnalytics, title: 'Grocery Profitability', description: 'Track grocery expenses vs revenue with profitability indicators. See days to breakeven, net profit percentage, and purchase history. Real-time analytics help optimize inventory purchasing decisions.' },
        { featureNumber: 5, image: beddings, title: 'Beddings & Linens Inventory', description: 'Manage bedsheet, pillowcase, and towel inventory across all rooms. Track units, pricing, total costs, and room assignments. Filter by type and year for comprehensive inventory control.' },
        { featureNumber: 6, image: issues, title: 'Maintenance Issue Tracking', description: 'Report and track hotel maintenance issues with status updates, reporter information, and resolution timeline. Issues like fire safety inspections, tissue restocking, and room repairs are organized by date with quick edit access.' },
        { featureNumber: 7, image: expenses, title: 'Expense Management', description: 'Record daily hotel expenses with categorized types including softdrinks, cash advances, salary, food, and more. Track amount and description for complete financial visibility across all hotel operations.' },
        { featureNumber: 8, image: roles, title: 'Staff Role Management', description: 'Manage hotel staff with role-based access control. Track staff and admin users with real-time activity status. View who is currently active and manage user roles efficiently.' },
        { featureNumber: 9, image: inventory, title: 'Complete Inventory System', description: 'Comprehensive inventory management for candy, essentials, and drinks. Track stock levels, pricing, and out-of-stock items. Edit or delete inventory items with simple action buttons.' },
        { featureNumber: 10, image: mart, title: 'Lotel Mart Shopping', description: 'Internal shopping cart system for hotel purchases. Add items to cart with quantity controls, view categorized inventory (27 items total), and process transactions seamlessly.' },
        { featureNumber: 11, image: payroll, title: 'Payroll Management', description: 'Manage fortnightly payroll cycles with total expenditure tracking (₱535,088.8). View pending and settled payrolls organized by fortnight, with status indicators for each payment period.' },
        { featureNumber: 12, image: staffPayroll, title: 'Staff Payroll Tracking', description: 'Monitor individual staff member advances and settlements. Track pending cash advances with visual alerts, settled amounts per staff member, and maintain complete payroll transparency across all hotel employees.' },
      ],
    },
    {
      id: 'analytics',
      type: 'image-text',
      heading: 'Why Rebuild with React Native?',
      paragraphs: [
        'After running the Flutterflow version successfully in production for over a year, I decided to rebuild Lotel using React Native and Expo for better performance, maintainability, and customization capabilities. The new version offers enhanced UI/UX with modern design patterns and more granular control over app behavior.',
        'React Native with Expo provides excellent development velocity with hot reloading, easier debugging, and access to a rich ecosystem of packages. Firebase integration enables real-time data synchronization across devices, ensuring all staff members have up-to-date information about hotel operations.',
      ],
      imageOptions: { width: 350, height: 750 },
      imageSizes: '(max-width: 696px) 200px, 343px',
      imageOffsets: [5, -5],
      images: [
        { src: homeDashboard, alt: 'Lotel React Native: Home dashboard overview showing documents, grocery analytics, bills, and payroll sections with quick access buttons' },
        { src: transactions, alt: 'Lotel React Native: Daily transactions view with bookings/goods filters, total and remitted amounts, and detailed sales records by staff member' },
      ],
    },
    {
      id: 'tech-stack',
      type: 'text',
      blocks: [
        {
          type: 'heading',
          text: 'Modern Mobile Stack',
        },
        {
          type: 'paragraph',
          content: 'Built with React Native and Expo for cross-platform development, ensuring consistent performance on both iOS and Android devices. TypeScript provides type safety throughout the codebase, reducing bugs and improving maintainability. Firebase Firestore handles real-time data synchronization with offline support.',
        },
        {
          type: 'paragraph',
          content: 'The app leverages Expo\'s managed workflow for rapid development and easy deployments. PDF generation is handled natively for professional remittance reports. The purple-themed UI uses modern design patterns with smooth animations and intuitive navigation for optimal user experience during daily hotel operations.',
        },
        {
          type: 'heading',
          text: 'Migrated to Kotlin & Jetpack Compose',
        },
        {
          type: 'paragraph',
          content: 'While React Native with Expo enabled rapid prototyping, the app suffered from slow load times and performance issues that impacted daily operations. The application has been rebuilt using native Android development with Kotlin and Jetpack Compose, addressing these performance bottlenecks and delivering a significantly faster, more responsive user experience.',
        },
        {
          type: 'paragraph',
          content: [
            'The migration to native Android eliminated the JavaScript bridge overhead, providing instant app startup, smoother animations, and better memory management. Jetpack Compose\'s modern declarative UI framework combined with Material Design 3 components delivers a polished, performant hotel management system that staff rely on for critical daily operations. ',
            { text: 'View the Kotlin version.', href: '/projects/lotelkotlin' },
          ],
        },
      ],
    },
  ],
};