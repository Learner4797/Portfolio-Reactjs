import React from 'react';
import "./projects.css";

export default function Projects() {
    return (
        <div>
            <section className="projects" id="projects">
            <div className="container">
                <h1 className="section-heading"><span>My</span> Projects</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, odit!</p>
                <div className="card-wrapper">
                    <div className="card">
                        <div className="overlay">
                            <span>Html,css</span>
                            <a href="https://jovial-northcutt-c5a458.netlify.app/" target="_blank-page">Portfolio</a>
                        </div>
                        <img src="images/portfolio.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Html,css</span>
                            <a href="https://practical-fermi-d0b5f4.netlify.app/" target="_blank-page">Landing page</a>
                        </div>
                        <img src="./images/Screenshot from 2021-08-03 17-45-55.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Java and MySQL</span>
                            <a href="https://github.com/Learner4797/StudentManagementSystem.git">Student Management
                                System</a>
                        </div>
                        <img src="images/studentMS.PNG" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Java and MySQL</span>
                            <a href="https://github.com/Learner4797/bookManagementSystem.git">book Management System</a>
                        </div>
                        <img src="images/BookMS.PNG" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Html,css</span>
                            <a href="https://quirky-elion-2f1a2e.netlify.app/">Starbucks clone</a>
                        </div>
                        <img src="images/Screenshot from 2021-08-02 01-21-34.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Html,css</span>
                            <a href="https://zen-lewin-9b03e8.netlify.app/">Landing page</a>
                        </div>
                        <img src="images/Screenshot from 2021-08-02 01-26-00.png" alt=""/>
                    </div>
                    <div className="card">
                        <div className="overlay">
                            <span>Html,css</span>
                            <a href="https://gracious-mccarthy-af956f.netlify.app/">Landing page</a>
                        </div>
                        <img src="images/Screenshot from 2021-08-02 01-28-39.png" alt=""/>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
