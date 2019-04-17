import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import  {Alert} from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import Loader from '../../../components/loader/Loader';
import FadeBackground from '../../../components/fadeBackground/FadeBackground';

class userAddEmployee extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstName: null,
            lastName: null,
            username: null,
            password: null,
            confirmPassword: null,
            isDisabled: false,
            roles: []
        }
   
    }

    handleFirstNameChange = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleRepeatPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    handleIsDisabledChange = (event) => {
        const isDisabled = event.target.type === 'checkbox' ? event.target.checked : true;

        this.setState({
            isDisabled: isDisabled
        })
    }

    handleRolesChange = (value) => {
        this.setState({
            roles: value.map(item => item.value)
        })
    }

    handleCreateEmployee = (event) => {
        event.preventDefault();
        this.props.onUserCreatesEmployee(
            this.state.username, this.state.password, this.state.confirmPassword, this.state.firstName, this.state.lastName,
            this.state.roles, this.state.isDisabled
        );
    }

  render() {
    return (
        <div className="row">
        <div className="col-sm-12">
            <div className="row edit-employee employee-row create-employee active">
            <form onSubmit={this.handleCreateEmployee} className="col-sm-12 edit-row">
            <div className="row">
                <div className="col-sm-12 text-right">
                    <span onClick={this.props.onUserClosesCreateEmployeeForm}><FontAwesomeIcon  icon="times" /></span>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-2 col-lg-1">
                <FontAwesomeIcon size="4x" icon="user-circle" />
                </div>
                <div className="col-sm-5">
                    <div className="row">
                        <div className="col-sm-6">
                            <strong>Name</strong>
                            <input value={this.state.firstName} onChange={this.handleFirstNameChange}  placeholder="Name" type="text" />
                        </div> 
                        <div className="col-sm-6">
                            <strong>Surname</strong>
                            <input  value={this.state.lastName} onChange={this.handleLastNameChange} placeholder="Surname" type="text" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <strong>Username</strong>
                            <input value={this.state.username} onChange={this.handleUsernameChange} placeholder="name@guitarguitar.co.uk" type="text" />
                        </div>
                    </div>
                </div>
                
                <div className="col-sm-4">
                    <div className="row">
                        <div className="col-sm-6">
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
                    </div>
                    <div className="row">
                        <div className="col-sm-6">
                            <strong>Password</strong>
                            <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="Password" type="password" />
                        </div>
                        <div className="col-sm-6">
                            <strong>Repeat Password</strong>
                            <input value={this.state.confirmPassword} onChange={this.handleRepeatPasswordChange} placeholder="Password" type="password" />
                        </div>
                    </div>
                </div>
                <div className="col-sm-2">
                    <div className="row">
                        <div className="col-sm-12 disable-new-employee">
                            <input value={this.state.isDisabled} onChange={this.handleIsDisabledChange} type="checkbox" name="disabled-user-check" />
                            <label htmlFor="disabled-user-check">Disabled</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="btn btn-green">Save</button>
                        </div>
                    </div>
                </div>
                </div>
                </form>
                <div className="col-sm-12">
                    { this.props.isCreatingEmployee ?
                        <Loader width="30px" height="30px" top="-25px" right="115px"/> :
                        null
                    }
                    <Alert color="danger" isOpen={this.props.createEmployeeInvalid}>
                        <span>{this.props.invalidCreateEmployeeMessage}</span>
                    </Alert>
                </div>
            </div>
        </div>
        <FadeBackground color="rgb(101, 101, 101, 0.6)" /> 
    </div>
    )
  }
}
export default userAddEmployee;
