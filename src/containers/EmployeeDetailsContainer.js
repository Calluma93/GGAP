import { connect } from 'react-redux';
import EmployeeDetails from '../components/employeeDetails/EmployeeDetails';
import {
    userFirstNameChange, 
    userLastNameChange, 
    userUserNameChange, 
    userGetEmployeeDetails,
    userUpdatePassword,
    userUpdateEmployeeDetails
} from '../actionCreators/employeeDetailsActionCreators';

function mapStateToProps(state) {
    return {
        isGettingDetails: state.ui.employeeDetails.isGettingDetails,
        isUpdatingPassword: state.ui.employeeDetails.isUpdatingPassword,
        passwordUpdateInvalid: state.ui.employeeDetails.passwordUpdateInvalid,
        invalidPasswordUpdateMessage: state.ui.employeeDetails.invalidPasswordUpdateMessage,
        passwordUpdateSuccessful: state.ui.employeeDetails.passwordUpdateSuccessful,
        isUpdatingDetails: state.ui.employeeDetails.isUpdatingDetails,
        detailsUpdateInvalid: state.ui.employeeDetails.detailsUpdateInvalid,
        invalidDetailsUpdateMessage: state.ui.employeeDetails.invalidDetailsUpdateMessage,
        detailsUpdateSuccessful: state.ui.employeeDetails.detailsUpdateSuccessful,
        formUserName: state.ui.employeeDetails.detailsForm.userName,
        formFirstName: state.ui.employeeDetails.detailsForm.firstName,
        formLastName: state.ui.employeeDetails.detailsForm.lastName
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onUserGetEmployeeDetails: () => {
            dispatch(userGetEmployeeDetails())
        },
        onUpdatePassword: (currentPassword, newPassword, confirmNewPassword) => {
            dispatch(userUpdatePassword(currentPassword, newPassword, confirmNewPassword))
        },
        onUpdateEmployeeDetails: (userName, firstName, lastName) => {
            dispatch(userUpdateEmployeeDetails(userName, firstName, lastName))
        },
        onFirstNameChange: (firstName) => {
            dispatch(userFirstNameChange(firstName))
        },
        onLastNameChange: (lastName) => {
            dispatch(userLastNameChange(lastName))
        },
        onUserNameChange: (userName) => {
            dispatch(userUserNameChange(userName))
        }
    }
} 

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeDetails);