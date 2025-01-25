import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-brand">Rita</div>
            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;
