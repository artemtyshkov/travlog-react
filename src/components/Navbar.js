import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/travlog-logo.png";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <div className="navbar__auth-buttons">
                        <a className="navbar__auth-buttons_login auth-buttons" href="https://google.com">Log In</a>
                        <a className="navbar__auth-buttons_signup auth-buttons" href="https://google.com">Sign up</a>
                    </div>
                        <Link path="/" className="navbar__logo">
                            <img
                                className="navbar__logo-img"
                                src={Logo}
                                alt="Travlog-logo"
                            />{" "}
                            <span className="navbar__logo-title">Travlog</span>
                        </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i
                            className={
                                click ? "fa-solid fa-xmark" : "fa-solid fa-bars"
                            }
                        ></i>
                    </div>
                </div>
                <ul className={click ? "menu-list_active" : "menu-list"}>
                    <li className="menu-list__item">Home</li>
                    <li className="menu-list__item">Discover</li>
                    <li className="menu-list__item">Special Deals</li>
                    <li className="menu-list__item">Contact</li>
                </ul>
            </header>
        </>
    );
}

export default Navbar;
