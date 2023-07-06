import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "./logo.png"
import "./Nav.css"
const Nav = () => {
    
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav className="navbarmusic" >
                <div className="navbar__logo animate__animated animate__fadeInUp animate__delay-1s">
                    <NavLink to="#">
                        <img  src={logo} alt="" />
                    </NavLink>
                </div>
                <ul style={{ marginBottom: "0px" , paddingLeft: "0"}} className={open ? "navbar__listms active" : "animate__animated animate__fadeInUp animate__delay-1s navbar__listms"}>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Achievements">Achievements</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sponsors">Sponsors</NavLink>
                    </li>
                    <li>
                        <NavLink to="/halloffame">Hall of Fame</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink className="applybtn" to="#">Apply Now</NavLink>
                    </li>
                </ul>
                <div className="navbar__menu" onClick={handleClick}>
                    <div className={open ? "navbar__menu-icon open" : "navbar__menu-icon"}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav