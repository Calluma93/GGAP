import{
    USER_GET_ARTICLES,
    SERVER_GET_ARTICLES_SUCCESS,
    SERVER_GET_ARTICLES_ERROR,
    USER_GET_ARTICLE,
    SERVER_GET_ARTICLE_SUCCESS,
    SERVER_GET_ARTICLE_ERROR,
    USER_UPDATE_ARTICLE,
    SERVER_UPDATE_ARTICLE_SUCCESS,
    SERVER_UPDATE_ARTICLE_INVALID,
    SERVER_UPDATE_ARTICLE_ERROR,
    UPDATE_ARTICLE_TIMER_ENDS,
    USER_UPDATE_PUBLISH_DATE,
    USER_UPDATE_TITLE,
    USER_UPDATE_META_DESCRIPTION,
    USER_UPDATE_CONTENT,
    USER_UPDATE_ARTICLE_IS_DISABLED,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_INVALID,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_SUCCESS,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_ERROR,
    UPDATE_ARTICLE_IS_DISABLED_TIMER_ENDS,
    USER_ADD_ARTICLE,
    SERVER_ADD_ARTICLE_INVALID,
    SERVER_ADD_ARTICLE_SUCCESS,
    SERVER_ADD_ARTICLE_ERROR,
    ADD_ARTICLE_TIMER_ENDS,
    USER_UPDATE_ARTICLE_IMAGE,
    SERVER_UPDATE_ARTICLE_IMAGE_INVALID,
    SERVER_UPDATE_ARTICLE_IMAGE_SUCCESS,
    SERVER_UPDATE_ARTICLE_IMAGE_ERROR,
    UPDATE_ARTICLE_IMAGE_TIMER_ENDS,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS,
    USER_GET_CONTENT_PARENTS,
    SERVER_GET_CONTENT_PARENTS_SUCCESS,
    SERVER_GET_CONTENT_PARENTS_ERROR,
    USER_ADD_CONTENT_PARENT_TO_ARTICLE,
    USER_DELETE_CONTENT_PARENT_FROM_ARTICLE,
    USER_OPENS_CREATE_ARTICLE_PAGE
} from '../../actionTypes/newsActionTypes';
import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';

const initialGetArticlesState = {
    isGettingNewsArticles: false,
    newsArticleOverviews: []
}, 
initialSavedUserSettings = {
    page: '1',
    searchPhrase: ''
},
initialContentParentSearchState = {
    isGettingContentParents: false,
    searchQuery: '',
    contentParentSearchResults: []
},
initialGetArticleState = {
    isGettingNewsArticle: false,
    newsArticle: {
        contentParents: []
    }
},
initialUpdateArticleState = {
    isUpdatingNewsArticle: false,
    updateNewsArticleInvalid: false,
    updateNewsArticleInvalidMessage: null,
    updateNewsArticleSuccess: false
},
initialUpdateArticleImageState = {
    isUpdatingNewsArticleImage: false,
    updateNewsArticleImageInvalid: false,
    updateNewsArticleImageInvalidMessage: null
},
initialUpdateArticleIsDisabledState = {
    isUpdatingArticleIsDisabled: false,
    updatingArticleIsDisabledInvalid: false,
    updatingArticleIsDisabledInvalidMessage: null
},
initialAddArticleState = {
    isAddingNewsArticle: false,
    addNewsArticleInvalid: false,
    addNewsArticleInvalidMessage: null,
    addNewsArticleSuccess: false,
    addedArticleId: null,
    addRedirectRequired: false
},
initialState = {
    ...initialGetArticlesState,
    ...initialGetArticleState,
    ...initialUpdateArticleState,
    ...initialUpdateArticleIsDisabledState,
    ...initialUpdateArticleImageState,
    ...initialAddArticleState,
    ...initialContentParentSearchState,
    initialUserSettings: initialSavedUserSettings,
    savedUserSettings: initialSavedUserSettings
};


