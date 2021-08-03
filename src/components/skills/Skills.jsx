import React from 'react';
import "./skills.css";

export default function Skills() {
    return (
        <div>
            <section className="skills" id="skills">
            <div className="container">
                <h1 className="section-heading" style={{color: "white"}}><span>My</span> Skills</h1>
                <p>Schooling doesn't assure employment but skill does.</p>
                <div className="card-wrapper">
                    <div className="card">
                        <img src="./images/skills/html.png" alt="html"/>
                        <h2>HTML</h2>
                        <p>The HyperText Markup Language, or HTML is the standard markup language for documents designed
                            to
                            be displayed in a web browser.</p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/css.png" alt="css"/>
                        <h2>CSS</h2>
                        <p>Cascading Style Sheets is a style sheet language used for describing the presentation of a
                            document written in a markup language such as HTML.</p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/javascript.png" alt="javascript"/>
                        <h2>JAVASCRIPT</h2>
                        <p>JavaScript, often abbreviated as JS, is a programming language that conforms to the
                            ECMAScript
                            specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/react-js.png" alt="react-js"/>
                        <h2>REACT JS</h2>
                        <p>React is an open-source front-end JavaScript library for building user interfaces or UI
                            components. It is maintained by Facebook and a community of individual developers and
                            companies.
                        </p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/node-js.png" alt="node-js"/>
                        <h2>NODE JS</h2>
                        <p>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs
                            on
                            the V8 engine and executes JavaScript code outside a web browser.</p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/mongodb.png" alt="mongoDB"/>
                        <h2>mongoDB</h2>
                        <p>MongoDB is a source-available cross-platform document-oriented database program. Classified
                            as a
                            NoSQL database program, MongoDB uses JSON-like documents with optional schemas. </p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/git.png" alt="MySQL"/>
                        <h2>MySQL</h2>
                        <p>MySQL is an open-source relational database management system. Its name is a combination of
                            "My",
                            the name of co-founder Michael Widenius's daughter, and "SQL", the abbreviation for
                            Structured
                            Query Language. </p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/java.png" alt="java"/>
                        <h2>JAVA</h2>
                        <p>Java is a high-level, className-based, object-oriented programming language that is designed to
                            have
                            as few implementation dependencies as possible.</p>
                    </div>
                    <div className="card">
                        <img src="./images/skills/android.png" alt="android"/>
                        <h2>ANDROID DEVELOPMENT</h2>
                        <p>Android is a mobile operating system based on a modified version of the Linux kernel and
                            other
                            open source software, designed primarily for touchscreen mobile devices such as smartphones
                            and
                            tablets.</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}
