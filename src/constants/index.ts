import {
    sass,
    npm,
    bootstrap,
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
    lumiaClone,
    registerLogin,
    weatherApp,
    github,
    iMovies,
    lofi,
} from "../assets"

export const navLinks = [
    {
        id: "about",
        title: "About",
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

const projects = [
    {
        name: "iMovies",
        deploy: "https://imovies-omega.vercel.app/",
        description:
            "Movie app built with React & TS which allows users to search and view the trailer of both movies and TV series",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "rtk",
                color: "green-text-gradient",
            },
        ],
        image: iMovies,
        source_code_link: "https://github.com/Abdurauf1/iMovies",
    },
    {
        name: "Lofi",
        deploy: "https://lofi-five-sigma.vercel.app/",
        description:
            "Lofi website has background music, rain and other sounds. It provides todo list and pomodoro timer",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
            {
                name: "rtk",
                color: "green-text-gradient",
            },
        ],
        image: lofi,
        source_code_link: "https://github.com/Abdurauf1/lofi",
    },
    {
        name: "Lumia website clone",
        deploy: "https://abdurauf1.github.io/lumia-clone/",
        description:
            "Lumia landing page clone with html, css, bootstrap and javascript",
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
        name: "Weather App",
        deploy: "https://weather-app-abdurauf1.netlify.app/",
        description:
            "Web App to get current day weather and seven days forecast. It allows to search cities and get weather from API.",
        tags: [
            {
                name: "react",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "typescript",
                color: "blue-text-gradient",
            },
        ],
        image: weatherApp,
        source_code_link: "https://github.com/Abdurauf1/react-weather-app/",
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
        name: "Random Color Generator",
        deploy: "https://abdurauf1.github.io/random-color-generator/",
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
        source_code_link: "https://github.com/Abdurauf1/random-color-generator",
    },
]

export { technologies, projects }