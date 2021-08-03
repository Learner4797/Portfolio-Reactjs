import React from 'react';
import "./about.css";

export default function About() {
    return (
        <div>
            <section className="about" id="about">
            <div className="container flex items-center about-inner-wrap">
                <div className="flex-1">
                    {/* <img className="about-me-img" src="images/avatar.jpeg" alt="man"/> */}
                    <img className="about-me-img" src="images/man-2.png" alt="man"/>
                </div>
                <div className="flex-1 right">
                    <h1>About <span>Me</span></h1>
                    <h3>Hello! i'm Ashish singh.</h3>
                    <p>Hi, I am Ashish singh , hardworking engineering graduate in computer science engineering with
                        an overall cgpa of 8.13 SGPA (upto 3rd semester) .The 4 years during my degree has taught me a
                        lot about the importance
                        of upgrading my skills with the changing world so , along with my degree I added many relevant
                        skills like HTML,CSS,JAVASCRIPT,REACT JS,NODE JS,mongoDB,MySQL, JAVA, ANDROID DEVELOPMENT.
                        Created many projects with these skills , and also these helped me a lot in my final year
                        project called ________ . It was during the college time only I learnt that I am a good follower
                    </p>
                    <div className="social">
                        <a href="https://www.facebook.com/profile.php?id=100009849559107" target="_blank-page"><img
                                src="./images/facebook.svg" alt="Facebook"/></a>
                        <a href="https://www.instagram.com/ash1sh_1hakur10/?hl=en" target="_blank-page"><img
                                src="./images/instagram.svg" alt="instagram"/></a>
                        <a href="https://www.linkedin.com/in/ashish-singh-1771091a5/" target="_blank-page"><img
                                src="./images/linkedin.svg" alt="linkedin"/></a>
                        <a href="https://github.com/Learner4797" target="_blank-page"><img src="./images/github.svg"
                                alt="github"/></a>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