export function news(state = initialState, action){
    switch(action.type) {
        case USER_GET_ARTICLES:
            return {
                ...state,
                isGettingNewsArticles: true,
                newsArticleOverviews: []
            }
        case SERVER_GET_ARTICLES_SUCCESS:
            return {
                ...state,
                isGettingNewsArticles: false,
                newsArticleOverviews: action.articles,
                userSettings: action.userSettings
            }
        case SERVER_GET_ARTICLES_ERROR:
            return {
                ...state,
                isGettingNewsArticles: false,
                newsArticleOverviews: []
            }
        case USER_GET_ARTICLE:
            return {
                ...state,
                ...initialUpdateArticleState,
                isGettingNewsArticle: true,
                newsArticle: {},
                addRedirectRequired: false
            }
        case SERVER_GET_ARTICLE_SUCCESS:
            return {
                ...state,
                ...initialUpdateArticleState,
                isGettingNewsArticle: false,
                newsArticle: action.article,
                contentParentSearchResults: []
            }
        case SERVER_GET_ARTICLE_ERROR:
            return {
                ...state,
                ...initialUpdateArticleState,
                ...initialGetArticleState
            }
        case USER_UPDATE_ARTICLE:
            return {
                ...state,
                ...initialUpdateArticleState,
                isUpdatingNewsArticle: true
            }
        case SERVER_UPDATE_ARTICLE_INVALID:
            return {
                ...state,
                ...initialUpdateArticleState,
                updateNewsArticleInvalid: true,
                updateNewsArticleInvalidMessage: action.message
            }
        case SERVER_UPDATE_ARTICLE_SUCCESS:
            return {
                ...state,
                ...initialUpdateArticleState,
                newsArticleOverviews: [],
                updateNewsArticleSuccess: true,
                newsArticle: action.article
            }
        case SERVER_UPDATE_ARTICLE_ERROR:
            return {
                ...state,
                ...initialUpdateArticleState
            }
        case UPDATE_ARTICLE_TIMER_ENDS:
            return {
                ...state,
                updateNewsArticleInvalid: false,
                updateNewsArticleInvalidMessage: null,
                updateNewsArticleSuccess: false
            }
        case USER_UPDATE_PUBLISH_DATE:
            return {
                ...state,
                newsArticle: {
                    ...state.newsArticle,
                    publishDate: action.publishDate
                }
            }
        case USER_UPDATE_TITLE:
            return {
                ...state,
                newsArticle: {
                    ...state.newsArticle,
                    title: action.title
                }
            }
        case USER_UPDATE_META_DESCRIPTION:
            return {
                ...state,
                newsArticle: {
                    ...state.newsArticle,
                    metaDescription: action.metaDescription
                }
            }
        case USER_UPDATE_CONTENT:
            return {
                ...state,
                newsArticle: {
                    ...state.newsArticle,
                    content: action.content
                }
            }
        case USER_UPDATE_ARTICLE_IS_DISABLED:
            return {
                ...state,
                ...initialUpdateArticleIsDisabledState,
                isUpdatingArticleIsDisabled: true
            }
        case SERVER_UPDATE_ARTICLE_IS_DISABLED_INVALID:
            return {
                ...state,
                isUpdatingArticleIsDisabled: false,
                updatingArticleIsDisabledInvalid: true,
                updatingArticleIsDisabledInvalidMessage: action.message
            }
        case SERVER_UPDATE_ARTICLE_IS_DISABLED_SUCCESS:
            return {
                ...state,
                ...initialUpdateArticleIsDisabledState,
                newsArticleOverviews: [],
                newsArticle: action.article
            }
        case SERVER_UPDATE_ARTICLE_IS_DISABLED_ERROR:
            return {
                ...state,
                ...initialUpdateArticleIsDisabledState,
                isUpdatingArticleIsDisabled: false
            }
        case UPDATE_ARTICLE_IS_DISABLED_TIMER_ENDS:
            return {
                ...state,
                updatingArticleIsDisabledInvalid: false,
                updatingArticleIsDisabledInvalidMessage: null
            }
        case USER_ADD_ARTICLE:
            return {
                ...state,
                ...initialAddArticleState,
                isAddingNewsArticle: true
            }
        case SERVER_ADD_ARTICLE_INVALID:
            return {
                ...state,
                ...initialAddArticleState,
                addNewsArticleInvalid: true,
                addNewsArticleInvalidMessage: action.message
            }
        case SERVER_ADD_ARTICLE_SUCCESS:
            return {
                ...state,
                ...initialAddArticleState,
                newsArticleOverviews: [],
                addNewsArticleSuccess: true,
                addedArticleId: action.articleId,
                addRedirectRequired: true,
            }
        case SERVER_ADD_ARTICLE_ERROR:
            return {
                ...state,
                ...initialAddArticleState
            }
        case ADD_ARTICLE_TIMER_ENDS:
            return {
                ...state,
                addNewsArticleInvalid: false,
                addNewsArticleInvalidMessage: null,
                addNewsArticleSuccess: false,
                addedArticleId: null
            }
        case USER_UPDATE_ARTICLE_IMAGE:
            return {
                ...state,
                ...initialUpdateArticleImageState,
                isUpdatingNewsArticleImage: true
            }
        case SERVER_UPDATE_ARTICLE_IMAGE_INVALID:
            return {
                ...state,
                isUpdatingNewsArticleImage: false,
                updateNewsArticleImageInvalid: true,
                updateNewsArticleImageInvalidMessage: action.message
            }
        case SERVER_UPDATE_ARTICLE_IMAGE_SUCCESS:
            return {
                ...state,
                ...initialUpdateArticleImageState,
                newsArticleOverviews: [],
                newsArticle: action.article
            }
        case SERVER_UPDATE_ARTICLE_IMAGE_ERROR:
            return {
                ...state,
                ...initialUpdateArticleImageState
            }
        case UPDATE_ARTICLE_IMAGE_TIMER_ENDS:
            return {
                ...state,
                updateNewsArticleImageInvalid: false,
                updateNewsArticleImageInvalidMessage: null
            }
        case SERVER_UPDATE_ARTICLE_BODY_IMAGE_SUCCESS:
            return {
                ...state,
                newsArticleOverviews: [],
            } 
        case USER_GET_CONTENT_PARENTS:
            return {
                ...state,
                ...initialContentParentSearchState
            } 
        case SERVER_GET_CONTENT_PARENTS_SUCCESS:
            return {
                ...state,
                isGettingContentParents: false,
                searchQuery: action.searchQuery,
                contentParentSearchResults: action.contentParentSearchResults
            } 
        case SERVER_GET_CONTENT_PARENTS_ERROR:
            return {
                ...state,
                ...initialContentParentSearchState
            } 
        case USER_ADD_CONTENT_PARENT_TO_ARTICLE:
            return {
                ...state,
                newsArticle: {
                    ...state.newsArticle,
                    contentParents: [
                        ...state.newsArticle.contentParents,
                        action.contentParent
                    ]
                }
            } 
        case USER_DELETE_CONTENT_PARENT_FROM_ARTICLE:
            return {
                ...state,
                newsArticle: {
                    ...state.newsArticle,
                    contentParents: state.newsArticle.contentParents.filter( (contentParent, index) => index !== action.index )
                }
            } 
        case USER_OPENS_CREATE_ARTICLE_PAGE:
            return {
                ...state,
                ...initialGetArticleState,
                ...initialContentParentSearchState
            }
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}