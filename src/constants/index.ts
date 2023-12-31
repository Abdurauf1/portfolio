import {
    sass,
    itransition,
    npm,
    bootstrap,
    github,
    css,
    git,
    html,
    javascript,
    reactjs,
    tailwind,
    typescript,
    colorFlipper,
    portfolioRS,
    todoApp,
    library,
    lumiaClone,
    registerLogin,
    // watchShop,
} from "../assets"

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
]

const technologies = [
    {
        name: "HTML",
        icon: html
    },
    {
        name: "CSS",
        icon: css
    },
    {
        name: "Scss",
        icon: sass
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Bootsrap",
        icon: bootstrap,
    },
    {
        name: "npm",
        icon: npm,
    },
    {
        name: "GitHub",
        icon: github,
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Itransition",
        icon: itransition,
        iconBg: "#ffffff",
        date: "Jan 2023 - Feb 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Using backend technologies such as Node.js and MySql for backend tasks",
        ],
    },
]

const projects = [
    {
        name: "Lumia website clone",
        deploy: "https://abdurauf1.github.io/lumia-clone/",
        description:
            "Lumia landing page clone with html, css, bootstrap and typescript",
        tags: [
            {
                name: "html",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "blue-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
        ],
        image: lumiaClone,
        source_code_link: "https://github.com/Abdurauf1/lumia-clone",
    },
    {
        name: "Todo App",
        deploy: "https://todo-app-abdurauf1.netlify.app/",
        description:
            "Web App created with react and typescript. It lets you add task to list, remove and edit it.",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "redux",
                color: "blue-text-gradient",
            },
            {
                name: "less",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
        ],
        image: todoApp,
        source_code_link: "https://github.com/Abdurauf1/todo-app",
    },
    {
        name: "User management webapp",
        deploy: "https://user-management-abdurauf1.netlify.app",
        description:
            "User management fullstack webapp. You can see, delete and block registered users",
        tags: [
            {
                name: "react",
                color: "pink-text-gradient",
            },
            {
                name: "react-bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "nodejs",
                color: "green-text-gradient",
            },
            {
                name: "mongodb",
                color: "blue-text-gradient",
            },
        ],
        image: registerLogin,
        source_code_link: "https://github.com/Abdurauf1/registration-login",
    },
    {
        name: "Brooklyn Public Library",
        deploy: "https://rolling-scopes-school.github.io/abdurauf1-JSFEPRESCHOOL2023Q2/library/",
        description:
            "Landing page about brooklyn public library",
        tags: [
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: library,
        source_code_link: "#",
    },
    {
        name: "CV RS School",
        deploy: "https://abdurauf1.github.io/rsschool-cv/",
        description:
            "Website about myself and my skills. Used html, scss and typescript. This is task from RS School.",
        tags: [
            {
                name: "html",
                color: "green-text-gradient",
            },
            {
                name: "sass",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
        ],
        image: portfolioRS,
        source_code_link: "https://github.com/Abdurauf1/rsschool-cv",
    },
    {
        name: "Color Flipper",
        deploy: "https://abdurauf1.github.io/color-flipper/",
        description:
            "Website that you can change colors randomly and, simple colors and hex colors.",
        tags: [
            {
                name: "html",
                color: "pink-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "javascript",
                color: "blue-text-gradient",
            },
        ],
        image: colorFlipper,
        source_code_link: "https://github.com/Abdurauf1/color-flipper",
    },
]

export { technologies, experiences, projects }