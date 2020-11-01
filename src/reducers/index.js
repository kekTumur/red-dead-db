const initialState = {
    peopleList: [],
    currentCharacter: "6"
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