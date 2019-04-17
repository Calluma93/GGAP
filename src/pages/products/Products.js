import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import { convertQueryStringToObject } from '../../helpers/urlEncodingHelper'
import PendingProductsList from '../../containers/PendingProductsListContainer';
import ProductsList from '../../containers/ProductsListContainer';
import HomePage from './homePage/HomePage';


class Products extends Component {
    render() {
        const basePath = this.props.match.path;
        return (
            <Switch>
                <Route exact path={basePath} component={HomePage} />
                <Route exact path={basePath + "pending-products-list/"} render={(routeProps) => 
                    <PendingProductsList
                        userSettings = {convertQueryStringToObject(routeProps.location.search)}
                        history={routeProps.history}
                    />} 
                />
                <Route exact path={basePath + "products-list/"} render={(routeProps) =>
                    <ProductsList
                        userSettings = {convertQueryStringToObject(routeProps.location.search)}
                        history={routeProps.history}
                    />
                }
                />
                <Redirect to="/notfound/" />
            </Switch>
        );
    }
}

export default Products;
