import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
class OneImage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4 tile">
                <Link to={"/details/" + this.props.obj.id}>
                    <img src={this.props.obj.url} alt="Cinque Terre" width="450" height="266" className="thumbnail oneImage" data-atr={this.props.obj.id} />
                    <p className="p">{this.props.obj.name}</p>
                </Link>
            </div>
        );
    }

}
OneImage.propTypes={
   obj:PropTypes.object
};
export default OneImage;