import * as actionTypes from "../constants/actionTypes.js";


const initialState = {
    searchData: ""
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_DATA:
            return Object.assign({}, ...state, { searchData: action.searchData });
        default:
            return state;

    }
};

