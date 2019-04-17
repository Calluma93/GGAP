import React, { Component } from 'react'

import { Alert } from 'reactstrap';
import Loader from '../../loader/Loader';

class EditDetails extends Component {

    componentDidMount(){
        this.props.onUserLoadsDetailsForm()
    }

    handleEmployeeDetailsSubmit = (event) => {
        event.preventDefault();
        this.props.onEmployeeDetailsSubmit();
    }

    handleFirstNameChange = (event) => {
        this.props.onFirstNameChange(event.target.value)
    }

    handleLastNameChange = (event) => {
        this.props.onLastNameChange(event.target.value)
    }

    handleUserNameChange = (event) => {
        this.props.onUserNameChange(event.target.value)
    }

    render() {
        const disabled = this.props.isUpdatingDetails;

        return (
            <div>
                { this.props.isGettingDetails ?
                    <Loader height="60px" width="60px" top="0%" right="40%"/> : 
                    <form onSubmit={this.handleEmployeeDetailsSubmit}>
                        <div className="form-group">
                            <input
                                type="text" onChange={this.handleFirstNameChange} value={this.props.firstName} className="form-control" placeholder="First Name" disabled={disabled}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text" onChange={this.handleLastNameChange} value={this.props.lastName} className="form-control" placeholder="Last Name" disabled={disabled}
                            />
                        </div> 
                        <div className="form-group">
                            <input
                                type="email" onChange={this.handleUserNameChange} value={this.props.userName}
                                className="form-control" placeholder="email@guitarguitar.co.uk" disabled={disabled}
                            />
                        </div> 
                        <Alert color="danger" isOpen={this.props.detailsUpdateInvalid}>
                            <span>{this.props.invalidDetailsUpdateMessage}</span>
                        </Alert>
                        <Alert color="success" isOpen={this.props.detailsUpdateSuccessful}>
                            <span>Your details updated</span>
                        </Alert>
                        <button type="submit" className="btn btn-green">
                            Save your details
                            { this.props.isUpdatingDetails ? <Loader height="25px" width="25px" /> : null }
                        </button>
                    </form>
                }
            </div>
        )
    }
}
export default EditDetails;
