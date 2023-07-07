import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from "./logo.png"
import "./Nav.css"
const Nav = () => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <nav className="navbarmusic" >
                <div className="navbar__logo animate__animated animate__fadeInUp animate__delay-1s">
                    <NavLink to="#">
                        <img src={logo} alt="" />
                    </NavLink>
                </div>
                <ul style={{ marginBottom: "0px", paddingLeft: "0" }} className={open ? "navbar__listms active" : "animate__animated animate__fadeInUp animate__delay-1s navbar__listms"}>
                    <li>
                        <NavLink className={location.pathname === "/" ? "currentPage" : ""} to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className={location.pathname === "/achievements" ? "currentPage" : ""} to="/achievements">Achievements</NavLink>
                    </li>
                    <li>
                        <NavLink className={location.pathname === "/sponsors" ? "currentPage" : ""} to="/sponsors">Sponsors</NavLink>
                    </li>
                    <li>
                        <NavLink className={location.pathname === "/halloffame" ? "currentPage" : ""} to="/halloffame">Hall of Fame</NavLink>
                    </li>
                    <li>
                        <NavLink className={location.pathname === "/about" ? "currentPage" : ""} to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink className={location.pathname === "/contactus" ? "currentPage" : ""} to="/contactus">Contact Us</NavLink>
                    </li>
                    <li>
                        <NavLink className={location.pathname === "/apply" ? "applybtn currentPage" : " applybtn"} to="#">Apply Now</NavLink>
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