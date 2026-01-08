import { BookText, CodeSquare, HomeIcon, UserRound, Rss, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";
import { SiYoutube, SiLinkedin, SiX, SiTwitch, SiGithub  } from "react-icons/si";
export const socialNetworks = [
    {
        id: 1,
        logo: <SiGithub size={30} strokeWidth={0} />,
        src: "https://github.com/hehsebas",
    },
    {
        id: 2,
        logo: <SiLinkedin size={30} strokeWidth={0} />,
        src: "https://www.linkedin.com/in/sebasti%C3%A1n-r-521163106/",
    },
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "About",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Services",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Portfolio",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Testimonials",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 0,
        title: "Software Engineer",
        subtitle: "Rogans SAS",
        description: "Development and maintenance of responsive landing pages and internal web applications using React, PHP, JavaScript and Tailwind CSS, ensuring scalability and high performance.\nDesign of modular UI components and reusable layouts, reducing page load times by 40%.\nIntegration of UChat AI, Latenode, Power Automate, and n8n to automate web and application data workflows, connecting platforms with the intenal ERP Odoo\nExecution of ETL processes using Python and MySQL to automate data collection, cleansing, and synchronization across systems\nDiagnosis and resolution of incidents in multi-platform web environments, ensuring system stability and continuous availability.\n Collaboration with marketing and product teams to align UI/UX, SEO, and technical automation goals under agile methodologies \n Participation in functional and technical application design, supporting flow modeling and UML diagrams at a functional level",
        date: "Mar 2025 - Oct 2025",
    },
    {
        id:1,
        title: "Data Analyst",
        subtitle: "DevLock",
        description: "Design and implementation of data pipelines in Python to collect, clean, and transform structured data from CSV files, APIs, and SQL databases\nData preprocessing and validation using pandas and numpy to ensure consistency and reliability for analysis\nDevelopment of interactive dashboards for operational and business metrics, enabling KPI tracking and trend analysis\nExecution of exploratory data analysis (EDA) to identify patterns, anomalies, and optimization opportunities.\nAutomation of recurring reports and data monitoring tasks, reducing manual effort and improving data availability\nCollaboration with engineering and product teams to translate business requirements into data-driven insights\nDocumentation of data models, transformations, and assumptions to ensure reproducibility and knowledge transfer.",
        date: "Jan 2025 - May 2025"
    },
    {
        id: 2,
        title: "Frontend Developer",
        subtitle: "Workana Freelancer",
        description: "Development of frontend web applications for enterprise clients, applying reusable component patterns and architectural best practices.\nImplementation of scalable interfaces using React and JavaScript, prioritizing maintainability and visual consistency.\nIntegration of backend services through REST APIs and management of complex frontend states.\nCreation and maintenance of reusable components and design systems to improve development efficiency.\nImplementation of automation and integrations using n8n and Power Automate.\nCodebase management using Git and GitHub in agile environments.",
        date: "Jun 2023-Present",
    },
    {
        id: 3,
        title: "Maintenance Engineer Intern",
        subtitle: "SLB",
        description: "Design and development of internal web applications to improve operational visibility and decision-making.\nCollaboration with cross-functional teams to integrate real-time Power BI dashboards for proactive monitoring and analysis.\nContribution to the automation of cable inspection processes through the implementation of PLC-based control systems.\nSupport for real-time data synchronization and notification features for time measurement and assembly process optimization.\nQuality control inspections of ESP pump components, ensuring compliance with technical specifications and proposing improvements to reduce assembly time and increase safety\nMaintenance and calibration of testing tools and equipment to ensure accurate diagnostics and performance evaluations.\nClose collaboration with backend developers to optimize system performance, scalability, and user experience.",
        date: "Dec 2023-Dec 2024",
    },
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 3,
        text: "Years of experience",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 5,
        text: "Satisfied clients",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 2,
        endCounter: 11,
        text: "Finished projects",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 3,
        endCounter: 4,
        text: "Certifications obtained",
        lineRight: true,
        lineRightMobile: true,
    },
];

export const serviceData = [
    {
        icon: <Computer />,
        title: "Web Development",
        description: "Design and development of custom websites, adapted to your needs",
    },
    {
        icon: <Pencil />,
        title: "Web Design",
        description: "Creative and professional design of intuitive and attractive web interfaces, focused on user experience",
    },
    {
        icon: <Book />,
        title: "UX/UI",
        description: "Creation of persuasive and attractive content that captures your audience's attention",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimization of online presence through advanced SEO strategies to position the website in the top search engine results.",
    },
    {
        icon: <Crop />,
        title: "Branding",
        description: "Development of a solid and coherent brand identity, including logo design, colors and visual elements",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Development",
        image: "/RogansWeb.webp",
    },
    {
        id: 2,
        title: "E-commerce Web",
        image: "/image-2.jpg",
    },
    {
        id: 3,
        title: "Strategies for Web",
        image: "/image-3.jpg",
    },
    {
        id: 4,
        title: "Creative Ideas UI/UX",
        image: "/image-4.jpg",    },
    /*{
        id: 5,
        title: "Impactful Websites",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Dynamic Web",
        image: "/image-6.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 7,
        title: "Dark Web ",
        image: "/image-7.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 8,
        title: "E-commerce web",
        image: "/image-8.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    }*/
];

export const dataTestimonials = [
    {
        id: 1,
        name: "Alejandro Padilla",
        description:
            "Incredible platform! The testimonials here are genuine and have helped me make informed decisions. Highly recommended!",
        imageUrl: "/Testi-1.jpg",
    },
    {
        id: 2,
        name: "Alejandra Khalifa",
        description:
            "I love the variety of testimonials available on this page. It's inspiring to see how other people have overcome challenges similar to mine. Thank you for this invaluable source of motivation!",
        imageUrl: "/Testi-2.jpg",
    },
    {
        id: 3,
        name: "Julián Vanegas",
        description:
            "Excellent resource for getting authentic opinions about different products and services. It has helped me a lot with my online purchases. Bravo for this site!",
        imageUrl: "/Testi-3.jpg",
    },
    {
        id: 4,
        name: "Geronimo Bustos",
        description:
            "What a fantastic discovery! The testimonials here are honest and detailed. I feel more confident making decisions after reading the experiences shared by other users.",
        imageUrl: "/Testi-4.jpg",
    },
    {
        id: 5,
        name: "Rogans",
        description:
            "Sebastian is a great developer and a great person. He is always willing to help and he is a great team player.",
        imageUrl: "/RogansIcon.webp",
    },
    /*{
        id: 5,
        name: "Carlos Sánchez",
        description:
            "A gem on the web. The testimonials are easy to find and well organized. Definitely my number one destination when I need reliable references!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "Fantastic resource for those seeking validation before making important decisions! The testimonials here are truthful and really useful. Thank you for simplifying my decision-making process!",
        imageUrl: "/profile6.png",
    },*/
];