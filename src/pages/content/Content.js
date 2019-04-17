import React, { Component } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import HtmlPages from '../../containers/HtmlPagesContainer';
import News from '../../containers/NewsContainer';
import HomePage from '../../pages/content/contentHomePage/homePage/HomePage';

class Content extends Component {
    render() {
        const basePath = this.props.match.path;
        return (
            <div className="row">
                <div className="col-sm-12">
                    <Switch>
                        <Route exact path={basePath} component={HomePage} />
                        <Route path={basePath + "html-pages/"} component={HtmlPages} />
                        <Route path={basePath + "news/"} component={News} />
                        <Redirect to="/notfound/" />
                    </Switch>
                </div>
            </div>
        );
    }
}




export default Content;
