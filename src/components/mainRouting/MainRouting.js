import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import PrivateLayout from '../../containers/PrivateLayoutContainer';
import LogIn from '../../containers/LogInContainer'; 
import NotFound from '../../pages/notFound/NotFound';
import ServerError from '../../containers/ServerErrorContainer';

class MainRouting extends Component {
    render() {
      if (this.props.serverError) {
        return <ServerError />;
      }
      
      if(!this.props.isAuthenticated) {
        return <LogIn isAuthenticated={this.props.isAuthenticated} />;
      }
  
      return (
        <Router>
            <Switch>
              <Route path="/notfound/" component={NotFound} />
              <Route path="/" component={PrivateLayout} />              
            </Switch>
        </Router>
      );
    }
  }

  export default MainRouting;