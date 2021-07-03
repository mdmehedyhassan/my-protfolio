import { faFacebook, faGithub, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import HeaderSvg from '../../svg/Header.svg'
import TextAnimation from '../TextAnimation/TextAnimation';
import './HomeHeader.css'


const HomeHeader = () => {
    return (
        <div className="row mb-5 d-flex align-items-center text-danger">
            <div className="col-md-6 font-creepster animate__animated animate__fadeInLeft">
                <h1>Hello, I'M </h1>
                <h1 className="font-monoton text-success ">MD Mehedy Hassan</h1>
                <TextAnimation></TextAnimation>
                <div className="col d-flex ">
                <a className="p-2"     href="https://www.facebook.com/mehedysr"><FontAwesomeIcon icon={faFacebook} /></a>
                <a className="p-2  text-light"      href="https://github.com/mdmehedyhassan"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="p-2 text-primary"      href="https://twitter.com/MdMehedyHassa10"><FontAwesomeIcon icon={faTwitter} /></a>
                <a className="p-2"      href="https://www.linkedin.com/in/md-mehedy-hassan-387278203/"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a className="p-2 text-danger"      href="https://www.youtube.com/"><FontAwesomeIcon icon={faYoutube} /></a>
            </div>
                <a className="btn btn-danger"    href="https://drive.google.com/file/d/1quuqu9NmjQz4eSFOkHzfX2kLE0TqXeDV/view"><FontAwesomeIcon icon={faDownload} />  Download Resume</a>
            </div>
            <div className="col-md-6 animate__animated animate__fadeInRight">
                <img className="w-100" src={HeaderSvg} alt=""/>
            </div>
        </div>
    );
};

export default HomeHeader;