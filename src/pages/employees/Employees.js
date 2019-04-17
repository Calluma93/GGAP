import React, { Component } from 'react';
import  {Alert} from 'reactstrap';

import Employee from './employee/Employee';
import AddEmployee from './addEmployee/AddEmployee'; 
import Loader from '../../components/loader/Loader';

class Employees extends Component {

    componentDidMount(){
        this.props.onUserLoadsEmployees();
        this.props.onUserLoadEmployeeRoles();
    }

    handleUserOpensCreateEmployeeForm = () => {
        this.props.onUserOpensCreateEmployeeForm()
    }

    handleUserClosesCreateEmployeeForm = () => {
        this.props.onUserClosesCreateEmployeeForm()
    }

    render() {
        let list;
        if(this.props.isGettingEmployees){
            list = <Loader height="60px" width="60px" top="0" right="50%"  />
        }
        else {
           list = this.props.employees.map((employee, index) => (
                <Employee
                    key={employee.employeeId}
                    employee={employee}
                    roles={this.props.roles}
                    isGettingRoles={this.props.isGettingRoles}
                    onUpdateEmployeeDetails={this.props.onUpdateEmployeeDetails}
                    onDisableEmployee={this.props.onDisableEmployee}
                    onEnableEmployee={() => { this.props.onEnableEmployee(employee.employeeId) }}
                    isUpdatingEmployeeIsDisabled={this.props.isUpdatingEmployeeIsDisabled}
                    isUpdatingEmployee={this.props.isUpdatingEmployee}
                    updateEmployeeInvalid={this.props.updateEmployeeInvalid}
                    updateEmployeeSuccessful={this.props.updateEmployeeSuccessful}
                    invalidUpdateEmployeeMessage={this.props.invalidUpdateEmployeeMessage}
                />
            ))
        }

        return (
            <div className="employees-page">
                <div className="row filter-row">
                    <div className="col-sm-9"></div>
                    <div className="col-sm-3">
                        <button onClick={this.handleUserOpensCreateEmployeeForm}  className="btn btn-orange">ADD NEW</button>
                    </div>
                </div>
                {this.props.createEmployeeSuccessful ?
                    <Alert color="success" isOpen={this.props.createEmployeeSuccessful}>
                        New Employee Created
                    </Alert> :
                    null
                }
                {this.props.isCreateEmployeeFormOpen ?
                    <AddEmployee
                        roles={this.props.roles}
                        isGettingRoles={this.props.isGettingRoles}
                        onUserCreatesEmployee={this.props.onCreateEmployee} 
                        onUserClosesCreateEmployeeForm={this.handleUserClosesCreateEmployeeForm}
                        isCreatingEmployee={this.props.isCreatingEmployee} 
                        createEmployeeInvalid={this.props.createEmployeeInvalid}
                        invalidCreateEmployeeMessage={this.props.invalidCreateEmployeeMessage}                       
                    /> :
                    null
                }  
                {list}
            </div>
        );
    }
}

export default Employees;
