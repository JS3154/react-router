import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="navbar">
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/providers">Provider List</Link></li>
            </ul>
        </nav>
        </div>
    )
}

export default Nav;