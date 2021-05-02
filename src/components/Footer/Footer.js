import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
            <div  style={{backgroundColor: '#dfe185'}}  className="col d-flex justify-content-center">
                <a className="p-2"    href="https://www.facebook.com/mehedysr"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="p-2  text-dark"     href="https://github.com/mdmehedyhassan"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="p-2 text-primary"     href="https://twitter.com/MdMehedyHassa10"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="p-2"     href="https://www.linkedin.com/in/md-mehedy-hassan-387278203/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="p-2 text-danger"     href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>

    );
};

export default Footer;