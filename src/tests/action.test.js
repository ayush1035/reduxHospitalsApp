import * as actions from '../Actions/actions.js'
import * as types from '../constants/actionTypes.js'

describe('actions', () => {
    let searchData="max";
    let loader = true;
    let err = { message: "error is there" };
    let conc = { "id": "1", "name": "Max Health care hospital1", "address": "Sushant lok,Gurugram,Haryana", "url": "https://static.lybrate.com/imgs/ps/cl/e5b3c9170dcad79e416c062e4599639e/7ff195658a2c92ae7104ecf78f76f410/Max-Hospital-Gurgaon-Gurgaon-004d4a.jpg", "email": "email@example.com" };
    let hospitals = [{ "id": "1", "name": "Max Health care hospital1", "address": "Sushant lok,Gurugram,Haryana", "url": "https://static.lybrate.com/imgs/ps/cl/e5b3c9170dcad79e416c062e4599639e/7ff195658a2c92ae7104ecf78f76f410/Max-Hospital-Gurgaon-Gurgaon-004d4a.jpg", "email": "email@example.com" }, { "id": 2, "name": "GNH Hospital", "address": "Sushant lok b-block,Gurugram,Haryana", "url": "https://www.healthkonnect.com/cdn/organisation/pmv/tol/cjw/8fx/noz/pmvtolcjw8fxnozdcg8xslee_3j1hrpgb.png?version=1", "email": "email@example.com" }]
    it('should fetch data for hospitals', () => {
        const expectedAction = {
            type: types.FETCH_DATA,
        }
        expect(actions.fetchHospitals()).toEqual(expectedAction)
    });

    it('should save data for hospitals', () => {
            const expectedAction = {
            type: types.SAVE_DATA,
            concerned: conc
        }
        expect(actions.saveHospitals(conc)).toEqual(expectedAction)
    });
    it('Success fetch data for hospitals', () => {
        const expectedAction = {
            type: types.FETCH_DATA_SUCCESS,
            hospitals: hospitals
        }
        expect(actions.fetchHospitalsSuccess(hospitals)).toEqual(expectedAction)
    });
    it('Success save data for hospitals', () => {
        const expectedAction = {
            type: types.SAVE_DATA_SUCCESS,
            hospitals: hospitals
        }
        expect(actions.saveHospitalsSuccess(hospitals)).toEqual(expectedAction)
    });

    it('Failure fetch data for hospitals', () => {
        const expectedAction = {
            type: types.FETCH_DATA_FAILURE,
            error: err.message + " DATA NOT FETCHED ERROR OCCURED"
        }
        expect(actions.fetchHospitalsFailure(err)).toEqual(expectedAction)
    });
    it('Failure save data for hospitals', () => {
        const expectedAction = {
            type: types.SAVE_DATA_FAILURE,
            error: err.message + " DATA NOT SAVED ERROR OCCURED"
        }
        expect(actions.saveHospitalsFailure(err)).toEqual(expectedAction)
    });

    it('should toggle the loader ', () => {
        const expectedAction = {
            type: types.TOGGLE_LOADER,
            loader: false
        }
        expect(actions.toggleLoader(false)).toEqual(expectedAction)
    });
     it('should set the search data', () => {
        const expectedAction = {
            type: types.SET_SEARCH_DATA,
            searchData:searchData
        }
        expect(actions.getFilteredHospitals(searchData)).toEqual(expectedAction)
    });




})