import React from 'react';
import NavLinks from './NavLinks';
import { isMobile } from 'react-device-detect';
import { slide as Menu } from 'react-burger-menu'
import Slide from 'react-reveal/Slide'
import './../../css/styles.css'
import burgerStyle from './../../css/burgerStyles.css'

class TopNav extends React.Component {
    getNav() {
        if (isMobile) {
            return(
                <header className="header-down">
                    <div className="container-left">
                        <Menu style={burgerStyle}>
                            <a id="about-li" className="mobileMenu" href="#about">About</a>
                            <a id="work-exp-li" className="mobileMenu" href="#work-exp">Work Experience</a>
                            <a id="personal-projects-li" className="mobileMenu" href="#personal-projects">My Projects</a>
                            <a id="contact-li" className="mobileMenu" href="#contact">Contact</a>
                            <a id="resume-li" className="mobileMenu" href="#">Resume</a>
                        </Menu>
                    </div>
                    <div className="container-right">
                        <a href="/">
                            <div className="logo-mobile">
                                <p>MB</p>
                            </div>
                        </a>
                    </div>
                </header>
            );
        }
        return (<header className="header-down">
            <div className="container-left">
                <a href="/">
                    <div className="logo">
                        <p>MB</p>
                    </div>
                </a>
            </div>
            <div className="container-right">
                <nav className="desktopNav">
                    <ul>
                        <NavLinks display={'About'} href={'#about'} wait={2750}></NavLinks>
                        <NavLinks display={'Work Experience'} href={'#work-exp'} wait={3000}></NavLinks>
                        <NavLinks display={'Personal Projects'} href={'#personal-projects'} wait={3250}></NavLinks>
                        <NavLinks display={'Contact'} href={'#contact'} wait={3500}></NavLinks>
                        <NavLinks display={'Resume'} href={'#'} wait={3750} resume={true}></NavLinks>
                    </ul>
                </nav>
            </div>
        </header>);
    }

    render() {
        return this.getNav();
    }
}

export default TopNav;