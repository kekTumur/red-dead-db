const peopleListLoaded = (peopleList) => {
    return {
        type: 'PEOPLE_LOADED',
        payload: peopleList
    }    
};

const personClicked = (id) => {
    return {
        type: 'PERSON_CLICKED',
        payload: id
    };
};

export {
    peopleListLoaded,
    personClicked
};