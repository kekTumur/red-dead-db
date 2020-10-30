import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Read Dead DB</Link>
            </div>
            <ul className="header-menu">
                <li>
                    <Link to="/people/">
                        People
                    </Link>
                </li>
                <li>
                    <Link to="/guns/">
                        Guns
                    </Link>
                </li>
                <li>
                    <Link to="/bands/">
                        Bands
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;