import React from 'react';
import "./mobNav.css";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';

export default function MobNnav() {

    function openNav(){
        document.getElementById("mySidenav").style.width = "250px";
    }
    function closeNav(){
        document.getElementById("mySidenav").style.width = "0";
    }
    return (
        <div>
            <div className="mobile-nav">
            <div id="navbar">
                <div id="mySidenav" className="sidenav">
                    <a href="javascript:void(0)" className="closebtn" onclick={closeNav}> &times;</a>
                    <div className="profimg"><AccountCircleIcon/></div>
                    <a href="#home" onclick="closeNav()">Home</a>
                    <a href="#about" onclick="closeNav()">About</a>
                    <a href="#skills" onclick="closeNav()">Skills</a>
                    <a href="#certifications" onclick="closeNav()">Certification</a>
                    <a href="#projects" onclick="closeNav()">Projects</a>
                </div>
                <span onclick={openNav} className="menu"><MenuIcon/></span>
            </div>
        </div>
        </div>
    )
}
