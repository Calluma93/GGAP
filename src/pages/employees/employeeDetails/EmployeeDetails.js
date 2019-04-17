import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { Badge } from 'reactstrap';

class EmployeeDetails extends Component {
        
  render() {
    return (
        <div className="row">
        <div className="col-sm-12">
            <div className=" employee-row">
                <div className="col-sm-2 col-lg-1">
                <FontAwesomeIcon size="4x" icon="user-circle" />
                </div>
                <div className="col-sm-3 col-lg-4">
                    <strong>Name</strong>
                    <h5>{this.props.employee.firstName} {this.props.employee.lastName} </h5>
                    {
                        this.props.employee.isDisabled ?
                            <Badge color="danger">Disabled</Badge> :
                            null
                    }
                </div>
                <div className="col-sm-5">
                    <strong>Username</strong>
                    <h5>{this.props.employee.userName}</h5>
                </div>
                <div className="col-sm-2">
                    <button onClick={this.props.openEditEmployee} className="btn btn-orange_border">Edit</button>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
export default EmployeeDetails;
