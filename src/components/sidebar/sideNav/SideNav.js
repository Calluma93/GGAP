import React, { Component } from 'react';
import SideNavPage from './sideNavPage/SideNavPage';
import { getActivePath } from '../../../helpers/sideNavHelper';

class SideNav extends Component {
    constructor(props) {
        super(props);

        const baseUrl = this.props.baseUrl;
        const { location } = this.props;

        let rootSideNavPage = {
            parent: null,
            sideNavItems: [
                {
                    text: "Dashboard",
                    to: baseUrl,
                    exact: true,
                    active: location.pathname === "/",
                    icon: "tachometer-alt",
                    subSideNavPage: null
                },
                {
                    text: "Orders",
                    to: baseUrl + "orders/",
                    exact: false,
                    active: location.pathname.startsWith("/orders/"),
                    icon: "clipboard",
                    subSideNavPage: null
                },
                ...props.canAccessProductsAdmin ? [{
                    text: "Products",
                    to: baseUrl + "products/",
                    exact: false,
                    active: location.pathname.startsWith("/products/"),
                    icon: "box-open",
                    subSideNavPage: {
                        parent: {
                            text: "Products",
                            to: baseUrl + "products/"
                        },
                        sideNavItems: [
                            {
                                text: "Products List",
                                to: baseUrl + "products/products-list/",
                                exact: false,
                                active: location.pathname.startsWith("/products/products-list/"),
                                icon: null,
                                subSideNavPage: null
                            },
                            {
                                text: "Pending Products List",
                                to: baseUrl + "products/pending-products-list/",
                                exact: false,
                                active: location.pathname.startsWith("/products/pending-products-list/"),
                                icon: null,
                                subSideNavPage: null
                            }
                        ]
                    }
                }] :
                [],
                {
                    text: "Customers",
                    to: baseUrl + "customers/",
                    exact: false,
                    active: location.pathname.startsWith("/customers/"),
                    icon: "user-circle",
                    subSideNavPage: null
                },
                {
                    text: "Returns",
                    to: baseUrl + "returns/",
                    exact: false,
                    active: location.pathname.startsWith("/returns/"),
                    icon: "exchange-alt",
                    subSideNavPage: null
                },
                {
                    text: "Manifest",
                    to: baseUrl + "manifest/",
                    exact: false,
                    active: location.pathname.startsWith("/manifest/"),
                    icon: "clipboard-list",
                    subSideNavPage: null
                },
                {
                    text: "Finance",
                    to: baseUrl + "finance/",
                    exact: false,
                    active: location.pathname.startsWith("/finance/"),
                    icon: "pound-sign",
                    subSideNavPage: null
                }
            ]
        };
        if(props.canAccessContentAdmin) {
            rootSideNavPage.sideNavItems.push({
                text: "Site Content",
                to: baseUrl + "content/",
                exact: false,
                active: location.pathname.startsWith("/content/"),
                icon: "address-card",
                subSideNavPage: {
                    parent: {
                        text: "Site Content",
                        to: baseUrl + "content/"
                    },
                    sideNavItems: [
                        {
                            text: "Html Pages",
                            to: baseUrl + "content/html-pages/",
                            exact: false,
                            active: location.pathname.startsWith("/content/html-pages/"),
                            icon: null,
                            subSideNavPage: null
                        },
                        {
                            text: "News",
                            to: baseUrl + "content/news/",
                            exact: false,
                            active: location.pathname.startsWith("/content/news/"),
                            icon: null,
                            subSideNavPage: null
                        }
                    ]
                }
            });
        }
        rootSideNavPage.sideNavItems.push({
            text: "Statistics",
            to: baseUrl + "statistics/",
            exact: false,
            active: location.pathname.startsWith("/statistics/"),
            icon: "chart-pie",
            subSideNavPage: null
        });
        if(props.canAccessEmployeesAdmin) {
            rootSideNavPage.sideNavItems.push({
                text: "Employees",
                to: baseUrl + "employees/",
                exact: false,
                active: location.pathname.startsWith("/employees/"),
                icon: "users-cog",
                subSideNavPage: null
            });
        }

        const activePath = getActivePath(rootSideNavPage),
            currentSideNavPage = activePath[activePath.length-1],
            history = activePath.slice(0, -1);
        
        this.state = {
            currentSideNavPage,
            history
        };
    }

    render() {
        const handleUserOpensSubSideNavPage = (subMenu) => {
            this.setState((prevState) => {
                return {
                    history: [prevState.currentSideNavPage, ...prevState.history],
                    currentSideNavPage: subMenu
                };
            });
        }

        const handleUserClicksGoBack = () => {
            this.setState((prevState) => {
                return {
                    currentSideNavPage: prevState.history[0],
                    history: prevState.history.slice(1)
                };
            });
        }

        return (
            <nav>
                <SideNavPage
                    canGoBack={this.state.history.length !== 0}
                    sideNavPage={this.state.currentSideNavPage}
                    onUserOpensSubSideNavPage={handleUserOpensSubSideNavPage}
                    onUserClicksGoBack={handleUserClicksGoBack}
                />
            </nav>
        );
    }
}

export default SideNav;