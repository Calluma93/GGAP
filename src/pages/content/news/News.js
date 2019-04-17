import React, { Component } from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
import NewsList from './newsList/NewsList';
import AddNews from './addNews/AddNews';
import EditNews from './editNews/EditNews';

import { convertQueryStringToObject } from '../../../helpers/urlEncodingHelper'

class News extends Component {

    render(){
        const basePath = this.props.match.path;
        return(
            <Switch>
                <Route exact path={basePath + "edit/:id/"} render={(match) => 
                    <EditNews
                        newsArticle={this.props.newsArticle}
                        match={match}
                        isUpdatingNewsArticle={this.props.isUpdatingNewsArticle}
                        updateNewsArticleInvalid={this.props.updateNewsArticleInvalid}
                        updateNewsArticleInvalidMessage={this.props.updateNewsArticleInvalidMessage}
                        updateNewsArticleSuccess={this.props.updateNewsArticleSuccess}
                        userGetArticle={this.props.userGetArticle}
                        userUpdateArticle={this.props.userUpdateArticle}
                        userUpdatePublishDate={this.props.userUpdatePublishDate}
                        userUpdateTitle={this.props.userUpdateTitle}
                        userUpdateMetaDescription={this.props.userUpdateMetaDescription}
                        userUpdateContent={this.props.userUpdateContent}
                        userUpdateArticleIsDisabled={this.props.userUpdateArticleIsDisabled}
                        addNewsArticleSuccess={this.props.addNewsArticleSuccess}
                        userUpdateArticleImage={this.props.userUpdateArticleImage}
                        isUpdatingNewsArticleImage={this.props.isUpdatingNewsArticleImage}
                        updateNewsArticleImageInvalid={this.props.updateNewsArticleImageInvalid}
                        updateNewsArticleImageInvalidMessage={this.props.updateNewsArticleImageInvalidMessage}
                        updatingArticleIsDisabledInvalid={this.props.updatingArticleIsDisabledInvalid}
                        updatingArticleIsDisabledInvalidMessage={this.props.updatingArticleIsDisabledInvalidMessage}
                        userUpdateArticleBodyImage={this.props.userUpdateArticleBodyImage}
                        isUpdatingArticleIsDisabled={this.props.isUpdatingArticleIsDisabled}
                        userGetContentParents={this.props.userGetContentParents}
                        searchQuery={this.props.searchQuery}
                        contentParentSearchResults={this.props.contentParentSearchResults}
                        isGettingNewsArticle={this.props.isGettingNewsArticle}
                        associateContentParent={this.props.associateContentParent}
                        removeContentParent={this.props.removeContentParent}
                        categories={this.props.categories}
                        userGetCategories={this.props.userGetCategories}
                        isGettingCategories={this.props.isGettingCategories}
                        isGettingContentParents={this.props.isGettingContentParents}
                        contentParentTypes={this.props.contentParentTypes}
                        userGetContentParentTypes={this.props.userGetContentParentTypes}
                        isGettingContentParentTypes={this.props.isGettingContentParentTypes}
                    />} 
                /> 
                <Route exact path={basePath + "create/"} render={() => 
                    <AddNews 
                        newsArticle={this.props.newsArticle}
                        isAddingNewsArticle={this.props.isAddingNewsArticle}
                        addNewsArticleInvalid={this.props.addNewsArticleInvalid}
                        addNewsArticleInvalidMessage={this.props.addNewsArticleInvalidMessage}
                        addNewsArticleSuccess={this.props.addNewsArticleSuccess}
                        userAddArticle={this.props.userAddArticle}
                        addedArticleId={this.props.addedArticleId}
                        userUpdateArticleBodyImage={this.props.userUpdateArticleBodyImage}
                        addRedirectRequired={this.props.addRedirectRequired}
                        userGetContentParents={this.props.userGetContentParents}
                        searchQuery={this.props.searchQuery}
                        contentParentSearchResults={this.props.contentParentSearchResults}
                        isGettingNewsArticle={this.props.isGettingNewsArticle}
                        associateContentParent={this.props.associateContentParent}
                        removeContentParent={this.props.removeContentParent}
                        userUpdateTitle={this.props.userUpdateTitle}
                        userUpdateContent={this.props.userUpdateContent}
                        userUpdatePublishDate={this.props.userUpdatePublishDate}
                        userUpdateMetaDescription={this.props.userUpdateMetaDescription}
                        userOpensCreateArticlePage={this.props.userOpensCreateArticlePage}
                        userGetCategories={this.props.userGetCategories}
                        isGettingCategories={this.props.isGettingCategories}
                        categories={this.props.categories}
                        isGettingContentParents={this.props.isGettingContentParents}
                        contentParentTypes={this.props.contentParentTypes}
                        userGetContentParentTypes={this.props.userGetContentParentTypes}
                        isGettingContentParentTypes={this.props.isGettingContentParentTypes}
                    />} 
                />
                <Route exact path={basePath} render={(routeProps) => 
                    <NewsList
                        savedUserSettings = {this.props.savedUserSettings}
                        initialUserSettings = {this.props.initialUserSettings}
                        userSettings = {convertQueryStringToObject(routeProps.location.search)}
                        articles = {this.props.articles}
                        prevPage = {this.props.page}
                        history = {routeProps.history}
                        prevSearchPhrase = {this.props.searchPhrase}
                        isGettingNewsArticles = {this.props.isGettingNewsArticles}
                        onUserLoadsNewsArticles = {this.props.userGetArticles}
                    />} 
                />
                <Redirect to="/notfound/" />
            </Switch>
        )
    }
}

export default News;