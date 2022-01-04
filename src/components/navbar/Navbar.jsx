import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/alan-on-computer-logo.png';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#aboutMe">About Me</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#experience">Experience</a></p>
    <p><a href="#blog">Blog</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="navigation__navbar">
            <div className="navigation__navbar-links">
                <div className="navigation__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navigation__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="navigation__navbar-contact">
                <p>
                    <a href = "mailto: ajtorres729@gmail.com">send email</a>
                </p>
                <button type="button">
                    <a href="https://github.com/alantorres4" target="__blank">github</a>
                </button>
            </div>
            <div className="navigation__navbar-menu">
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }

                {toggleMenu && (
                    <div className="navigation__navbar-menu_container scale-up-center">
                        <div className="navigation__navbar-menu_container-links">
                            <Menu />
                            <div className="navigation__navbar-menu_container-links-contact">
                                <p>Contact</p>
                                <button type="button">GitHub</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar