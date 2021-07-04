import React from 'react';
import ProjectDetail from '../ProjectDetail/ProjectDetail';
import project from '../../images/project.gif'

const projectDetails = [
    {
        id: 1,
        title: 'Jersey Shop',
        img: 'https://i.ibb.co/zSpSZDQ/jersey.png',
        description: 'This website is for selling jersey. Here you can order all kinds of jerseys.',
        technology: 'React js, JavaScript, Boostrap, MongoDB, React Routing, Heroku, Firebase, GitHub.',
        liveLink: 'https://project-jersey-shop.web.app/',
        codeLink: 'https://github.com/mdmehedyhassan/jerseyShop-client'
    },
    {
        id: 2,
        title: 'Shoplify',
        img: 'https://i.ibb.co/N2ybf93/shoplify.png',
        description: 'This is my first team project. Here the three of us worked together. Here we are creating an ecommerce site.',
        technology: 'GitHub, React Redux',
        liveLink: 'https://shoplify-6376f.web.app/',
        codeLink: 'https://github.com/ash358241/your-shop'
    },
    {
        id: 3,
        title: 'Hero Bicycle',
        img: 'https://i.ibb.co/6ZCVnjd/bicycel.png',
        description: 'This website is a bicycle repair. Problems are solved on all types of bicycles here. ',
        technology: 'React js, JavaScript, Boostrap, MongoDB, React Routing, Heroku, Firebase, GitHub.',
        liveLink: 'https://hero-bicycle.web.app/',
        codeLink: 'https://github.com/mdmehedyhassan/hero-bicycle-client'
    },
    {
        id: 4,
        title: 'Simple React',
        img: 'https://i.ibb.co/MZdWLt9/ipl.png',
        description: 'On this wave site you will see a chart of players buying and selling in IPL games in 2021.',
        technology: 'React, JavaScript, Boostrap, netlify, GitHub',
        liveLink: 'https://priceless-mayer-90330d.netlify.app/',
        codeLink: 'https://github.com/mdmehedyhassan/simple-react'
    },
    {
        id: 5,
        title: 'React Router',
        img: 'https://i.ibb.co/yyBNDzN/epl.png',
        description: 'In the project directory, Here you can see the details of all the teams in the English Premier League.',
        technology: 'React, JavaScript, Boostrap, netlify, GitHub',
        liveLink: 'https://sleepy-rosalind-ad6df4.netlify.app/',
        codeLink: 'https://github.com/mdmehedyhassan/react-router'
    },
    {
        id: 6,
        title: 'Mega Bus',
        img: 'https://i.ibb.co/6FMwpsx/bus.png',
        description: 'You can travel anywhere in Bangladesh by bus. And you can buy round trip tickets at once.',
        technology: 'JavaScript, Boostrap, CSS, HTML, GitHub',
        liveLink: 'https://mdmehedyhassan.github.io/mega-bus/',
        codeLink: 'https://github.com/mdmehedyhassan/mega-bus'
    },
    {
        id: 7,
        title: 'Super Riders',
        img: 'https://i.ibb.co/wcwB4bt/super.png',
        description: 'In the project directory, Here you can see the details of all the teams in the English Premier League. ',
        technology: 'React.js, JavaScript, Bootstrap, React Router, Github.',
        liveLink: 'https://super-riders-m.web.app/',
        codeLink: 'https://github.com/mdmehedyhassan/super-riders'
    }
    
]

const Project = () => {
    return (
        <div className="text-dark">
            <h1 className="text-center rounded-pill text-danger mt-5 border p-2 border-info"  data-aos="fade-down" data-aos-easing="linear" data-aos-duration="500">My Resent Project</h1>
            <div className="text-center"  data-aos="zoom-in-down"  data-aos-duration="3000">
                <img className="w-50" src={project} alt=""/>
            </div>
            <div className="row">
                {
                    projectDetails.map(project => <ProjectDetail key={project.id} project={project}></ProjectDetail>)
                }
            </div>
        </div>
    );
};

export default Project;