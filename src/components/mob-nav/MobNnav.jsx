import React from 'react';
import "./mobNav.css";
import MenuIcon from '@material-ui/icons/Menu';
import {openNav,closeNav}  from "./nav.js";

export default function MobNnav() {
    return (
        <div>
            <div className="mobile-nav">
            <div id="navbar">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onClick={closeNav}> &times;</a>
                    <div className="profimg"><img src="./images/ashish.jpg"/></div>
                    <a href="#home" onClick={closeNav}>Home</a>
                    <a href="#about" onClick={closeNav}>About</a>
                    <a href="#skills" onClick={closeNav}>Skills</a>
                    <a href="#certifications" onClick={closeNav}>Certification</a>
                    <a href="#projects" onClick={closeNav}>Projects</a>
                </div>
                <span onClick={openNav} className="menu"><MenuIcon/></span>
            </div>
        </div>
        </div>
    )
}
