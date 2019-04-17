import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class SideNavItem extends Component {

    handleClick = (e) => {
        e.preventDefault();
        this.props.onUserOpensSubSideNavPage(this.props.subSideNavPage);
    }

    render() {
        const activeClassName = this.props.active ? "active" : "";
        const hasSubPage = this.props.subSideNavPage != null;
        const subPageClassName = hasSubPage ? "submenu" : "";
        return (
            <li className={activeClassName}>
                <div className={subPageClassName}>
                    <NavLink className="sidenav-item" exact={this.props.exact} to={this.props.to}>
                        {
                            this.props.icon != null ?
                                <FontAwesomeIcon size="lg" pull="left" icon={this.props.icon} /> :
                                null
                        }
                        {this.props.text}
                    </NavLink>
                </div>
                <div className={subPageClassName}>
                    {
                        hasSubPage ?
                            <a className="go-forward" href="" onClick={this.handleClick}> <FontAwesomeIcon size="lg" pull="left" icon="chevron-right" /> </a> :
                            null
                    }
                </div>
            </li>
        );
    }
}

export default SideNavItem;