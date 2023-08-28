import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-links">
                    <a href="#">About</a>
                    <a href="#">Store locator</a>
                    <a href="#">FAQs</a>
                    <a href="#">News</a>
                    <a href="#">Careers</a>
                    <a href="#">Contact Us</a>
                </div>
                <p className="love">
                    Design &nbsp; by{" "}
                    <a
                        href="https://github.com/Abderraouf-Rahmani"
                        target='_blank'
                        rel='noreferrer'
                        style={{ color: 'white' }}
                    >
                        &nbsp; Abderraouf
                    </a>
                </p>
            </footer>
        </>
    );
}

export default Footer;