import React, { Component } from 'react'
import './people-list.css';
import withRedeadService from '../hoc';
import { connect } from 'react-redux';
import { peopleListLoaded } from '../../actions';

class PeopleList extends Component {

    componentDidMount() {
        this.props.reddeadService
            .getItems('characters')
            .then(res => {
                this.props.peopleListLoaded(res);
            });
    }

    render() {
        const { peopleList } = this.props;
        return (
            <div className="list">
                <h2>Characters</h2>
                <ul>
                    {
                        peopleList.map(({id, name}) => {
                            return (
                                <li key={id}>
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

const mapStateToProps = ({ peopleList }) => {
    return { peopleList };
};

const mapDispatchToProps = {
    peopleListLoaded
};


export default withRedeadService()(
    connect(mapStateToProps, mapDispatchToProps)(PeopleList))

