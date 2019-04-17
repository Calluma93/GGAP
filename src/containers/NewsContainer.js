import { connect } from 'react-redux';

import { 
    userUpdatePublishDate,
    userUpdateTitle, 
    userUpdateMetaDescription, 
    userUpdateContent, 
    userGetArticle, 
    userUpdateArticle,
    userAddArticle,
    userGetArticles,
    userUpdateArticleIsDisabled,
    userUpdateArticleImage,
    userUpdateArticleBodyImage,
    userOpensCreateArticlePage,
    userGetContentParents,
    associateContentParent,
    removeContentParent,
    userGetContentParentTypes
} from '../actionCreators/newsActionCreators';

import {
    userGetCategories
} from '../actionCreators/categoriesActionCreators';

import News from '../pages/content/news/News';

function mapStateToProps(state) {
    return {
        isGettingNewsArticles: state.ui.news.isGettingNewsArticles,
        articles: state.ui.news.newsArticleOverviews,
        
        isGettingNewsArticle: state.ui.news.isGettingNewsArticle,
        newsArticle: state.ui.news.newsArticle,

        isUpdatingNewsArticle: state.ui.news.isUpdatingNewsArticle,
        updateNewsArticleInvalid: state.ui.news.updateNewsArticleInvalid,
        updateNewsArticleInvalidMessage: state.ui.news.updateNewsArticleInvalidMessage,
        updateNewsArticleSuccess: state.ui.news.updateNewsArticleSuccess,

        isUpdatingArticleIsDisabled: state.ui.news.isUpdatingArticleIsDisabled,

        isUpdatingNewsArticleImage: state.ui.news.isUpdatingNewsArticleImage,
        updateNewsArticleImageInvalid: state.ui.news.updateNewsArticleImageInvalid,
        updateNewsArticleImageInvalidMessage: state.ui.news.updateNewsArticleImageInvalidMessage,

        isAddingNewsArticle: state.ui.news.isAddingNewsArticle,
        addNewsArticleInvalid: state.ui.news.addNewsArticleInvalid,
        addNewsArticleInvalidMessage: state.ui.news.addNewsArticleInvalidMessage,
        addNewsArticleSuccess: state.ui.news.addNewsArticleSuccess,
        addedArticleId: state.ui.news.addedArticleId,
        addRedirectRequired: state.ui.news.addRedirectRequired,
        updatingArticleIsDisabledInvalid: state.ui.news.updatingArticleIsDisabledInvalid,
        updatingArticleIsDisabledInvalidMessage: state.ui.news.updatingArticleIsDisabledInvalidMessage,

        savedUserSettings: state.ui.news.savedUserSettings,
        initialUserSettings: state.ui.news.initialUserSettings,

        isGettingContentParents: state.ui.news.isGettingContentParents,
        searchQuery: state.ui.news.searchQuery,
        contentParentSearchResults: state.ui.news.contentParentSearchResults,
        categories: state.categories,
        isGettingCategories: state.categories.isGettingCategories,
        contentParentTypes: state.contentParentTypes,
        isGettingContentParentTypes: state.contentParentTypes.isGettingContentParentTypes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userGetArticles(userSettings) {
            dispatch(userGetArticles(userSettings));
        },
        userGetArticle(articleId) {
            dispatch(userGetArticle(articleId))
        },
        userUpdateArticle(articleId, publishDate, title, metaDescription, content, contentParents) {
            dispatch(userUpdateArticle(articleId, publishDate, title, metaDescription, content, contentParents))
        },
        userUpdatePublishDate(publishDate) {
            dispatch(userUpdatePublishDate(publishDate))
        },
        userUpdateTitle(title) {
            dispatch(userUpdateTitle(title))
        },
        userUpdateMetaDescription(metaDescription) {
            dispatch(userUpdateMetaDescription(metaDescription))
        },
        userUpdateContent(content) {
            dispatch(userUpdateContent(content))
        },
        userUpdateArticleIsDisabled(articleId, isDisabled) {
            dispatch(userUpdateArticleIsDisabled(articleId, isDisabled));
        },
        userAddArticle(publishDate, title, metaDescription, content, contentParents) {
            dispatch(userAddArticle(publishDate, title, metaDescription, content, contentParents));
        },
        userUpdateArticleImage(articleId, imageName, imageContent) {
            dispatch(userUpdateArticleImage(articleId, imageName, imageContent));
        },
        userUpdateArticleBodyImage(imageName, imageContent, failure, success){
            dispatch(userUpdateArticleBodyImage(imageName, imageContent, failure, success));
        },
        userGetContentParents(searchQuery) {
            dispatch(userGetContentParents(searchQuery));
        },
        associateContentParent(contentParent) {
            dispatch(associateContentParent(contentParent));
        },
        removeContentParent(index) {
            dispatch(removeContentParent(index));
        },
        userOpensCreateArticlePage() {
            dispatch(userOpensCreateArticlePage());
        },
        userGetCategories() {
            dispatch(userGetCategories());
        },
        userGetContentParentTypes() {
            dispatch(userGetContentParentTypes());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(News);