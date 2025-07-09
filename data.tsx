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
        title: "Front End Developer",
        subtitle: "Rogans SAS",
        description: "Designed and developed internal web applications to enhance operational visibility and decision-making.\nImplementation of reusable components, improving code maintainability and performance.\nCollaboration in the implementation of AI agents using UChat for WhatsApp or In App customer interaction automation decreasing costs by 40% and improving user experience.\nCollaborated with the development team to implement designs aligned with UX&UI good practices.\nImplemented automation workflows that reduced the commercial team's operational time by 20%.",
        date: "Mar 2025 - Present",
    },
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "Workana Freelancer",
        description: "Created a modern and engaging UI with interactive elements to improve user experience.\nImplemented SEO optimization techniques to enhance visibility and search rankings. Designed and developed e-commerce platforms with emphasis on performance and scalability.\nCreated and maintained reusable components and design systems to improve development efficiency.\nIntegrated RESTful APIs for real-time product and transaction data management.\nWorked closely with UX/UI teams to enhance usability and accessibility.\nManaged codebase using Git, collaborating through GitHub in an agile environment.\nCollaboration with UX/UI designers to enhance user experience. \n Version control using Git and collaboration through GitHub working under agile methodologies.",
        date: "Jun 2023-May 2025",
    },
    {
        id: 2,
        title: "Maintenance Engineer Intern",
        subtitle: "SLB",
        description: "Designed and developed internal web applications to enhance operational visibility and decision-making.\nCollaborated with cross-functional teams to integrate real-time Power BI dashboards for proactive monitoring and analytics.\nContributed to the automation of cable inspection processes by implementing PLC-based control systems.\nDeveloped and deployed real-time data synchronization and notification features.\nPerformed quality control inspections on ESP pump components, including motors and protectors, ensuring compliance with engineering specifications.\nMaintained and calibrated testing tools and equipment to support accurate diagnostics and performance evaluations.\nWorked alongside backend developers to optimize system performance, improve scalability, and enhance user experience.",
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
        icon: <Crop />,
        title: "Branding",
        description: "Development of a solid and coherent brand identity, including logo design, colors and visual elements",
    },
    {
        icon: <Pencil />,
        title: "Web Design",
        description: "Creative and professional design of intuitive and attractive web interfaces, focused on user experience",
    },
    {
        icon: <Computer />,
        title: "Web Development",
        description: "Design and development of custom websites, adapted to your needs",
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
];

export const dataPortfolio = [
    {
        id: 1,
        title: "Web Development",
        image: "/image-8.png",
        urlGithub: "https://github.com/hehsebas",
    },
    {
        id: 2,
        title: "E-commerce Web",
        image: "/image-2.jpg",
        urlGithub: "https://github.com/hehsebas",
    },
    {
        id: 3,
        title: "Strategies for Web",
        image: "/image-3.jpg",
        urlGithub: "https://github.com/hehsebas",
    },
    {
        id: 4,
        title: "Creative Ideas UI/UX",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "https://github.com/hehsebas",
    },
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