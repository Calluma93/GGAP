import { connect } from 'react-redux';
import HtmlPages from '../pages/content/htmlPages/HtmlPages';
import { 
    userUpdateHtmlPageTitle,
    userUpdateHtmlPageMetaDescription,
    userUpdateHtmlPageMetaKeywords,
    userUpdateHtmlPageContent,
    userGetHtmlPages,
    userUpdateHtmlPage,
    userAddHtmlPage,
    userGetHtmlPageTypes,
    userUpdateHtmlPagePublished,
    userDeleteHtmlPage,
    userGetHtmlPage
} from '../actionCreators/htmlPagesActionCreators';

function mapStateToProps(state) {
    return{
        htmlPages: state.ui.htmlPages.htmlPages,
        isGettingHtmlPage: state.ui.htmlPages.isGettingHtmlPage,
        currentHtmlPage: state.ui.htmlPages.currentHtmlPage,
        pageTypes: state.htmlPageTypes,
        isUpdatingHtmlPage: state.ui.htmlPages.isUpdatingHtmlPage,
        updateHtmlPageInvalid: state.ui.htmlPages.updateHtmlPageInvalid,
        invalidUpdateHtmlPageMessage: state.ui.htmlPages.invalidUpdateHtmlPageMessage,
        updateHtmlPageSuccessful: state.ui.htmlPages.updateHtmlPageSuccessful,
        isCreatingHtmlPage: state.ui.htmlPages.isCreatingHtmlPage,
        createHtmlPageInvalid: state.ui.htmlPages.createHtmlPageInvalid,
        invalidCreateHtmlPageMessage: state.ui.htmlPages.invalidCreateHtmlPageMessage,
        createHtmlPageSuccessful: state.ui.htmlPages.createHtmlPageSuccessful,
        isUpdatingHtmlPagePublish: state.ui.htmlPages.isUpdatingHtmlPagePublish,
        isDeletingHtmlPage: state.ui.htmlPages.isDeletingHtmlPage,
        deleteHtmlPageSuccessful: state.ui.htmlPages.deleteHtmlPageSuccessful,
        isGettingHtmlPages: state.ui.htmlPages.isGettingHtmlPages,
        isGettingHtmlPageTypes: state.ui.htmlPages.isGettingHtmlPageTypes,
        addRedirectRequired: state.ui.htmlPages.addRedirectRequired,
        deleteRedirectRequired: state.ui.htmlPages.deleteRedirectRequired
    }
}

function mapDispatchToProps(dispatch){
    return{
        onGetHtmlPages(){
            dispatch(userGetHtmlPages());
        },
        onGetHtmlPageTypes(){
            dispatch(userGetHtmlPageTypes());
        },
        onUpdateHtmlPage(pageId, title, metaDescription, metaKeywords, content){
            dispatch(userUpdateHtmlPage(pageId, title, metaDescription, metaKeywords, content));
        },
        onCreateHtmlPage(name, pageType, title, metaDescription, metaKeywords, content){
            dispatch(userAddHtmlPage(name, pageType, title, metaDescription, metaKeywords, content));
        },
        onUpdateHtmlPagePublish(pageId, isPublished){
            dispatch(userUpdateHtmlPagePublished(pageId, isPublished));
        },
        onUserLoadsHtmlPage(pageId) {
            dispatch(userGetHtmlPage(pageId));
        },
        onUserUpdateHtmlPageTitle(pageTitle){
            dispatch(userUpdateHtmlPageTitle(pageTitle));
        },
        onUserUpdateHtmlPageMetaDescription(pageMetaDescription){
            dispatch(userUpdateHtmlPageMetaDescription(pageMetaDescription))
        },
        onUserUpdateHtmlPageMetaKeywords(pageMetaKeywords){
            dispatch(userUpdateHtmlPageMetaKeywords(pageMetaKeywords));
        },
        onUserUpdateHtmlPageContent(pageContent){
            dispatch(userUpdateHtmlPageContent(pageContent));
        },
        onUserDeletesHtmlPage(pageId) {
            dispatch(userDeleteHtmlPage(pageId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HtmlPages);