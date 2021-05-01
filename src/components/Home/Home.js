import React from 'react';
import About from '../About/About';
import Blog from '../Blog/Blog';
import HomeHeader from '../HomeHeader/HomeHeader';
import Project from '../Project/Project';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div>
            <HomeHeader></HomeHeader>
            <About></About>
            <Project></Project>
            <Resume></Resume>
            <Blog></Blog>
        </div>
    );
};

export default Home;