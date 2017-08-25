import React from "react";
import OneImage from "../CommonComponents/oneImage.js";
import PropTypes from "prop-types";
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        if (this.props.loader == false) {

            if (this.props.error.length > 0) {
                return (
                    <h1 className="heading">{this.props.error}</h1>
                );
            }
            return (
                <div>
                    <h1 className="heading">Hospitals in Gurugram</h1>
                    <br />
                    <div className="homeDiv">
                        {this.props.hospitals.map(item => <OneImage key={item.id} obj={item} />)}
                    </div>
                    <br />
                </div>


            );
        }
        else {
            return null;
        }
    }

}
Home.propTypes={
    hospitals:PropTypes.array,
    error:PropTypes.string,
    loader:PropTypes.bool
};

export default Home;