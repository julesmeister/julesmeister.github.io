// @ts-check

import architecture from '~/assets/rent_a_friend/architecture.jpg';
import awsDeployment from '~/assets/rent_a_friend/aws-deployment.jpg';
import checkOut from '~/assets/rent_a_friend/check-out.png';
import gallery from '~/assets/rent_a_friend/gallery.png';
import hero from '~/assets/rent_a_friend/hero.png';
import myBookings from '~/assets/rent_a_friend/my-bookings.png';
import signIn from '~/assets/rent_a_friend/sign-in.png';
import testResults from '~/assets/rent_a_friend/test-results.png';


export const rentAFriendProject = {
  title: 'Rent-a-Friend',

  description:
    'A full-stack booking platform that evolved from an Angular frontend concept into a secure, tested, and containerized cloud application. The project combines a Spring Boot REST API, JWT authentication, role and ownership-based authorization, DynamoDB persistence, private S3 assets, asynchronous SQS events, and an AWS deployment built around CloudFront, an Application Load Balancer, and ECS Fargate.',

  roles: [
    'Angular',
    'TypeScript',
    'Java 21',
    'Spring Boot',
    'Spring Security',
    'Docker',
    'AWS',
  ],

  url: 'https://github.com/julesmeister/Rent-a-Friend',
  linkLabel: 'View on GitHub',

  backgroundImage: hero,

  backgroundOptions: {
    srcSet: `${hero} 1280w, ${hero} 2560w`,
    width: 1280,
    height: 800,
    opacity: 0.82,
  },

  theme: {
    primary: '#e46f51',
    secondary: '#b94f39',
  },

  imageViewer: true,

  sections: [
    {
      id: 'experience',
      type: 'timeline',
      layout: 'horizontal',
      offsets: [45, 10, 55],

      imageOptions: {
        width: 720,
        height: 460,
      },

      imageSizes: '(max-width: 768px) 90vw, 32vw',

      items: [
        {
          id: 'discover',
          stepNumber: 1,
          image: gallery,
          title: 'Discover Companions',
          description:
            'Users can browse companion profiles, compare interests and hourly rates, and begin a booking from the Angular frontend. The gallery preserves the approachable experience of the original concept while loading application data through the backend.',
          alt: 'Rent-a-Friend companion gallery displaying available profiles, hourly rates, and booking actions',
        },
        {
          id: 'book',
          stepNumber: 2,
          image: checkOut,
          title: 'Create a Booking',
          description:
            'The checkout flow sends only the selected companion and requested duration. Spring Boot retrieves the authoritative hourly rate, validates the request, and calculates the final booking total on the server.',
          alt: 'Rent-a-Friend checkout interface showing a selected companion, booking duration, and calculated total',
        },
        {
          id: 'manage',
          stepNumber: 3,
          image: myBookings,
          title: 'Manage Bookings',
          description:
            'Authenticated customers can view their own booking history and cancel eligible bookings. Each booking follows a controlled lifecycle from pending to confirmed, completed, or cancelled.',
          alt: 'Rent-a-Friend My Bookings page displaying an authenticated customer booking and its current status',
        },
      ],
    },

    {
      id: 'full-stack',
      type: 'image-text',
      heading: 'From Frontend Concept to Full-Stack Application',

      paragraphs: [
        'Rent-a-Friend began as an Angular interface with companion profiles stored directly in TypeScript. I progressively moved persistent data, security, and business rules behind a layered Spring Boot REST API, turning the original frontend concept into a complete cloud application.',

        'The backend is organized into controllers, services, repositories, domain models, security components, and AWS integrations. This separation keeps HTTP handling, business rules, authorization, and persistence independently testable and maintainable.',

        'Authentication follows the same trust boundary. Passwords are hashed with BCrypt, successful sign-in produces a signed JWT, and Spring Security uses the authenticated identity and assigned role to determine which operations are available.',
      ],

      imageOptions: {
        width: 720,
        height: 720,
      },

      imageSizes: '(max-width: 696px) 88vw, 38vw',
      imageOffsets: [5, -5],

      images: [
        {
          src: signIn,
          alt: 'Rent-a-Friend sign-in interface for authenticating customers before accessing protected bookings',
        },
        {
          src: architecture,
          alt: 'Rent-a-Friend AWS cloud architecture connecting CloudFront, S3, an Application Load Balancer, ECS Fargate, DynamoDB, SQS, and supporting services',
        },
      ],
    },

    {
      id: 'backend-rules',
      type: 'text',
      heading: 'Business Rules Belong in the Backend',

      paragraphs: [
        'Spring Boot owns the application’s important decisions rather than trusting values supplied by the browser. When a booking is created, the client submits the selected friend identifier and requested number of hours. The backend loads the stored companion profile, retrieves the authoritative hourly rate, validates the duration, and calculates the total before saving anything.',

        'Bookings follow a controlled lifecycle. New bookings begin as PENDING, eligible pending bookings can become CONFIRMED or CANCELLED, and confirmed bookings can become COMPLETED or CANCELLED. Unsupported transitions are rejected by the service layer instead of being represented only as disabled controls in the frontend.',

        'Authorization is enforced at multiple levels. CUSTOMER accounts can create, view, and cancel their own bookings. COMPANION and ADMIN accounts can perform lifecycle operations such as confirmation and completion. Ownership checks also compare the authenticated JWT subject with the customer attached to the requested booking.',

        'This distinction between authentication, role authorization, and resource ownership prevents one authenticated customer from viewing or modifying another customer’s booking.',
      ],
    },

    {
      id: 'cloud-services',
      type: 'features',
      layout: 'alternating',
      delays: [0.2, 0.4, 0.6],

      heading: 'Cloud Services with Defined Responsibilities',

      description:
        'The AWS architecture grew from concrete application requirements. Persistence, private assets, asynchronous events, container execution, secrets, delivery, and observability each have their own clearly defined responsibility.',

      imageOptions: {
        width: 780,
        height: 500,
      },

      imageSizes: '(max-width: 768px) 85vw, 42vw',

      items: [
        {
          id: 'aws-data',
          featureNumber: 4,
          image: architecture,
          title: 'Data, Private Assets, and Events',
          description:
            'DynamoDB stores users, companion profiles, and bookings. A CustomerBookingsIndex global secondary index retrieves a customer’s booking history through customerId without scanning the entire bookings table. Profile images remain private in S3 and are displayed through temporary presigned URLs. Booking lifecycle changes publish asynchronous events to Amazon SQS.',
          alt: 'AWS architecture diagram showing DynamoDB data, private S3 assets, SQS events, and the deployed application',
        },
        {
          id: 'aws-deployment',
          featureNumber: 5,
          image: awsDeployment,
          title: 'Containerized on ECS Fargate',
          description:
            'The Java 21 Spring Boot backend is packaged using a multi-stage Docker build, pushed as a versioned image to Amazon ECR, and deployed as an ECS Fargate service. An Application Load Balancer performs health checks and routes API traffic to healthy container tasks.',
          alt: 'AWS console deployment evidence showing the Rent-a-Friend ECS service and supporting cloud resources',
        },
        {
          id: 'automated-testing',
          featureNumber: 6,
          image: testResults,
          title: 'Tested Before Deployment',
          description:
            'JUnit, Mockito, and MockMvc tests exercise service behavior, REST endpoints, booking ownership, role authorization, pricing, and lifecycle transitions. The test suite helps catch invalid behavior before a new container revision is published and deployed.',
          alt: 'Rent-a-Friend automated Java test results running successfully in the development environment',
        },
      ],
    },

    {
      id: 'architecture',
      type: 'image-text',
      heading: 'A Connected AWS Architecture',

      paragraphs: [
        'The Angular frontend is hosted in a private Amazon S3 bucket and delivered through CloudFront. Requests for frontend assets remain on the static delivery path, while requests under /api/* are routed through CloudFront to an Application Load Balancer.',

        'The load balancer forwards healthy API traffic to Spring Boot containers running as an ECS Fargate service. The application then communicates with DynamoDB for persistent data, private S3 storage for profile images, and SQS for booking lifecycle events.',

        'This design keeps the static frontend and containerized backend independently deployable. CloudFront provides one public entry point while the backend remains protected behind the load balancer and its security groups.',
      ],

      imageOptions: {
        width: 800,
        height: 540,
      },

      imageSizes: '(max-width: 696px) 88vw, 41vw',
      imageOffsets: [6, -6],

      images: [
        {
          src: architecture,
          alt: 'Detailed Rent-a-Friend cloud architecture showing CloudFront routing to private S3 and an ALB-backed ECS Fargate service',
        },
        {
          src: awsDeployment,
          alt: 'AWS deployment evidence showing the running Rent-a-Friend container service and application infrastructure',
        },
      ],
    },

    {
      id: 'security',
      type: 'text',
      heading: 'Security Across Application Boundaries',

      paragraphs: [
        'Passwords are protected with BCrypt and are never stored as plaintext. After successful authentication, the backend issues a signed JWT that identifies the user and carries the information needed by Spring Security to establish the authenticated request context.',

        'Protected endpoints do not rely on a customer identifier supplied by the browser. The backend obtains the authenticated identity from the validated JWT and uses that identity when loading or modifying customer-owned resources.',

        'The S3 bucket containing profile images remains private. Instead of exposing the bucket publicly, Spring Boot generates temporary presigned URLs that allow Angular to display specific objects for a limited period.',

        'The JWT signing secret is stored in AWS Secrets Manager rather than being committed to the source repository or copied into the Docker image.',
      ],
    },

    {
      id: 'container-deployment',
      type: 'text',
      heading: 'Containerized Deployment',

      paragraphs: [
        'The backend uses a multi-stage Docker build. Maven compiles and packages the Java 21 Spring Boot application in the build stage. The runtime stage contains only the completed application and the Java runtime required to execute it, producing a cleaner deployment artifact.',

        'Versioned container images are pushed to Amazon Elastic Container Registry and referenced by ECS task-definition revisions. Updating the Fargate service starts a rolling deployment so the load balancer can verify replacement tasks before older tasks are stopped.',

        'Infrastructure permissions are separated from application permissions. The ECS execution role supports container startup requirements such as pulling the ECR image, retrieving runtime secrets, and sending logs. The ECS task role grants the running Spring Boot application access to DynamoDB, S3, and SQS.',

        'CloudWatch receives logs from the running containers, providing a central place to inspect application startup, authentication failures, authorization responses, runtime errors, and deployment health.',
      ],
    },

    {
      id: 'booking-events',
      type: 'text',
      heading: 'Asynchronous Booking Events',

      paragraphs: [
        'Booking lifecycle operations publish events such as BOOKING_CREATED, BOOKING_CONFIRMED, BOOKING_CANCELLED, and BOOKING_COMPLETED to Amazon SQS.',

        'Publishing events separately from the synchronous booking response creates an integration point for future notification, analytics, auditing, or workflow services without requiring those operations to run inside the original HTTP request.',

        'The booking operation remains responsible for validating and persisting the domain change. SQS carries the resulting event so additional consumers can react independently.',
      ],
    },

    {
      id: 'engineering-evidence',
      type: 'image-text',
      heading: 'Deployment and Engineering Evidence',

      paragraphs: [
        'The project evidence goes beyond finished interface screenshots. The deployment view demonstrates the containerized application running through AWS infrastructure, while the test view shows the automated verification used before publishing a new application revision.',

        'Together, the images document the delivery path from application code to automated tests, a multi-stage Docker image, Amazon ECR, an ECS task definition, a managed Fargate service, load balancer health checks, and centralized CloudWatch logging.',
      ],

      imageOptions: {
        width: 780,
        height: 500,
      },

      imageSizes: '(max-width: 696px) 88vw, 41vw',
      imageOffsets: [6, -6],

      images: [
        {
          src: awsDeployment,
          alt: 'Rent-a-Friend AWS deployment evidence showing the application service and cloud infrastructure',
        },
        {
          src: testResults,
          alt: 'Rent-a-Friend Java automated tests executing successfully before container deployment',
        },
      ],
    },

    {
      id: 'learning',
      type: 'text',
      heading: 'What I Learned',

      paragraphs: [
        'The most valuable part of Rent-a-Friend was not simply using several AWS services. It was learning where each responsibility belongs and how the boundaries between the frontend, backend, security layer, data model, container runtime, and cloud infrastructure affect one another.',

        'The application work included migrating frontend mock data to DynamoDB, designing access patterns and a global secondary index, implementing server-authoritative pricing, separating authentication from authorization and ownership, diagnosing legitimate Spring Security 403 responses, generating private S3 presigned URLs, and publishing asynchronous SQS events.',

        'The delivery work included writing JUnit, Mockito, and MockMvc tests, creating a multi-stage Docker build, handling AWS credentials during local container development, publishing versioned images to ECR, deploying ECS task-definition revisions, configuring load balancer health checks and security groups, and separating execution-role permissions from task-role permissions.',

        'The finished application represents more than a collection of technologies. It demonstrates how I approached architecture, security, testing, debugging, deployment, and incremental cloud migration as one connected engineering problem.',
      ],
    },

    {
      id: 'tech-stack',
      type: 'text',
      heading: 'Technology Stack',

      paragraphs: [
        'The frontend is built with Angular and TypeScript. The backend uses Java 21, Spring Boot, Spring Web, Spring Security, BCrypt password hashing, JWT authentication, Maven, JUnit, Mockito, and MockMvc.',

        'The cloud architecture uses Amazon DynamoDB, Amazon S3, Amazon SQS, AWS Secrets Manager, Amazon Elastic Container Registry, Amazon ECS with AWS Fargate, an Application Load Balancer, Amazon CloudWatch, Amazon CloudFront, and AWS Identity and Access Management.',

        'Docker provides a repeatable container artifact across local development and AWS deployment. The overall architecture keeps the frontend, backend, persistent data, private assets, asynchronous events, secrets, and deployment infrastructure independently maintainable.',
      ],
    },
  ],
};