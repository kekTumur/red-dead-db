import React, { Component } from 'react'
import './people-list.css';
import withRedeadService from '../hoc';
import { connect } from 'react-redux';
import { peopleListLoaded, personClicked } from '../../actions';
import Spinner from '../spinner';

class PeopleList extends Component {

    componentDidMount() {
        this.props.reddeadService
            .getItems('characters')
            .then(this.props.peopleListLoaded);
    }

    render() {
        const { peopleList, personClicked, loading } = this.props;
        
        if (loading) {
            return <Spinner />
        } 

        return (
            <div className="list">
                <h2>Characters</h2>
                <ul>
                    {
                        peopleList.map(({id, name}) => {
                            return (
                                <li key={id}
                                    onClick={() => personClicked(id)}>
                                    {name}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = ({ peopleList, loading }) => {
    return { peopleList, loading };
};

const mapDispatchToProps = {
    peopleListLoaded,
    personClicked
};

export default withRedeadService()(
    connect(mapStateToProps, mapDispatchToProps)(PeopleList))

