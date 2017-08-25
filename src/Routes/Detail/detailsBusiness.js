import React from 'react';
import Detail from './detailsPresentational.js';
import PropTypes from "prop-types";


export class DetailB extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            concerned: {},
            dummy: {}
        };

        this.onCloseModal = this.onCloseModal.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
    }
    /**
     * this fetches the data as soon as the component gets mounted
     */
    componentDidMount()
     {
        if(this.props.hospitals.length==0)
        {
            this.props.getHospitals();
        } 
        else
        {
            let id=this.props.match.params.id;
            this.setState({
                concerned:this.props.hospitals[id-1]
            });
        }
    }
    componentWillReceiveProps(props)
    {
         
        let id=props.match.params.id;
        this.setState({
            concerned:props.hospitals[id-1]
        });
       

    }
    /**
     * this function handles the edit button and will open a modal on details page
     */
    onEditClick() {
        let temp = Object.assign({}, this.state.concerned);
        this.setState({
            dummy: temp
        });
        this.setState({
            showModal: true
        });

    }
    /** 
     * this function handles the close button on the modal and will close the modal on details page
    */
    onCloseModal() {
        this.setState({
            showModal: false
        });

        let temp = Object.assign({}, this.state.concerned);
        this.setState({
            dummy: temp
        });
    }
    /**
     * this will handle the save button on the modal and hence will close the modal
     */
    onSaveClick(event) {
        event.preventDefault();
        this.setState({
            showModal: false
        });
        let temp = Object.assign({}, this.state.dummy);
        this.setState({
            concerned: temp
        });
      
        this.props.saveHospitals(temp);
     


    }

    /**
     * this will update the state as soon as the input in the modal is changed
     */
    onChangeInput(ev) {
        let targetType = ev.target.name;
        let value = ev.target.value;
        let temp = this.state.dummy;
        temp[targetType] = value;

        this.setState({
            dummy: temp
        });
    }

    render() {
        return (
            <Detail {...this.state}  loader={this.props.loader} onChangeInput={this.onChangeInput} onSaveClick={this.onSaveClick} onCloseModal={this.onCloseModal} onEditClick={this.onEditClick} />
        );
    }
}
DetailB.propTypes={
    hospitals:PropTypes.array,
    getHospitals:PropTypes.func,
    match:PropTypes.object,
    saveHospitals:PropTypes.func,
    loader:PropTypes.bool,
    concerned:PropTypes.object
    
};
