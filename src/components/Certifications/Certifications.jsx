import React from 'react';
import "./certification.css";

export default function Certifications() {
    return (
        <div>
            <section className="certifications" id="certifications">
            <div className="container">
                <h1 className="section-heading"><span>My</span> Certifications</h1>
                <p>Earning a certificate or degree, or both, after high school opens the door to countless economic
                    opportunities.</p>
                <div className="card-wrapper">
                    <div className="card">
                        <a href="https://www.udemy.com/certificate/UC-d77723bf-785e-4008-ab1f-6d31f4bffd94/"
                            target="_blank-page"><img src="./images/certificates/udemy c.jpg" alt=""/></a>
                        <h2>Master The C Programming Language</h2>
                    </div>
                    <div className="card">
                        <a href="
                        https://www.coursera.org/account/accomplishments/certificate/S7MH6F857MHQ"
                            target="_blank-page"><img src="./images/certificates/Coursera responsie design.jpg"
                                alt=""/></a>
                        <h2>Advanced Styling with Responsive Design</h2>
                    </div>
                    <div className="card">
                        <a href="https://www.udemy.com/certificate/UC-ad559cc8-b7f6-4f67-9dca-211bcf20f37f/"
                            target="_blank-page"><img src="./images/certificates/front developement.jpg" alt=""/></a>
                        <h2>HTML and CSS for Beginners - Build a Website & launch Online</h2>
                    </div>
                    <div className="card">
                        <a href="https://www.awseducate.com/student/ViewCertificateOfCompletion?jrId=a0z1N000006qNrVQAU"
                            target="_blank-page"><img src="./images/certificates/web development engineer.jpg" alt=""/></a>
                        <h2>Web Development Engineer From AWS</h2>
                    </div>
                    <div className="card">
                        <a href="#" target="_blank-page"><img src="./images/certificates/web development engineer.jpg"
                                alt=""/></a>
                        <h2>Java</h2>
                    </div>
                    <div className="card">
                        <a href="#" target="_blank-page"><img src="./images/certificates/web development engineer.jpg"
                                alt=""/></a>
                        <h2>Android developement</h2>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
