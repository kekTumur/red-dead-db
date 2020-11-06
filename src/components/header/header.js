import React from 'react'
import { Link } from 'react-router-dom';
import './header.css';
import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';

const Header = () => {

    const selectPeople = createSelector(
        state => state.peopleList,
        peopleList => peopleList.filter(item => item.age > 23)
    );
    
    const numOfPeople = useSelector(selectPeople);
    console.log(numOfPeople);
    

    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Read Dead DB</Link>
            </div>
            <ul className="header-menu">
                <li>
                    <Link to="/people">
                        People
                    </Link>
                </li>
                <li>
                    <Link to="/guns">
                        Guns
                    </Link>
                </li>
                <li>
                    <Link to="/bands">
                        Bands
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;