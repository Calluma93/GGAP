import React, { Component } from 'react';
import Modal from 'react-modal';
import { Route, Switch, Redirect } from "react-router-dom";
import throttle from 'lodash/throttle';
import Header from '../header/Header';
import Sidebar from '../../containers/SidebarContainer';
import PendingLogout from '../pendingLogout/PendingLogout';

import Dashboard from '../../pages/dashboard/Dashboard';
import Orders from '../../pages/orders/Orders';
import Products from '../../pages/products/Products';
import Customers from '../../pages/customers/Customers';
import Returns from '../../pages/returns/Returns';
import Manifest from '../../pages/manifest/Manifest';
import Finance from '../../pages/finance/Finance';
import Content from '../../pages/content/Content';
import Statistics from '../../pages/statistics/Statistics';
import Employees from '../../containers/EmployeesContainer'; 

class PrivateLayout extends Component {
    constructor(props){
        super(props); 

        this.state = {
            showUserSettings: false,
            isNavOpen: window.innerWidth > 767,
            isMobile:  window.innerWidth < 767
        };
    }
    
    handleWindowResize = throttle(() => {
        this.setState({
            isMobile: window.innerWidth < 767,
            isNavOpen: window.innerWidth > 767 
        });
    }, 200);

    toggleNavbar = (event) => {
        event.preventDefault();
        this.setState(previousState => ({
            isNavOpen: !previousState.isNavOpen
        }));
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
        this.unlisten = this.props.history.listen((location, action) => {
            this.setState({isNavOpen: false });
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
        this.unlisten();
    }

    handleLogInClick = (event) => {
        event.preventDefault();
        this.props.onLogIn(this.props.userName, this.props.password);
    }

    render() {
        const basePath = this.props.match.path;
        let layoutClasses = !this.state.isNavOpen ? 'col-sm-12 col-md-9 col-xl-10 app-container': 'col-sm-12 col-md-9 col-xl-10 app-container sidebar-open';

        const disabled = this.props.isLoggingIn;

        return (
            <div className="wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar isNavOpen={this.state.isNavOpen} onLogOut={this.props.onLogOut} baseUrl={this.props.match.url} location={this.props.location} />
                        <div className={layoutClasses}>
                
                            <Header isNavOpen={this.state.isNavOpen} toggleNavbar={this.toggleNavbar} />
                            <Switch>
                                <Route exact path={basePath} component={Dashboard} />
                                <Route exact path={basePath + "orders/"} component={Orders} />
                                <Route path={basePath + "products/"} component={Products} />
                                <Route exact path={basePath + "customers/"} component={Customers} />
                                <Route exact path={basePath + "returns/"} component={Returns} />
                                <Route exact path={basePath + "manifest/"} component={Manifest} />
                                <Route exact path={basePath + "finance/"} component={Finance} />
                                {this.props.canAccessContentAdmin ?
                                <Route path={basePath + "content/"} component={Content} />
                                : null }
                                <Route exact path={basePath + "statistics/"} component={Statistics} />
                                {this.props.canAccessEmployeesAdmin ?
                                <Route exact path={basePath + "employees/"} component={Employees} /> 
                                : null }
                                <Redirect to="/notfound/" />
                            </Switch>
                        </div>
                    </div>
                </div>
                
                <Modal
                    isOpen={this.props.pendingLogoutActive}
                    style={{
                        overlay: {
                            zIndex: 70000
                        },
                        content: {
                            top: '50%',
                            left: '50%',
                            right: 'auto',
                            bottom: 'auto',
                            marginRight: '-50%',
                            transform: 'translate(-50%, -50%)'
                        }
                    }}
                    contentLabel="Pending logout modal"
                >
                    <PendingLogout
                        password={this.props.password}
                        onPasswordChange={this.props.onPasswordChange}
                        disabled={disabled}
                        logInInvalid={this.props.logInInvalid}
                        handleLogInClick={this.handleLogInClick}
                        isLoggingIn={this.props.isLoggingIn}
                        onLogOut={this.props.onLogOut}
                        pendingLogoutTimer={this.props.pendingLogoutTimer}
                    />
                </Modal>
            </div>
        );
    }
}

export default PrivateLayout;
