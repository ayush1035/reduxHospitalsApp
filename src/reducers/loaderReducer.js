import * as actionTypes from "../constants/actionTypes.js";

const initialState = {
    loader:false
};

export const loaderReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_LOADER:
           return  Object.assign({},...state,{loader:action.loader});
        default:
            return state;

    }
};

