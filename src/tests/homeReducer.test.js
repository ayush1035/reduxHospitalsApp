import { homeReducer } from '../reducers/homeReducer.js'
import * as types from '../constants/ActionTypes.js'

describe('Home reducer', () => {
    it('should return the initial state', () => {
        expect(homeReducer(undefined, {})).toEqual(
            {
                hospitals: []
            }
        )
    });
    it('should handle FETCH_DATA_SUCCESS', () => {
        const state = {hospitals:[]};
        const action = {
            type: types.FETCH_DATA_SUCCESS,
            hospitals: [{"id":"1","name":"Max Health care hospital1","address":"Sushant lok,Gurugram,Haryana","url":"https://static.lybrate.com/imgs/ps/cl/e5b3c9170dcad79e416c062e4599639e/7ff195658a2c92ae7104ecf78f76f410/Max-Hospital-Gurgaon-Gurgaon-004d4a.jpg","email":"email@example.com"},{"id":2,"name":"GNH Hospital","address":"Sushant lok b-block,Gurugram,Haryana","url":"https://www.healthkonnect.com/cdn/organisation/pmv/tol/cjw/8fx/noz/pmvtolcjw8fxnozdcg8xslee_3j1hrpgb.png?version=1","email":"email@example.com"}]
        };
        expect(
            homeReducer(state, action)
        ).toEqual(
            Object.assign({}, ...state, { hospitals: action.hospitals })
            )
    })

     it('should handle SAVE_DATA_SUCCESS', () => {
        const state = {hospitals:[{"id":"1","name":"Max Health care hospital1","address":"Sushant lok,Gurugram,Haryana","url":"https://static.lybrate.com/imgs/ps/cl/e5b3c9170dcad79e416c062e4599639e/7ff195658a2c92ae7104ecf78f76f410/Max-Hospital-Gurgaon-Gurgaon-004d4a.jpg","email":"email@example.com"},{"id":2,"name":"GNH Hospital","address":"Sushant lok b-block,Gurugram,Haryana","url":"https://www.healthkonnect.com/cdn/organisation/pmv/tol/cjw/8fx/noz/pmvtolcjw8fxnozdcg8xslee_3j1hrpgb.png?version=1","email":"email@example.com"}]};
        const action = {
            type: types.SAVE_DATA_SUCCESS,
            hospitals: [{"id":"1","name":"Max Health care hospital12","address":"Sushant lok,Gurugram,Haryana","url":"https://static.lybrate.com/imgs/ps/cl/e5b3c9170dcad79e416c062e4599639e/7ff195658a2c92ae7104ecf78f76f410/Max-Hospital-Gurgaon-Gurgaon-004d4a.jpg","email":"email@example.com"},{"id":2,"name":"GNH Hospital","address":"Sushant lok b-block,Gurugram,Haryana","url":"https://www.healthkonnect.com/cdn/organisation/pmv/tol/cjw/8fx/noz/pmvtolcjw8fxnozdcg8xslee_3j1hrpgb.png?version=1","email":"email@example.com"}]
        };
        expect(
            homeReducer(state, action)
        ).toEqual(
            Object.assign({}, ...state, { hospitals: action.hospitals })
            )
    })

})