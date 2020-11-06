const initialState = {
    peopleList: [],
    currentCharacter: "0",
    loading: true
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PEOPLE_LOADED':
            return {
                ...state,
                peopleList: action.payload,
                loading: false
            }
        case 'PERSON_CLICKED':
            return {
                ...state,
                currentCharacter: action.payload
            }
        default:
            return state;
    }
}

export default reducer;