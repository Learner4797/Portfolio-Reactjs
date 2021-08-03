import React from 'react';
import "./footer.css";

export default function Footer() {
    return (
        <div>
            <footer>
            <a href="#home" id="navbar__logo" className="textfoot">PORTFOLIO</a>
            <div className="footer-socials">
                <a href="https://www.facebook.com/profile.php?id=100009849559107" target="_blank-page"><img
                        src="./images/facebook.svg" alt="Facebook"/></a>
                <a href="https://www.instagram.com/ash1sh_1hakur10/?hl=en" target="_blank-page"><img
                        src="./images/instagram.svg" alt="instagram"/></a>
                <a href="https://www.linkedin.com/in/ashish-singh-1771091a5/" target="_blank-page"><img
                        src="./images/linkedin.svg" alt="linkedin"/></a>
                <a href="https://github.com/Learner4797" target="_blank-page"><img className="gitpic" src="./images/GitHub.png" alt="github"
                        /></a>
            </div>
            <div className="copyright">
                Copyright 2021 &copy; Ashish singh . All rights reserved.
            </div>
        </footer>
        </div>
    )
}
