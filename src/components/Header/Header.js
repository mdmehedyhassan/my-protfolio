import { faAddressCard, faFileWord, faHome, faTasks, faThLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div style={{ backgroundColor: '#dfe185' }} className="row align-items-center">
                <div className="col-6 p-2">
                    <h1 className=" text-primary">Mehedy</h1>
                </div>
                <div className="col-6 justify-content-end ">
                    <Navbar className="justify-content-end  " expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav ">
                            <Nav className="mr-auto" activeKey="/home">
                                <Link className="p-2" to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link>
                                <Link className="p-2" to="/about"><FontAwesomeIcon icon={faAddressCard} /> About</Link>
                                <Link className="p-2" to="/project"><FontAwesomeIcon icon={faTasks} /> Project</Link>
                                <Link className="p-2" to="/resume"><FontAwesomeIcon icon={faFileWord} /> Resume</Link>
                                <Link className="p-2" to="/blog"><FontAwesomeIcon icon={faThLarge} /> Blog</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>
            </div>
        </div>
    );
};

export default Header;