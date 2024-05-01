import { Link } from "react-router-dom";
import React from "react";
const Navbar = () => {
    return (

        <nav className="nav-wrapper">
            <div className="container">
                <Link to="/" className="brand-logo">Shopping</Link>
                <h3>Shopping</h3>

                <ul className="right">
                    <li><Link to="/shop">Shop</Link></li>
                    <li><Link to="/cart">My cart</Link></li>
                </ul>
            </div>
        </nav>

    )

}
export default Navbar;