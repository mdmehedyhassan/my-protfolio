import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import mehedy1 from '../../images/mehedy1.png'

const HomeHeader = () => {
    return (
        <div className="row mb-5 d-flex align-items-center text-light">
            <div className="col-md-6">
                <h1>Hello, I'M </h1>
                <h1>MD Mehedy Hassan</h1>
                <h3>Full Stack Web developer</h3>
                <h3>with in Bangladesh</h3>
                <div className="col d-flex ">
                <a className="p-2" target="_blank"  href="https://www.facebook.com/mehedysr"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="p-2  text-light" target="_blank"   href="https://github.com/mdmehedyhassan"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="p-2 text-primary" target="_blank"   href="https://twitter.com/MdMehedyHassa10"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="p-2" target="_blank"   href="https://www.linkedin.com/in/md-mehedy-hassan-387278203/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="p-2 text-danger"  target="_blank"  href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
                <a className="btn btn-success" target="_blank" href="https://drive.google.com/file/d/1quuqu9NmjQz4eSFOkHzfX2kLE0TqXeDV/view"><FontAwesomeIcon icon={faDownload} />  Download Resume</a>
            </div>
            <div className="col-md-6">
                <img className="w-100" src={mehedy1} alt=""/>
            </div>
        </div>
    );
};

export default HomeHeader;