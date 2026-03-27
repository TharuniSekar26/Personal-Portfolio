import React, { useEffect, useState } from 'react'
import './navbar.css'
function navbar() {
    const [active, setActive] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            { threshold: 0.6 }
        );

        sections.forEach((section) => observer.observe(section));

        return () => sections.forEach((section) => observer.unobserve(section));
    }, []);

    return (
        <nav className='navbar'>
            <div className='logo'>
                <span></span>
                <span className='logo-txt'>tharuni.sekar</span>
            </div>

             {/* ✅ Menu Icon */}
            <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                <i className="bi bi-list"></i>
            </div>

            <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                <li>
                    <a href="#home" className={active === "home" ? "active" : ""}>
                        Home
                    </a>
                </li>

                <li>
                    <a href="#about" className={active === "about" ? "active" : ""}>
                        About
                    </a>
                </li>

                <li>
                    <a href="#skills" className={active === "skills" ? "active" : ""}>
                        Skills & Tech
                    </a>
                </li>

                <li>
                    <a href="#education" className={active === "education" ? "active" : ""}>
                        Education
                    </a>
                </li>

                <li>
                    <a href="#projects" className={active === "projects" ? "active" : ""}>
                        Projects
                    </a>
                </li>

                <li>
                    <a href="#experience" className={active === "experience" ? "active" : ""}>
                        Experience
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default navbar