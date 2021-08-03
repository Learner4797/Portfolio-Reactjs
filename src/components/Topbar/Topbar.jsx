import React from 'react';
import "./topbar.css";

export default function Topbar() {
    return (
            <nav id="main-nav" className="flex items-center  justify-between">
                    <div className="left flex items-center">
                        <div className="branding">
                            <a href="#home" id="navbar__logo">PORTFOLIO</a>
                        </div>
                        <div>
                            <a href="#home">Home</a>
                            <a href="#about">About</a>
                            <a href="#skills">Skills</a>
                            <a href="#certifications">Certification</a>
                            <a href="#projects">Projects</a>
                        </div>
                    </div>
                    <div className="right">
                        <button className="btn btn-primary rightbtn" id="#connect">Github</button>
                        
                    </div>
                </nav>
    )
}
