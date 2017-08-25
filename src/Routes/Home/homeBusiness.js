import React from 'react';
import Home from './homePresentational.js';
import PropTypes from "prop-types";


export class HomeB extends React.Component {
    constructor(props)
    {
        super(props);
    }
    componentDidMount() {
        this.props.getHospitals();
      }
    render() {
        return (
            <Home hospitals={this.props.hospitals} error={this.props.error} loader={this.props.loader} />
        );
    }
}
HomeB.propTypes={
    getHospitals:PropTypes.func,
    hospitals:PropTypes.array,
    error:PropTypes.string,
    loader:PropTypes.bool
};