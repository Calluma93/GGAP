import React, { Component } from 'react'
import {Link, Redirect} from 'react-router-dom';
import {Alert} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Loader from '../../../../components/loader/Loader';

class EditHtmlPage extends Component {

    componentDidMount(){
        this.props.onUserLoadsHtmlPage(this.props.match.match.params.id);
    }

    handleNameChange = (event) => {
        this.props.onUserUpdateHtmlPageName(event.target.value)
    }

    handleTitleChange = (event) => {
        this.props.onUserUpdateHtmlPageTitle(event.target.value)
    }

    handleMetaDescriptionChange = (event) => {
        this.props.onUserUpdateHtmlPageMetaDescription(event.target.value)
    }

    handleMetaKeywordsChange = (event) => {
        this.props.onUserUpdateHtmlPageMetaKeywords(event.target.value)
    }

    handleContentChange = (event) => {
        this.props.onUserUpdateHtmlPageContent(event.target.value)
    }
    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.onUpdateHtmlPage(this.props.htmlPage.pageId, this.props.htmlPage.title, this.props.htmlPage.metaDescription, this.props.htmlPage.metaKeywords, this.props.htmlPage.content);
    }
    
    handleHtmlPagePublish = () => {
        this.props.onUpdateHtmlPagePublish(this.props.htmlPage.pageId, !this.props.htmlPage.isPublished);
    }

    handleHtmlPageDelete = () => {
        this.props.onUserDeletesHtmlPage(this.props.htmlPage.pageId);
    }

  render() {
    return (
      <div className="col-sm-12 edit-html-page">
        {
            this.props.deleteRedirectRequired 
            ? <Redirect to="/content/html-pages" /> 
            : null
        }
        {this.props.htmlPage? 
        <div className="row">
            <div className="col-sm-12 text-right">
                <Link to={"/content/html-pages/"}><FontAwesomeIcon icon="times" /></Link>
            </div>
            {this.props.isGettingHtmlPage
                ?   <Loader width="60px" height="60px" top="150px" right="160px"/>
                : ''
            }
            <div className="col-sm-9">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group row">
                    <label htmlFor="page-name" className="col-sm-2 col-form-label" >Page Name</label>   
                    <label htmlFor="page-name" className="col-sm-2 col-form-label" >{this.props.htmlPage.name || ''}</label>   
                </div>
                <div className="form-group row">
                    <label htmlFor="select-type" className="col-sm-2 col-form-label">Page Type</label>
                    <label htmlFor="page-name" className="col-sm-2 col-form-label" >{this.props.htmlPage.type || ''}</label>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-title" className="col-sm-2 col-form-label">Page Title</label>   
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleTitleChange} value={this.props.htmlPage.title || ''} placeholder="Please insert page title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-meta-description" className="col-sm-2 col-form-label">Meta Description</label>   
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleMetaDescriptionChange} value={this.props.htmlPage.metaDescription || ''} placeholder="Please insert page meta description" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-mete-keywords" className="col-sm-2 col-form-label">Meta Keywords</label>   
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleMetaKeywordsChange} value={this.props.htmlPage.metaKeywords || ''} placeholder="Please insert page meta keywords" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-mete-keywords" className="col-sm-2 col-form-label">Content</label>   
                    <div className="col-sm-10">
                        <textarea  className="form-control-plaintext" onChange={this.handleContentChange} value={this.props.htmlPage.content || ''} placeholder="Please insert Content" />
                    </div>
                </div>
                <div className="row">
                    <span htmlFor="submit-form" className="col-sm-2 col-form-span"></span>   
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-4">
                                <button className="btn btn-orange">
                                Save
                                { this.props.isUpdatingHtmlPage?
                                <Loader width="20px" height="20px"/>
                                : null
                                }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row user-feedback">
                    <div className="col-sm-12"> 
                    <Alert color="danger" isOpen={this.props.updateHtmlPageInvalid}>
                        <span>{this.props.invalidUpdateHtmlPageMessage}</span>
                    </Alert>
                    <Alert color="success" isOpen={this.props.updateHtmlPageSuccessful}>
                        Html page updated
                    </Alert>
                    </div>
                </div>
            </form>
            
            </div>
            <div className="col-sm-3">
                {this.props.htmlPage.isPublished && this.props.htmlPage.canBeUnpublished ? 
                <button onClick={this.handleHtmlPagePublish} className="btn btn-red">UNPUBLISH
                    { this.props.isUpdatingHtmlPagePublish?
                        <Loader width="20px" height="20px"/>
                        : null}
                </button>
                : !this.props.htmlPage.isPublished ? 
                <div>
                    <button onClick={this.handleHtmlPagePublish} className="btn btn-green">PUBLISH
                        { this.props.isUpdatingHtmlPagePublish?
                            <Loader width="20px" height="20px"/>
                            : null}
                    </button>
                    <button onClick={this.handleHtmlPageDelete} className="btn btn-red">
                    DELETE
                    { this.props.isDeletingHtmlPage?
                    <Loader width="20px" height="20px"/>
                    : null
                    }
                    </button>
                </div>
                : null }
            </div>
        </div>
        : null }
      </div>
    )
  }
}
export default EditHtmlPage;
