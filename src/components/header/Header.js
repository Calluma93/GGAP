import React, { Component } from 'react';
import ggapLogo from '../../images/logos/ggapLogo.png';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Header extends Component {
  render() {
    return (
        <div className="row header-row"> 
          <div className="col-sm-12 d-md-none d-block text-center">
            <h4 className="d-inline">
              <span >GGAP</span> <img src={ggapLogo} alt="GGAP Logo" /> 
            </h4>
            <button className="nav-trigger d-inline float-right" onClick={this.props.toggleNavbar}>
              {this.props.isNavOpen ?
                <FontAwesomeIcon size="3x" pull="left" icon="times" />
                : <FontAwesomeIcon size="3x" pull="left" icon="bars" />
              }
            </button>
          </div>
          <div className="col-sm-12 d-none d-md-block">
            <h4 className="portal-heading">
              <span>
                Guitar Guitar Administration Portal
              </span> 
              <img src={ggapLogo} alt="GGAP Logo" /> 
            </h4>
          </div>
        </div>
    );
  }
}

export default Header;
