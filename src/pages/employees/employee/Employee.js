import React, { Component } from 'react'

import EmployeeDetails from '../employeeDetails/EmployeeDetails';
import EditEmployee from '../editEmployee/EditEmployee';
import DisableEmployee from '../disableEmployee/DisableEmployee';
import FadeBackground from '../../../components/fadeBackground/FadeBackground';

 
class Employee extends Component {

    constructor(props){
        super(props);
        this.state = {
            editEmployee: false,
            disableEmployee: false
        }
    }

    handleDisableEmployee = () => {
        this.props.onDisableEmployee(this.props.employee.employeeId);
    }

    handleCloseEditEmployee = () => {
        this.setState({editEmployee: false})
    }

    handleOpenEditEmployee = () => {
        this.setState({editEmployee: true})
    }

    handleOpenDisableEmployee = () => {
        this.setState({disableEmployee: true, editEmployee: false})
    }

    handleCloseDisableEmployee = () => {
        this.setState({disableEmployee: false, editEmployee: true})
    }
    handleDisableEmployee = () => {
        this.setState({disableEmployee: false, editEmployee: false, })
        this.props.onDisableEmployee(this.props.employee.employeeId);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-12">
                    {this.state.editEmployee ? 
                        <EditEmployee
                            roles={this.props.roles}
                            isGettingRoles={this.props.isGettingRoles}
                            closeEditEmployee={this.handleCloseEditEmployee}
                            openDisableEmployee={this.handleOpenDisableEmployee}
                            employee={this.props.employee}
                            isUpdatingEmployee={this.props.isUpdatingEmployee}
                            updateEmployeeInvalid={this.props.updateEmployeeInvalid}
                            updateEmployeeSuccessful={this.props.updateEmployeeSuccessful}
                            onUpdateEmployeeDetails={this.props.onUpdateEmployeeDetails}
                            onEnableEmployee={this.props.onEnableEmployee}
                            isUpdatingEmployeeIsDisabled={this.props.isUpdatingEmployeeIsDisabled}
                            invalidUpdateEmployeeMessage={this.props.invalidUpdateEmployeeMessage}
                        /> :
                        this.state.disableEmployee ? 
                            <DisableEmployee
                                closeDisableEmployee={this.handleCloseDisableEmployee}
                                disableEmployeeAction={this.handleDisableEmployee} 
                            /> :
                            <EmployeeDetails
                                isUpdatingEmployeeIsDisabled={this.props.isUpdatingEmployeeIsDisabled}
                                openEditEmployee={this.handleOpenEditEmployee}
                                employee={this.props.employee}
                            />
                    }
                </div>
                {this.state.disableEmployee || this.state.editEmployee ?
                    <FadeBackground color="rgb(101, 101, 101, 0.6)" /> :
                    null 
                }
            </div>
        )
    }
}

export default Employee;
