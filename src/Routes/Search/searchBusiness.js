import React from 'react';
import Search from './searchPresentational.js';
import PropTypes from "prop-types";


export class SearchB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: [],
            searchData:""
        };
        this.search = this.search.bind(this);
        this.newSearch = this.newSearch.bind(this);
    }
    /**
     * this fetches the data as soon as the component gets mounted
     */
    componentDidMount() {
        
        if (this.props.hospitals.length == 0) {
            this.props.getHospitals();
        }
        else {
            this.setState({  filter: this.props.hospitals });
        }

    }
    componentWillReceiveProps(props) {
        this.setState({ filter: props.filteredHospitals });
    }
    /**
     * 
     * @param {* this event gets fired when we hit the search input and on every change in the search input the state gets updated } event 
     */
    newSearch(event) {
        this.setState({
            searchData: event.target.value
        });
    }
    /**
     * this event handler filters the data and shows the result
     * @param {*  this event gets fired when we hit the search button } event
     * 
     */
    search(event) {
        event.preventDefault();
        let toSearch = this.state.searchData;
        if (toSearch) {
            this.props.getFilteredHospitals(toSearch);
            this.setState({ filter: this.props.filteredHospitals });
        }
    }

    render() {
        return (
            <Search {...this.state} search={this.search} newSearch={this.newSearch} error={this.props.error} loader={this.props.loader}/>
        );
    }
}

SearchB.propTypes={
    loader:PropTypes.bool,
    hospitals:PropTypes.array,
    filteredHospitals:PropTypes.array,  
    error:PropTypes.string,
    getFilteredHospitals:PropTypes.func,
    getHospitals:PropTypes.func


};