
import { SearchB } from './searchBusiness.js';
import * as stateActions from "../../Actions/actions.js";
import { connect } from 'react-redux';
import { filterHospitals } from "../../commonUtils/searchSelector.js";

const mapStateToProps = state => {
    let data = {
        hospitals:state.state.hospitals,
        filteredHospitals:filterHospitals(state),
        error: state.error.error,
        loader: state.loader.loader
    };
    return data;
};
const mapDispatchToProps = dispatch => ({
    getHospitals: () => dispatch(stateActions.fetchHospitals()),
    getFilteredHospitals: (toSearch)=>dispatch(stateActions.getFilteredHospitals(toSearch))

});
export default connect(mapStateToProps, mapDispatchToProps)(SearchB);