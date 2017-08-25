import { errorHandleReducer } from '../reducers/errorHandleReducer.js'
import * as types from '../constants/ActionTypes.js'

describe('error Handler reducer', () => {
    it('should return the initial state', () => {
        expect(errorHandleReducer(undefined, {})).toEqual(
            {
                error:""
            }
        )
    });
    it('should handle FETCH_DATA_FAILURE', () => {
        const state = {};
        const action = {
            type: types.FETCH_DATA_FAILURE,
            error: ""
        };
        expect(
            errorHandleReducer(state, action)
        ).toEqual(
            Object.assign({}, ...state, { error: action.error })
            )
    })

     it('should handle SAVE_DATA_FAILURE', () => {
        const state = {};
        const action = {
            type: types.SAVE_DATA_FAILURE,
            error: ""
        };
        expect(
            errorHandleReducer(state, action)
        ).toEqual(
            Object.assign({}, ...state, { error: action.error })
            )
    })

})