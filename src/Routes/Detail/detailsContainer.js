import { DetailB } from './detailsBusiness.js';
import { connect } from 'react-redux';
import * as stateActions from "../../Actions/actions.js";


const mapStateToProps = state => {
    let data = {
        hospitals: state.state.hospitals,
        loader: state.loader.loader
    };
    return data;
};
const mapDispatchToProps = dispatch => ({
    getHospitals: () => dispatch(stateActions.fetchHospitals()),
    saveHospitals: (conc) => dispatch(stateActions.saveHospitals(conc)),
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailB);