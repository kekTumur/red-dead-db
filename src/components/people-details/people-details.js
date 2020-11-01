import React, { Component } from 'react'
import { connect } from 'react-redux';
import './people-detaisl.css';

class PeopleDetails extends Component {

    state = {
        accordionClassName: undefined
    };

    accordionClick = () => {
        this.setState(({ accordionClassName }) => {
            return {
                accordionClassName: accordionClassName ? '' : 'active' 
            };
        });
    }
    
    render() {
        const { peopleList, currentCharacter } = this.props;
        const { accordionClassName } = this.state;

        if (peopleList.length < 1) {
            return <h2>Select person from list</h2>
        } else {
            const { name, age, gender, nationality, coverImage, phrase } = peopleList.find(({id}) => id === currentCharacter);
            return (
                <div className="people-details">
                    <ul className="people-details-list">
                        <li>Name: {name}</li>
                        <li>Age: {age}</li>
                        <li>Nationality: {nationality}</li>
                        <li>Gender: {gender}</li>
                        <li>
                            <div className="accordion"
                                onClick={this.accordionClick}>
                                <div className={`contentBx ${accordionClassName}`}>
                                    <div className="label">Phrase</div>
                                    <div className="content">
                                        <p>
                                            {phrase}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div className="coverImage">
                        <img src={coverImage} alt="image" />
                    </div>
                </div>
            );
        } 
    }   
}

const mapStateToProps = ({ currentCharacter, peopleList }) => {
    return { currentCharacter, peopleList };
};

export default connect(mapStateToProps)(PeopleDetails);
