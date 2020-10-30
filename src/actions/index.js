const peopleListLoaded = (peopleList) => {
    return {
        type: 'PEOPLE_LOADED',
        payload: peopleList
    }    
};

export {
    peopleListLoaded
};