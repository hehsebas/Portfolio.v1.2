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
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
    {
        id: 5,
        title: "Home",
        icon: <Speech size={25} color="#fff" strokeWidth={1} />,
        link: "/testimonials",
    },
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Frontend Developer",
        subtitle: "Workana Freelancer",
        description: "Development of dynamic and responsive user interfaces.\n Implementation of reusable components, improving code maintaninability and performance.\nIntegration of RESTful APis for real-time data handling.\nCollaboration with UX/UI designers to enhance user experience. \n Version control using Git and collaboration through GitHub working under agile methodologies.",
        date: "Jun 2023-Present",
    },
    {
        id: 2,
        title: "Intern",
        subtitle: "SLB",
        description: "Developed internal web applications for process visualization. \nDesigned and optimized user interfaces to improve accessibility and usability. \nIntegrated Power BI dashboards into web applications for real-time data visualization. \nDeveloped interactive UI components to streamline workflow automation. \nImplemented real-time data updates and notification system using WebSockets and EDA. \nCollaborated with backend developers to enhance system performance and usability. \nConducted code reviews and debugging to improve application stability..",
        date: "Dec 2023-Dec 2024",
    },
    {
        id: 3,
        title: "Ecommerce Developer",
        subtitle: "Khalifa Marketing",
        description: "Developed a real-time data visualization platform. \nDesigned and implemented a responsive and intuitive UI for data monitoring. \nBuilt an e-commerce frontend using Angular and TypeScript, ensuring a scalable and high-performance solution. \nIntegrated a product catalog. \nImplemented authentication and authorization with JWT.",
        date: "Jun 2022-Present",
    },
    {
        id: 4,
        title: "Frontend Developer",
        subtitle: "Colombian Fixer",
        description: "Designed and developed a responsive landing page for ColombianFixer using Angular and TypeScript. \nCreated a modern and engaging UI with interactive elements to improve user experience. \n Implemented SEO optimization techniques to enhance visibility and search rankings. \nIntegrated Google Analytics for performance tracking and user behavior analysis. \nCollaborated with the marketing team to align design with brand identity and goals. \n Integrated contact forms and Google Maps API for improved accessibility and usability.",
        date: "Jun 2022- Jul 2022",
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
        description: "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Desarrollo web",
        description: "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
    },
    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
    {
        icon: <Rocket />,
        title: "SEO",
        description: "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
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
        title: "Webs Impactantes",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 6,
        title: "Web Dinámica",
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
            "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
        imageUrl: "/profile1.png",
    },
    {
        id: 2,
        name: "Alejandra Khalifa",
        description:
            "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
        imageUrl: "/profile2.png",
    },
    {
        id: 3,
        name: "Julián Vanegas",
        description:
            "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
        imageUrl: "/profile3.png",
    },
    {
        id: 4,
        name: "Geronimo Bustos",
        description:
            "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
        imageUrl: "/profile4.png",
    },
    /*{
        id: 5,
        name: "Carlos Sánchez",
        description:
            "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
        imageUrl: "/profile5.png",
    },
    {
        id: 6,
        name: "Antonio Martínez",
        description:
            "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
        imageUrl: "/profile6.png",
    },*/
];