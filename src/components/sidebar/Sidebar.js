import React, { Component } from 'react'; 
import UserCard from '../userCard/UserCard';
import EmployeeDetails from '../../containers/EmployeeDetailsContainer';
import SideNav from '../../containers/SideNavContainer';

class Sidebar extends Component {
  constructor(props){
    super(props); 

    this.state = {
      showUserSettings: false
    }
  }

  onSettingsToggleClick = () => {
    this.setState(previousState => ({
      showUserSettings: !previousState.showUserSettings
    }))
  }

  render() {
    let sidebarClasses = !this.props.isNavOpen ? 'col-xs-6 col-sm-4 col-md-3 col-xl-2 sidebar closed': 'col-xs-6 col-sm-4 col-md-3 col-xl-2 sidebar';
    return (
      <div className={sidebarClasses}>
        <UserCard
          onLogOut={this.props.onLogOut}
          onSettingsToggleClick={this.onSettingsToggleClick}
          showSettingsLink={!this.state.showUserSettings}
          firstName={this.props.firstName}
          lastName={this.props.lastName}
        />
        {this.state.showUserSettings ?
          <EmployeeDetails onSettingsToggleClick={this.onSettingsToggleClick} /> :
          <SideNav baseUrl={this.props.baseUrl} location={this.props.location} />
        }
      </div>
    );
  }
}

export default Sidebar;
