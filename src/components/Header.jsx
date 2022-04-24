import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="brand">
                        <Link to="/">Read List</Link>
                    </div>
                    <ul className="nav-links">
                        <li> <Link to="/">Read List</Link></li>
                        <li> <Link to="/read">Read</Link></li>
                        <li> <Link to="/add" className='btn'>+ Add</Link></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};

export default Header;