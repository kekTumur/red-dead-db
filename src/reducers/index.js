const initialState = {
    peopleList: [],
    currentCharacter: {
        name: 'Arthur Morgan',
        age: 35,
        nationality: 'American',
        coverImage: 'https://i.pinimg.com/originals/90/09/79/900979ebb3fe7ed2b6c0436a67ef02c3.jpg'
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PEOPLE_LOADED':
            console.log(action.payload);
            return {
                ...state,
                peopleList: action.payload
            }
        default:
            return state;
    }
}

export default reducer;