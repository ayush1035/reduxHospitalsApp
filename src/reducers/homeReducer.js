import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    hospitals: []
};

export const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_DATA_SUCCESS:
            return Object.assign({}, ...state, { hospitals: action.hospitals });
        case actionTypes.SAVE_DATA_SUCCESS:
            return Object.assign({}, ...state, { hospitals: action.hospitals });
        default:
            return state;

    }
};

