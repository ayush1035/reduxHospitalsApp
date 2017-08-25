import React from "react";
import EditModal from '../CommonComponents/editModal.js';
import PropTypes from "prop-types";

class Detail extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.loader) {
            return null;
        }
        return (
            <div className="container detail">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="well well-sm">
                            <div className="row">
                                <div className="col-sm-6 col-md-12 " >
                                    <img src={this.props.concerned.url} alt="" className="img-rounded img-responsive" />
                                </div>
                                <div className="col-sm-6 col-md-8">
                                    <h4>
                                        {this.props.concerned.name}</h4>
                                    <small><cite title="San Francisco, USA">   {this.props.concerned.address}<i /></cite></small>
                                    <p>
                                        <br />
                                        <i />   {this.props.concerned.email}
                                        <br />
                                    </p>

                                    <div className="btn-group">

                                        <button type="button" className="btn btn-primary " onClick={this.props.onEditClick}>
                                            <span /><span >Edit</span>
                                        </button>
                                        <EditModal item={this.props.dummy} showModal={this.props.showModal} onSaveClick={this.props.onSaveClick} onCloseModal={this.props.onCloseModal} onChangeInput={this.props.onChangeInput} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

Detail.propTypes={
    loader:PropTypes.bool,
    concerned:PropTypes.object,
    dummy:PropTypes.object,
    showModal:PropTypes.bool,
    onSaveClick:PropTypes.func,
    onCloseModal:PropTypes.func,
    onChangeInput:PropTypes.func,
    onEditClick:PropTypes.func
};
export default Detail;