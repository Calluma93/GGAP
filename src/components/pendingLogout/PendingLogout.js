import secondary from '../../images/logos/secondary.png';
import Loader from '../../components/loader/Loader';
import { Alert } from 'reactstrap';
import React, { Component } from 'react';

class PendingLogout extends Component {

    render() {
        return (
            <div>
                <div className="container"> 
                    <form className="form-signin pending-logout-form">

                        <div className="text-center mb-4">
                            <img src={secondary} className="App-logo" alt="logo" />
                            <h6 className="title">Your session has timed out - please re-enter your password within {this.props.pendingLogoutTimer} seconds to retain your unsaved work.</h6>
                        </div>

                        <div className="form-label-group">
                            <input
                                value={this.props.password} onChange={event => this.props.onPasswordChange(event.target.value)}
                                type="password" id="inputPassword" className="form-control" placeholder="Password" required autoFocus
                                disabled={this.props.disabled}
                            />
                            <label htmlFor="inputPassword">Password</label>
                        </div>

                        <Alert color="danger" isOpen={this.props.logInInvalid}>
                            <span>Log in Credentials invalid</span>
                        </Alert>

                        <button type="submit" value="Log in" className="btn btn-lg btn-success btn-block" onClick={this.props.handleLogInClick}>
                            Log in { this.props.isLoggingIn ? <Loader height="25px" width="25px" /> : null }
                        </button>

                    </form>
                </div>
            </div>
        );
    }
}

export default PendingLogout;