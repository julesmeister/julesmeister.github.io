// @ts-check
import homeDashboard from '~/assets/lotel_kotlin/home-dashboard.jpg';
import metricsDashboard from '~/assets/lotel_kotlin/metrics-dashboard.jpg';
import transactions from '~/assets/lotel_kotlin/transactions.jpg';
import bookingDetails from '~/assets/lotel_kotlin/booking-details.jpg';
import stayInformation from '~/assets/lotel_kotlin/stay-information.jpg';
import remittances from '~/assets/lotel_kotlin/remittances.jpg';
import groceryProfitability from '~/assets/lotel_kotlin/grocery-profitability.jpg';
import rentals from '~/assets/lotel_kotlin/rentals.jpg';
import payrollStaff from '~/assets/lotel_kotlin/payroll-staff.jpg';

export const lotelKotlinProject = {
  title: 'Lotel Kotlin',
  description: 'Native Android rebuild of the Lotel hotel management system using Kotlin and Jetpack Compose. Eliminates the JavaScript bridge overhead from React Native, delivering instant startup, smoother animations, and better memory management. Features Material Design 3 components with a polished, performant UI for daily hotel operations.',
  roles: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Android'],
  url: 'https://github.com/julesmeister/lotel',
  linkLabel: 'View on GitHub',
  backgroundImage: homeDashboard,
  backgroundOptions: {
    srcSet: `${homeDashboard} 800w, ${homeDashboard} 1600w`,
    width: 800,
    height: 1600,
    opacity: 0.8,
  },
  theme: {
    primary: '#4a6cf7',
    secondary: '#3b5de7',
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
          image: homeDashboard,
          title: 'Home Dashboard',
          description: 'Central hub showing today\'s sales, pending remittances, occupancy metrics, and transaction counts. Room grid displays real-time status with color-coded indicators for occupied, available, and guest count. Quick access to all hotel operations from a single screen.',
        },
        {
          stepNumber: 2,
          image: bookingDetails,
          title: 'Booking Management',
          description: 'Detailed room booking view with staff check-in records, quick actions for extending stays, adding beds, or processing refunds. Change room functionality and complete transaction history with payment status tracking.',
        },
        {
          stepNumber: 3,
          image: transactions,
          title: 'Transaction History',
          description: 'Filterable daily transaction log covering bookings, goods sales, and expenses. Each entry shows time, amount, remittance status, and detailed descriptions. Bottom navigation provides quick access to all major sections.',
        },
      ],
    },
    {
      id: 'features',
      type: 'features',
      layout: 'alternating',
      heading: 'Native Android Features',
      description: 'Lotel Kotlin delivers a complete hotel management suite built natively for Android with Jetpack Compose. Every screen benefits from instant rendering, smooth 60fps animations, and efficient memory usage, critical for a tool used throughout daily hotel operations.',
      imageOptions: { width: 400, height: 800 },
      imageSizes: '(max-width: 768px) 85vw, 40vw',
      items: [
        {
          featureNumber: 4,
          image: metricsDashboard,
          title: 'Financial Metrics',
          description: 'Comprehensive monthly breakdown of rooms revenue, goods sales, rentals, expenses, salaries, and bills. Each metric shows month-over-month percentage changes. Filter by hotel property with net income calculation at a glance.',
        },
        {
          featureNumber: 5,
          image: remittances,
          title: 'Remittance Tracking',
          description: 'Daily remittance management with expenses and sales breakdown. Shows net amount with visual emoji feedback for profitability. Tracks who prepared and received each remittance with quick access to view detailed transactions.',
        },
        {
          featureNumber: 6,
          image: stayInformation,
          title: 'Stay Information',
          description: 'Detailed guest stay data including check-in time, guest count, extra beds, duration, guest type, and promo status. Room info section displays room type, capacity, and senior/PWD rates for transparent pricing.',
        },
        {
          featureNumber: 7,
          image: groceryProfitability,
          title: 'Grocery Profitability',
          description: 'Yearly overview tracking total grocery expenses against revenue with profit margin calculations. Breakdown shows tracking periods, profitability ratio, average breakeven days, and average grocery cost per period.',
        },
        {
          featureNumber: 8,
          image: rentals,
          title: 'Rental Management',
          description: 'Monthly rental revenue tracking with paid/unpaid status indicators. View individual unit details including tenant names, amounts, and payment dates. Color-coded cards for quick revenue, paid, and unpaid summaries.',
        },
        {
          featureNumber: 9,
          image: payrollStaff,
          title: 'Payroll & Staff',
          description: 'Staff management with daily rate tracking and advance payment monitoring. Toggle between payroll and staff views. Yearly total expenditure overview with individual staff profiles showing pending advances status.',
        },
      ],
    },
    {
      id: 'analytics',
      type: 'image-text',
      heading: 'Why Go Native?',
      paragraphs: [
        'After running the React Native version in production, performance bottlenecks became apparent — slow startup times, janky animations, and high memory usage impacted daily hotel operations. The decision to rebuild with Kotlin and Jetpack Compose was driven by the need for a truly responsive, reliable tool that staff can depend on.',
        'Jetpack Compose\'s declarative UI paired with Kotlin coroutines delivers smooth, lag-free interactions. Firebase integration remains seamless with native Android SDKs, providing even better real-time synchronization. Material Design 3 components give the app a polished, modern look that feels right at home on Android devices.',
      ],
      imageOptions: { width: 350, height: 750 },
      imageSizes: '(max-width: 696px) 200px, 343px',
      images: [
        {
          src: homeDashboard,
          alt: 'Lotel Kotlin: Home dashboard with sales metrics, occupancy tracking, and room grid with real-time status indicators',
        },
        {
          src: metricsDashboard,
          alt: 'Lotel Kotlin: Financial metrics dashboard showing rooms, goods, rentals, expenses, salaries breakdown with monthly trends',
        },
      ],
    },
    {
      id: 'tech-stack',
      type: 'text',
      heading: 'Native Android Stack',
      paragraphs: [
        'Built with Kotlin and Jetpack Compose for a fully native Android experience. The app leverages Compose\'s modern declarative UI framework to build responsive, efficient interfaces with significantly less boilerplate than traditional XML layouts. Kotlin coroutines handle asynchronous operations cleanly, from Firebase queries to UI state management.',
        'Firebase Firestore provides real-time data synchronization with robust offline support, essential for hotel environments where connectivity can be intermittent. Material Design 3 theming ensures visual consistency across all screens, while Compose navigation handles screen transitions with fluid animations. The result is a hotel management system that is fast, reliable, and a pleasure to use every day.',
      ],
    },
  ],
};