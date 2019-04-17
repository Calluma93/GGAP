import React, { Component } from 'react'
import { Route, Redirect, Switch } from "react-router-dom";
import EditHtmlPage from './editHtmlPage/EditHtmlPage';
import AddHtmlPage from './addHtmlPage/AddHtmlPage';
import HtmlPagesList from './htmlPagesList/HtmlPagesList';

class HtmlPages extends Component {

  render() {
    const basePath = this.props.match.path;
    return ( 
      <Switch>
        <Route exact path={basePath} render={() => 
            <HtmlPagesList
              isGettingHtmlPages={this.props.isGettingHtmlPages}
              onGetHtmlPages={this.props.onGetHtmlPages} 
              htmlPages={this.props.htmlPages}
              createHtmlPageSuccessful={this.props.createHtmlPageSuccessful}
              deleteHtmlPageSuccessful={this.props.deleteHtmlPageSuccessful}
            />} 
        />
        <Route exact path={basePath + "new/"} render={() => 
            <AddHtmlPage 
              isCreatingHtmlPage={this.props.isCreatingHtmlPage}
              createHtmlPageInvalid={this.props.createHtmlPageInvalid}
              invalidCreateHtmlPageMessage={this.props.invalidCreateHtmlPageMessage}
              onCreateHtmlPage={this.props.onCreateHtmlPage}
              onGetHtmlPageTypes={this.props.onGetHtmlPageTypes}
              pageTypes={this.props.pageTypes}
              isGettingHtmlPageTypes={this.props.isGettingHtmlPageTypes}
              createHtmlPageSuccessful={this.props.createHtmlPageSuccessful}
              addRedirectRequired={this.props.addRedirectRequired}
            />
        } />
        <Route exact path={basePath + ":id/"} render={(match) => 
            <EditHtmlPage 
               htmlPage={this.props.currentHtmlPage} match={match}
               onUserLoadsHtmlPage={this.props.onUserLoadsHtmlPage}
               onUserUpdateHtmlPageName={this.props.onUserUpdateHtmlPageName}
               onUserUpdateHtmlPageTitle={this.props.onUserUpdateHtmlPageTitle}
               onUserUpdateHtmlPageMetaDescription={this.props.onUserUpdateHtmlPageMetaDescription}
               onUserUpdateHtmlPageMetaKeywords={this.props.onUserUpdateHtmlPageMetaKeywords}
               onUserUpdateHtmlPageContent={this.props.onUserUpdateHtmlPageContent}
               onUpdateHtmlPage={this.props.onUpdateHtmlPage}
               isUpdatingHtmlPage={this.props.isUpdatingHtmlPage}
               isDeletingHtmlPage={this.props.isDeletingHtmlPage}
               updateHtmlPageInvalid={this.props.updateHtmlPageInvalid}
               invalidUpdateHtmlPageMessage={this.props.invalidUpdateHtmlPageMessage}
               updateHtmlPageSuccessful={this.props.updateHtmlPageSuccessful}
               onUpdateHtmlPagePublish={this.props.onUpdateHtmlPagePublish}
               isUpdatingHtmlPagePublish={this.props.isUpdatingHtmlPagePublish}
               onUserDeletesHtmlPage={this.props.onUserDeletesHtmlPage}
               deleteRedirectRequired={this.props.deleteRedirectRequired}
               isGettingHtmlPage={this.props.isGettingHtmlPage}
               />} /> 
        <Redirect to="/notfound/" />
      </Switch>
    )
  }
}

export default HtmlPages;