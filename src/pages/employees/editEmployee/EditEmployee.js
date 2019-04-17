import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import  {Alert} from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Loader from '../../../components/loader/Loader';

class EditEmployee extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: this.props.employee.firstName,
            lastName: this.props.employee.lastName,
            username: this.props.employee.userName,
            roles: this.props.employee.roles
        };
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        });
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        });
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    handleRolesChange = (value) => {
        let rolesState = value.map(item => item.value);
        this.setState({
            roles: rolesState
        });
    }

    handleEditEmployee = (event) => {
        event.preventDefault();
        this.props.onUpdateEmployeeDetails(
            this.props.employee.employeeId, this.state.username, this.state.firstName, this.state.lastName, this.state.roles
        );
    }

  render() {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="row edit-employee employee-row active">
                    <div className="col-sm-12 text-right">
                        <span onClick={this.props.closeEditEmployee}><FontAwesomeIcon  icon="times" /></span>
                    </div>
                <form onSubmit={this.handleEditEmployee} className="col-sm-12 edit-row">
                <div className="row">
                    <div className="col-sm-2 col-lg-1">
                    <FontAwesomeIcon size="4x" icon="user-circle" />
                    </div>
                    <div className="col-sm-2 col-lg-2">
                        <strong>Name</strong>
                        <input value={this.state.firstName} onChange={this.handleFirstNameChange} type="text" />
                    </div>
                    <div className="col-sm-2 col-lg-2">
                        <strong>Surname</strong>
                        <input value={this.state.lastName} onChange={this.handleLastNameChange} type="text" />
                    </div>
                    <div className="col-sm-3">
                        <strong>Username</strong>
                        <input value={this.state.username} onChange={this.handleUsernameChange} type="email" />
                    </div>
                    <div className="col-sm-2">
                        <strong>Roles</strong>
                        {this.props.isGettingRoles ?
                            <Loader width="30px" height="30px"/> :
                            <Select
                                name="form-field-name"
                                value={this.state.roles}
                                multi={true}
                                onChange={this.handleRolesChange}
                                options={this.props.roles.map(role => ({ value: role, label: role }))}
                            />
                        }
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-green">Save</button>
                    </div>
                    </div>
                    </form>
                        <div className="col-sm-12 disable-employee">
                            <div className="row justify-content-end">
                                <div className="col-sm-2">
                                    {
                                        this.props.isUpdatingEmployeeIsDisabled ?
                                            <Loader width="30px" height="30px"/> :
                                            this.props.employee.isDisabled ?
                                                <button type="submit" onClick={this.props.onEnableEmployee} className="btn btn-green btn_thin">Enable</button> :
                                                <button type="submit" onClick={this.props.openDisableEmployee} className="btn btn-red btn_thin">Disable</button>
                                    }
                                </div>
                            </div>
                        </div>
                    <div className="col-sm-12">
                        { this.props.isUpdatingEmployee?
                            <Loader width="30px" height="30px" top="-110px" right="115px"/>
                            : null
                        }
                        <Alert color="danger" isOpen={this.props.updateEmployeeInvalid}>
                            <span>{this.props.invalidUpdateEmployeeMessage}</span>
                        </Alert>
                        <Alert color="success" isOpen={this.props.updateEmployeeSuccessful}>
                            Employee Updated
                        </Alert>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default EditEmployee;