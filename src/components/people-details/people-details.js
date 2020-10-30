import React from 'react'
import { connect } from 'react-redux';
import './people-detaisl.css';

const PeopleDetails = ({ currentCharacter }) => {
    const { name, age, nationality, coverImage } = currentCharacter;
    return (
        <div className="people-details">
            <ul className="people-details-list">
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>Nationality: {nationality}</li>
            </ul>
            <div className="coverImage">
                <img src={coverImage} alt="image" />
            </div>
        </div>
    );
}

const mapStateToProps = ({ currentCharacter }) => {
    return { currentCharacter };
};

export default connect(mapStateToProps)(PeopleDetails);