import React from "react";
import OneImage from "../CommonComponents/oneImage.js";
import PropTypes from "prop-types";

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loader == true) {
            return null;
        }
        return (
            <div>
                <form onSubmit={this.props.search}>
                    <input type="text" name="focus" required className="search-box" placeholder="Search your nearest Hospital" onChange={this.props.newSearch} />
                    <button className="close-icon" type="reset" />
                    <button type="button" className="btn btn-primary searchBtn" onClick={this.props.search}>Search</button>
                </form>
                <br />

                {this.props.filter.map(item => <OneImage key={item.id} obj={item} />)}

                {(this.props.filter.length === 0 && this.props.error.length > 0) && <h2 className="heading">{this.props.error}</h2>}
                {(this.props.filter.length === 0 && this.props.error.length === 0) && <h2 className="heading">No Results found</h2>}
                <br />
            </div>
        );
    }

}

Search.propTypes={
    loader:PropTypes.bool,
    search:PropTypes.func,
    filter:PropTypes.array,
    error:PropTypes.string,
    newSearch:PropTypes.func

};

export default Search;