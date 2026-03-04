import React from 'react'
import './navbar.css'
function navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <span></span>
                <span className='logo-txt'>tharuni.sekar</span>
            </div>
            <ul className='nav-links'>
                <li className="active">Home</li>
                <li>About</li>
                <li>Skills & Tech</li>
                <li>Education</li>
                <li>Projects</li>
                <li>Experience & Achievements</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default navbar