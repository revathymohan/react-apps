import React, { useEffect, useState } from "react";
import { menuItems } from './MenuItems';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';
//import CustomBurgerIcon from "../../images/menu.png";

const CustomBurgerIcon = () => <img className='images' src={require("../../images/menu.png")} />;


const NavBar = () => {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo" onClick={handleShowNavbar}>
                    <CustomBurgerIcon />
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/blogs">Blog</Link>
                        </li>
                        <li>
                            <Link to="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )


}






export default NavBar;