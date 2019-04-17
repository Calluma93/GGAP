import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import SideNavItem from './sideNavItem/SideNavItem';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class SideNavPage extends Component {

    handleBackClick = (e) => {
        e.preventDefault();
        this.props.onUserClicksGoBack();
    };

    render() {
        return (
            <ul>
                {
                    this.props.canGoBack ?
                        <li>
                            <a className="go-back" href="" onClick={this.handleBackClick}> <FontAwesomeIcon size="lg" pull="left" icon="chevron-left" /> </a>
                            <NavLink className="sidenav-parent" exact to={this.props.sideNavPage.parent.to}>
                                {this.props.sideNavPage.parent.text}
                            </NavLink>
                        </li> :
                        null
                }
                {
                    this.props.sideNavPage.sideNavItems.map((sideNavItem, key) => (
                        <SideNavItem
                            onUserOpensSubSideNavPage={this.props.onUserOpensSubSideNavPage}
                            subSideNavPage={sideNavItem.subSideNavPage}
                            active={sideNavItem.active}
                            to={sideNavItem.to}
                            exact={sideNavItem.exact}
                            icon={sideNavItem.icon}
                            text={sideNavItem.text}
                            key={key}
                        />
                    ))
                }
            </ul>
        );
    }
}

export default SideNavPage;