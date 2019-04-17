import React, { Component } from 'react';

import Avatar from './avatar/Avatar';

class UserCard extends Component {
    
    handleLogOutClick = (event) => {
        this.props.onLogOut();
    }
     
    render() {
        return (
            <div className="row user-card">
                <Avatar/>
                <div className="col-sm-12 col-md-9">
                    <div className="row">
                        <div className="col-sm-12">
                            <p>Welcome</p>
                            <strong>{this.props.firstName} {this.props.lastName}</strong>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6"> 
                            <span onClick={this.props.onSettingsToggleClick}>{this.props.showSettingsLink ? 'Settings' : 'Go Back'}</span>
                        </div>
                        <div className="col-6">
                            <span onClick={this.handleLogOutClick}>Log out</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserCard;
