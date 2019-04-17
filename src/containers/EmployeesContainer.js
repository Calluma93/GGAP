import { connect } from 'react-redux';
import  Employees from '../pages/employees/Employees';
import {
    userOpensCreateEmployeeForm,
    userClosesCreateEmployeeForm,
    userGetEmployees,
    userAddEmployee,
    userUpdateEmployee,
    userUpdateEmployeeIsDisabled,
    userGetRoles
} from '../actionCreators/employeesActionCreators'

function mapStateToProps(state) {
    return {
        employees: state.employees,
        roles: state.employeeRoles,
        isGettingEmployees: state.ui.employeesUi.isGettingEmployees,
        isGettingRoles: state.ui.employeesUi.isGettingEmployeeRoles,
        isCreatingEmployee: state.ui.employeesUi.isCreatingEmployee,
        createEmployeeInvalid: state.ui.employeesUi.createEmployeeInvalid,
        invalidCreateEmployeeMessage: state.ui.employeesUi.invalidCreateEmployeeMessage,
        createEmployeeSuccessful: state.ui.employeesUi.createEmployeeSuccessful,
        isUpdatingEmployee: state.ui.employeesUi.isUpdatingEmployee,
        updateEmployeeInvalid: state.ui.employeesUi.updateEmployeeInvalid,
        invalidUpdateEmployeeMessage: state.ui.employeesUi.invalidUpdateEmployeeMessage,
        updateEmployeeSuccessful: state.ui.employeesUi.updateEmployeeSuccessful,
        isUpdatingEmployeeIsDisabled: state.ui.employeesUi.isUpdatingEmployeeIsDisabled,
        isCreateEmployeeFormOpen: state.ui.employeesUi.isCreateEmployeeFormOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onUserLoadsEmployees(){
            dispatch(userGetEmployees());
        },
        onUserLoadEmployeeRoles(){
            dispatch(userGetRoles());
        },
        onUpdateEmployeeDetails(employeeId, userName, firstName, lastName, roles){
            dispatch(userUpdateEmployee(employeeId, userName, firstName, lastName, roles));
        },
        onCreateEmployee(userName, password, confirmPassword, firstName, lastName, roles, isDisabled){
            dispatch(userAddEmployee(userName, password, confirmPassword, firstName, lastName, roles, isDisabled));
        },
        onDisableEmployee(employeeId){
            dispatch(userUpdateEmployeeIsDisabled(employeeId, true));
        },
        onEnableEmployee(employeeId){
            dispatch(userUpdateEmployeeIsDisabled(employeeId, false));
        },
        onUserOpensCreateEmployeeForm() {
            dispatch(userOpensCreateEmployeeForm());
        },
        onUserClosesCreateEmployeeForm() {
            dispatch(userClosesCreateEmployeeForm());
        }
    }
} 


export default connect(mapStateToProps, mapDispatchToProps)(Employees);