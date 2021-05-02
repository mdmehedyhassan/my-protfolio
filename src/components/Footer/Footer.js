import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
            <div  style={{backgroundColor: '#dfe185'}}  class="col d-flex justify-content-center">
                <a className="p-2" target="_blank"  href="https://www.facebook.com/mehedysr"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="p-2  text-dark" target="_blank"   href="https://github.com/mdmehedyhassan"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="p-2 text-primary" target="_blank"   href="https://twitter.com/MdMehedyHassa10"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="p-2" target="_blank"   href="https://www.linkedin.com/in/md-mehedy-hassan-387278203/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="p-2 text-danger"  target="_blank"  href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>

    );
};

export default Footer;