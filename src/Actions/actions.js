import * as types from '../constants/actionTypes.js';



export function fetchHospitals()
{
    return {
        type:types.FETCH_DATA
    };
}
export function saveHospitals(conc)
{
    return {
        type:types.SAVE_DATA,
        concerned:conc
    };
}

export function fetchHospitalsSuccess(hospitals)
{
    return {
        type:types.FETCH_DATA_SUCCESS,
        hospitals:hospitals
    };
}
export function fetchHospitalsFailure(err)
{
    return {
        type:types.FETCH_DATA_FAILURE,
        error:err.message+ " DATA NOT FETCHED ERROR OCCURED"
    };
}
export function saveHospitalsFailure(err)
{
    return {
        type:types.SAVE_DATA_FAILURE,
          error: err.message+" DATA NOT SAVED ERROR OCCURED"
    };
}
export function saveHospitalsSuccess(hospitals)
{
    return {
        type:types.SAVE_DATA_SUCCESS,
        hospitals:hospitals
    };
}

export function toggleLoader(loader)
{
    return {
        type:types.TOGGLE_LOADER,
        loader:loader
    };
}

export function getFilteredHospitals(searchData)
{
    return{
        type:types.SET_SEARCH_DATA,
        searchData:searchData
    };
}



