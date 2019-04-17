import React, { Component } from 'react';
import secondary from '../../images/logos/secondary.png';
import  {Alert} from 'reactstrap';

import Loader from '../../components/loader/Loader';

class Login extends Component {

  handleLogInClick = (event) => {
    event.preventDefault();
    this.props.onLogIn(this.props.userName, this.props.password);
  }

  render() {
    const disabled = this.props.isLoggingIn;

    return (
      <div className="container login-form"> 
        <form className="form-signin">

          <div className="text-center mb-4">
            <img src={secondary} className="App-logo" alt="logo" />
            <h6>Welcome to GGAP - Please log in...</h6>
          </div>

          <div className="form-label-group">
            <input
              value={this.props.userName} onChange={(event) => this.props.onUserNameChange(event.target.value)}
              type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus
              disabled={disabled}
            />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input
              value={this.props.password} onChange={(event) => this.props.onPasswordChange(event.target.value)}
              type="password" id="inputPassword" className="form-control" placeholder="Password" required
              disabled={disabled}
            />
            <label htmlFor="inputPassword">Password</label>
          </div>

          <Alert color="danger" isOpen={this.props.logInInvalid}>
            <span>Log in Credentials invalid</span>
          </Alert>

          <button type="submit" value="Log in" className="btn btn-lg btn-success btn-block" onClick={this.handleLogInClick}>
            Log in { this.props.isLoggingIn ? <Loader height="25px" width="25px" /> : null }
          </button>

        </form>
      </div>
    );
  }
}

export default Login;
