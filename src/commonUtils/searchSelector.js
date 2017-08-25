import { createSelector } from 'reselect';

const getSearchData=(state)=>state.search.searchData;
const getAllData=(state)=>state.state.hospitals;

export const filterHospitals=createSelector(
    [getSearchData,getAllData],
    (searchData,hospitals)=>hospitals.filter(item=>item.name.toLowerCase().includes(searchData.toLowerCase()))
);

















