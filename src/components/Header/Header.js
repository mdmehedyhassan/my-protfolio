import { faAddressCard, faFileWord, faHome, faMobile, faTasks, faThLarge, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from "react";
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;

const Header = () => {
    const [theme, setTheme] = useState("light");
    const [darkMode, setDarkMode] = useState(true);

    const themeToggler = () => {
        theme === "light" ? setTheme("dark") : setTheme("light");
    };
    return (
        <div>
            <div className="row align-items-center mb-5">
                <div className="col-3 p-2">
                    <i className="text-info"><b>mehedy.com</b></i>
                </div>
                <div className="col-9 justify-content-end ">
                    <Navbar className="justify-content-end  " expand="lg">
                        <Navbar.Toggle className="bg-danger" aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto" activeKey="/">
                                <Link className="p-2 text-danger" to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link>
                                <Link className="p-2 text-danger " to="/about"><FontAwesomeIcon icon={faAddressCard} /> About</Link>
                                <Link className="p-2  text-danger" to="/project"><FontAwesomeIcon icon={faTasks} /> Project</Link>
                                <Link className="p-2 text-danger" to="/resume"><FontAwesomeIcon icon={faFileWord} /> Resume</Link>
                                <Link className="p-2 text-danger" to="/blog"><FontAwesomeIcon icon={faThLarge} /> Blog</Link>
                                <Link className="p-2 text-danger" to="/contact"><FontAwesomeIcon icon={faMobile} /> Contact</Link>
                            </Nav>
                        </Navbar.Collapse>
                        <ThemeProvider theme={theme === "dark" ? lightTheme : darkTheme}>
                            <GlobalStyles />
                            <StyledApp>
                                <span className="p-2" onClick={() => [themeToggler(), setDarkMode(!darkMode)]}>{darkMode ? <span className="btn btn-outline-info">off <FontAwesomeIcon icon={faMoon} /></span> : <span className="btn btn-dark">on <FontAwesomeIcon icon={faMoon} /></span>} </span>
                            </StyledApp>
                        </ThemeProvider>
                    </Navbar>
                </div>

            </div>
        </div>
    );
};

export default Header;