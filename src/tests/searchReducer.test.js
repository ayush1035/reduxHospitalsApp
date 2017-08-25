import { searchReducer } from '../reducers/searchReducer.js'
import * as types from '../constants/ActionTypes.js'

describe('searchReducer ', () => {
    it('should return the initial state', () => {
        expect(searchReducer(undefined, {})).toEqual(
            {
                searchData:""
            }
        )
    });
    it('should set the search data', () => {
        const state = {searchData:""};
        const action = {
            type: types.SET_SEARCH_DATA,
            searchData:"max"
        };
        expect(
            searchReducer(state, action)
        ).toEqual(
            Object.assign({}, ...state, { searchData: action.searchData })
            )
    })

    
})