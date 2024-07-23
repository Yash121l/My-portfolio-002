
import React from "react";
import password_Generator from '../assets/Password_Generator.png';
import game_2048 from '../assets/2048_game.png';
import Community_Website from '../assets/Community_Website.png';
import Footer from './Footer'

const ProjectCard = ({ image, title, description, git, technologies, site }) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href={site}>
                <img className="w-full rounded-t-lg h-auto object-cover " src={image} alt="" />
            </a>
            <div className="p-4 sm:p-6">
                <a href="#">
                    <h5 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500">{title}</h5>
                </a>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                        site={item.site}
                    />
                ))}
            </div>
            <Footer />
        </div>
    );
}


export const project = [
    {
        title: 'Community Engagement Website',
        description: 'As part of my recent project, I developed a comprehensive Community Engagements website for College aimed at fostering connectivity and collaboration within the college community. This project showcases my skills in web development, community building, and user-centric design.',
        image: `${ Community_Website }`,
        git: 'https://github.com/Yash121l/Community-Engagement-website',
        technologies: ['ReactJS', 'Tailwind CSS'],
        site : 'https://city.rishihood.org/',
    },
    {
        title: 'Password Generator',
        description: 'The Password Generator is a JavaScript-based application designed to create strong and secure passwords quickly and easily. This tool is ideal for users who need to generate passwords for various accounts, ensuring that each password is unique and adheres to best security practices.',
        image: `${ password_Generator }`,
        git: 'https://github.com/Yash121l/Password_Generator',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        site : 'https://yash121l.github.io/Password_Generator/',
    },
    {
        title: '2048 Game',
        description: 'Welcome to the 2048 Game, a fun and addictive puzzle game that will challenge your strategic thinking! This game is built using HTML, CSS, and JavaScript, providing a smooth and interactive experience.',
        image: `${ game_2048 }`,
        git: "https://github.com/Yash121l/2024-game",
        technologies: ['HTML', 'CSS', 'JavaScript'],
        site : 'https://yash121l.github.io/2024-game/',
    }
]

export default Projects