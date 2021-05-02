import { faAddressCard, faFileWord, faHome, faMobile, faTasks, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="row align-items-center mb-5">
                <div className="col-6 p-2">
                    <i className="text-info"><b>mehedy.com</b></i>
                </div>
                <div className="col-6 justify-content-end ">
                    <Navbar className="justify-content-end  " expand="lg">
                        <Navbar.Toggle className="bg-danger" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse  id="basic-navbar-nav">
                            <Nav className="mr-auto" activeKey="/">
                                <Link className="p-2 text-danger" to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link>
                                <Link className="p-2 text-danger " to="/about"><FontAwesomeIcon icon={faAddressCard} /> About</Link>
                                <Link className="p-2  text-danger" to="/project"><FontAwesomeIcon icon={faTasks} /> Project</Link>
                                <Link className="p-2 text-danger" to="/resume"><FontAwesomeIcon icon={faFileWord} /> Resume</Link>
                                <Link className="p-2 text-danger" to="/blog"><FontAwesomeIcon icon={faThLarge} /> Blog</Link>
                                <Link className="p-2 text-danger" to="/contact"><FontAwesomeIcon icon={faMobile} /> Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;