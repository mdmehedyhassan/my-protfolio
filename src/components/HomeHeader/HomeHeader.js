import React from 'react';
import mehedy1 from '../../images/mehedy1.png'

const HomeHeader = () => {
    return (
        <div class="row mb-5 d-flex align-items-center text-light">
            <div class="col-md-6">
                <h1>Hello, I'M </h1>
                <h1>MD Mehedy Hassan</h1>
                <h3>Full Stack Web developer</h3>
                <h3>with in Bangladesh</h3>
                <a className="btn btn-success" target="_blank" href="https://drive.google.com/file/d/1quuqu9NmjQz4eSFOkHzfX2kLE0TqXeDV/view"> Download Resume</a>
            </div>
            <div class="col-md-6">
                <img className="w-100" src={mehedy1} alt=""/>
            </div>
        </div>
    );
};

export default HomeHeader;