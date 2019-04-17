import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import EditDetails from './editDetails/EditDetails';
import EditPassword from './editPassword/EditPassword';

 class EmployeeDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            showPasswordForm: false
        }
    }

    handleEditDetailsClick = () => {
        this.setState({showPasswordForm:false})
    }

    handleChangePasswordClick = () => {
        this.setState({showPasswordForm:true})
    }

    handleEmployeeDetailsSubmit = () => {
        this.props.onUpdateEmployeeDetails(
            this.props.formUserName, this.props.formFirstName, this.props.formLastName
        )
    }
    
    render() {
        return (
            <div className="employee-details row">
                <div className="text-right col-sm-12 close-section">
                    <span onClick={this.props.onSettingsToggleClick}><FontAwesomeIcon size="lg"  pull="left" icon="times"/></span>
                </div>
                <div className="col-sm-12">
                    <h6>Your Details</h6>
                    { this.state.showPasswordForm ?
                        <button className="btn btn-white-border" onClick={this.handleEditDetailsClick}>
                            Edit Your Details
                        </button> :
                        <EditDetails
                            isGettingDetails={this.props.isGettingDetails}
                            onUserLoadsDetailsForm={this.props.onUserGetEmployeeDetails}
                            onEmployeeDetailsSubmit={this.handleEmployeeDetailsSubmit}
                            isUpdatingDetails={this.props.isUpdatingDetails}
                            detailsUpdateInvalid={this.props.detailsUpdateInvalid}
                            detailsUpdateSuccessful={this.props.detailsUpdateSuccessful}
                            onFirstNameChange={this.props.onFirstNameChange}
                            onLastNameChange={this.props.onLastNameChange}
                            onUserNameChange={this.props.onUserNameChange}
                            userName={this.props.formUserName}
                            firstName={this.props.formFirstName}
                            lastName={this.props.formLastName}
                            invalidDetailsUpdateMessage={this.props.invalidDetailsUpdateMessage}
                        />
                    }
                    <h6>Your Password</h6>
                    { !this.state.showPasswordForm ?
                        <button className="btn btn-white-border" onClick={this.handleChangePasswordClick} >
                            Change your password
                        </button> :
                        <EditPassword
                            onUpdatePassword={this.props.onUpdatePassword}
                            isUpdatingPassword={this.props.isUpdatingPassword}
                            passwordUpdateInvalid={this.props.passwordUpdateInvalid}
                            invalidPasswordUpdateMessage={this.props.invalidPasswordUpdateMessage}
                            passwordUpdateSuccessful={this.props.passwordUpdateSuccessful}
                        />
                    }            
                </div>
            </div>
        )
    }
}
export default EmployeeDetails;
