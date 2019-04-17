import React, { Component } from 'react'

class DisableEmployee extends Component {

  render() {
    return (
        <div className="row disable-employee-row employee-row justify-content-center">
                <div className="col-sm-4">
                    <h5>Are you sure, you want to disable this account</h5>
                </div>
                <div className="col-sm-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <button className="btn btn-white-border" onClick={this.props.disableEmployeeAction}>Yes</button>
                        </div>
                        <div className="col-sm-6">
                            <button className="btn btn-white-border" onClick={this.props.closeDisableEmployee}>No</button>
                        </div>
                    </div>
                </div>
      </div>
    )
  }
}
export default DisableEmployee;