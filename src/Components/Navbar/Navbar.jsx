import React from 'react'
import '../Navbar/Navbar.css';
import { NavLink } from 'react-router-dom';
function Navbar() {
    return (
        <div className="n-wrapper">
            
            <div className="n-left">
                <div className="n-name">
                    Andrew
                </div>
                <span>Toggle</span>
            </div>
            <div className="n-right">
                <div className="n-list">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/portfolio">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/experience">Experience</NavLink>
                        </li>
                        <li>
                        <NavLink to="/contact">Contact</NavLink>
                        </li>
                     
                        <li>
                            <NavLink to="/testimonial">Testimonials</NavLink>
                        </li>
                    </ul>
                </div>
                <button className="button n-btn">Contact </button>
            </div>
        </div>
    )
}

export default Navbar