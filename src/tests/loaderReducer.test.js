import { loaderReducer } from '../reducers/loaderReducer.js'
import * as types from '../constants/ActionTypes.js'

describe('error Handler reducer', () => {
    it('should return the initial state', () => {
        expect(loaderReducer(undefined, {})).toEqual(
            {
                loader:false
            }
        )
    });
    it('should handle TOGGLE_LOADER', () => {
        const state = {};
        const action = {
            type: types.TOGGLE_LOADER,
            loader:true
        };
        expect(
            loaderReducer(state, action)
        ).toEqual(
            Object.assign({}, ...state, { loader: action.loader })
            )
    })

    
})