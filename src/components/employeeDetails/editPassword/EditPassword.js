import React, { Component } from 'react'
import { Alert } from 'reactstrap';

import Loader from '../../loader/Loader';

class EditPassword extends Component {

    constructor(props){
        super(props);

        this.state = {
            currentPassword: "",
            newPassword: "",
            confirmNewPassword: ""
        }

        this.initialState = this.state;
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onUpdatePassword(this.state.currentPassword, this.state.newPassword, this.state.confirmNewPassword);
        this.setState(this.initialState);
    }
    
    handleCurrentPasswordChange = (event) => {
        this.setState({
            currentPassword: event.target.value
        })
    }

    handleNewPasswordChange = (event) => {
        this.setState({
            newPassword: event.target.value
        })
    }

    handleNewPasswordConfirmChange = (event) => {
        this.setState({
            confirmNewPassword: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <input type="password" value={this.state.currentPassword} onChange={this.handleCurrentPasswordChange} className="form-control" placeholder="Enter Current Password..." />
                </div>
                <div className="form-group">
                    <input type="password" value={this.state.newPassword} onChange={this.handleNewPasswordChange} className="form-control" placeholder="Enter New Password..." />
                </div> 
                <div className="form-group">
                    <input type="password" value={this.state.confirmNewPassword} onChange={this.handleNewPasswordConfirmChange} className="form-control" placeholder="Confirm New Password..." />
                </div> 
                <Alert color="danger" isOpen={this.props.passwordUpdateInvalid}>
                    <span>{this.props.invalidPasswordUpdateMessage}</span>
                </Alert>
                <Alert color="success" isOpen={this.props.passwordUpdateSuccessful}>
                    <span>Password Updated</span>
                </Alert>
                <button type="submit" className="btn btn-green">Save your new password
                    { this.props.isUpdatingPassword ? <Loader height="25px" width="25px" /> : null }  
                </button>
            </form>
        )
    }
}
export default  EditPassword;
