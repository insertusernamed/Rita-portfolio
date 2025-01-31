import "../../styles/Navbar.css";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark  fixed-top">
            <a className="navbar-brand ms-4" href="#home-section">
                Rita
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav ms-2">
                    <li className="nav-item">
                        <a className="nav-link" href="#skills">
                            Skills
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#certifications">
                            Certifications
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
