import { filterHospitals } from '../commonUtils/searchSelector.js'

const state = {
    search: {
        searchData: ""
    },
    state: {
        hospitals: [{ "id": "1", "name": "Maxp Health care hospital", "address": "Sushant lok,Gurugram,Haryana." },
        { "id": "2", "name": "Max2 Health care hospital", "address": "Sushant lok,Gurugram,Haryana." },
        { "id": "3", "name": "Maxp Health care hospital", "address": " lok,Gurugram,Haryana." }]
    }
}
describe("testing the selector", () => {
    it('should return all hospitals with empty searchData', () => {
        expect(filterHospitals(state).length).toBe(3);
    });
    it('should not re compute', () => {
        const prevCount = filterHospitals.recomputations();
        filterHospitals(state);
        expect(filterHospitals.recomputations()).toBe(prevCount);
    });
    it('should recompute on search data change', () => {
        const newState = Object.assign({}, state);
        newState.search = {
            searchData: "Maxp"
        };
        const prevCount = filterHospitals.recomputations();
        filterHospitals(newState);
        expect(filterHospitals.recomputations()).toBe(prevCount + 1);
    });


})