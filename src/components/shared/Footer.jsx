import "../../styles/Footer.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="social-links">
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                    <a href="mailto:your.email@example.com">
                        <FaEnvelope />
                    </a>
                </div>
                <div className="footer-text">
                    <p>
                        © {currentYear} Rita Yevtushenko. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
