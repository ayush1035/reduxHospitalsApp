import { HomeB } from './homeBusiness.js';
import * as stateActions from "../../Actions/actions.js";
import { connect } from 'react-redux';


const mapStateToProps = state => {
    let data = {
        hospitals: state.state.hospitals,
        error: state.error.error,
        loader: state.loader.loader
    };
    return data;
};
const mapDispatchToProps = dispatch => ({
    getHospitals: () => dispatch(stateActions.fetchHospitals())
});
export default connect(mapStateToProps, mapDispatchToProps)(HomeB);