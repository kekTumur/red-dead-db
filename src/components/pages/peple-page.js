import React from 'react'
import PeopleList from '../people-list'
import PeopleDetails from '../people-details';
import './pages.css';

const PeoplePage = () => {
    return (
        <div className="container">
            <PeopleList />
            <PeopleDetails />
        </div>
    )
};

export default PeoplePage;