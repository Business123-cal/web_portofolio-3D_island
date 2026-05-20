import { 
    css, 
    git, 
    github, 
    html, 
    javascript, 
    react, 
    tailwindcss,
    blender,
    contact,
    linkedin,
    figma,
    htmx
} from "../assets/icons";


export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: blender, 
        name: "Blender",
        type: "3D Modeling",
    },

    {
        imageUrl: figma,
        name: "Figma",
        type: "UI/UX Design",
    }
];

export const experiences = [
    {
    title: "Full Stack Developer Graduate",
    company_name: "Harisenin.com",
    icon: null, 
    iconBg: "#b7e4c7",
    date: "2026", 
    points: [
        "Successfully completed an intensive bootcamp with a 4.00/4.00 GPA, focusing on software development fundamentals.",
        "Gained a solid understanding of Web Development basics, including HTML, CSS, and JavaScript structures.",
        "Explored the core concepts of React.js for building interactive user interfaces.",
        "Introduced to server-side basics and database design to understand how full-stack applications work.",
            ],
    },



    {
    title: "3rd Place Winner - Web Design Competition",
    company_name: "HIMASI",
    icon: null, 
    iconBg: "#fbc3bc",
    date: "2025", 
    points: [
        "Won 3rd place in a prestigious Web Design Competition held by HIMASI.",
        "Designed a comprehensive website prototype using Figma, focusing on user-centric design and modern aesthetics.",
        "Created interactive wireframes mockups to demonstrate seamless user flows.",
            ],
},
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/calisthalalala', 
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/calisthasurya', 
    }
];

export const projects = [
    {
        iconUrl: figma, 
        theme: 'btn-back-pink',
        name: 'My Figma Projects',
        description: 'Explore my public design library on Figma Community, featuring UI/UX prototypes, web layouts, and interactive design resources.',
        link: 'https://www.figma.com/@calistha_surya', 
    },

    {
        iconUrl: htmx,
        theme: 'btn-back-blue',
        name: 'My Coding Project',
        description: 'Building functional and responsive web applications with a focus on smooth user experience and interactive elements.',
        link: 'https://github.com/Business123-cal',
    },

    {
        iconUrl: blender,
        theme: 'btn-back-red',
        name: 'My 3D Projects',
        description: 'A collection of 3D assets and environments created using Blender. Focused on lighting, texturing, and creating optimized models for web and digital art.',
        link: 'https://www.artstation.com/calistha_tan', 
    }
];