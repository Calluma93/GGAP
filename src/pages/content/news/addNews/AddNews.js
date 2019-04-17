import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Alert} from 'reactstrap';
import Loader from '../../../../components/loader/Loader';
import ContentParentSearch from '../../../../components/contentParentSearch/ContentParentSearch';

// import datepicker
import DateTimeSelector from '../../../../components/dateTimeSelector/DateTimeSelector';
// Import TinyMCE
import tinymce from 'tinymce/tinymce';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/code';
import 'tinymce/plugins/table';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/wordcount';
import 'tinymce/plugins/media';

// A theme is also required
import '../../../../skins/lightgray/skin.min.css';
import 'tinymce/themes/modern';
import { Editor } from '@tinymce/tinymce-react';

// Initialize the app
tinymce.init({
  selector: '#tiny',
  theme: 'modern'
})

class AddNews extends Component{

    constructor(props){
        super(props);
        this.state = {
            publishDate: new Date(),
            contentParentBoxOpen: false
        }
    }

    handlePublishDateChange = (publishDate) => {
        this.setState({publishDate: publishDate})
    }

    handleTitleChange = (e) => {
        this.props.userUpdateTitle(e.target.value);
    }

    handleMetaDescriptionChange = (e) => {
        this.props.userUpdateMetaDescription(e.target.value);
    }

    handleContentChange = (content) => {
        this.props.userUpdateContent(content);
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.userAddArticle(
            this.state.publishDate, 
            this.props.newsArticle.title,
            this.props.newsArticle.metaDescription, 
            this.props.newsArticle.content,
            this.props.newsArticle.contentParents
        );
    }

    handleSearchQueryChange = (event) => {
        this.setState({
            ...this.state,
            searchQuery: event.target.value
        });
    }
    
    handleSearchSubmit = () => {
        if(this.state.searchQuery !== '')
        {
            this.props.userGetContentParents(this.state.searchQuery);
        }
    }

    handleContentParentSearchClick = (contentParent) => {
        this.props.associateContentParent(contentParent);
    }

    handleContentParentClick = (index) => {
        this.props.removeContentParent(index);
    }

    componentDidMount() {
        this.props.userOpensCreateArticlePage();
        this.props.userUpdatePublishDate(this.state.publishDate);
        this.props.userGetCategories();
    }

    setContentParentSearchBox = (action) => {
        this.setState({
            contentParentBoxOpen: action
        })
    }

    render() {
        return(
            <div className="col-sm-12 news-article">
                {
                    this.props.addRedirectRequired
                    ? <Redirect to={"/content/news/edit/" + this.props.addedArticleId + "/"} /> 
                    : null
                }
                <div className="row">
                    <div className="col-sm-12 main-body">
                        <div className="col-sm-12 text-right">
                            <Link to={"/content/news/"}><FontAwesomeIcon icon="times" /></Link>
                        </div>

                        <form onSubmit={this.handleSubmitForm}>

                            <div className="form-group row">
                                <label htmlFor="article-dated" className="col-sm-1 col-form-label">SCHEDULE</label>  
                                <div className="col-sm-10">
                                    <DateTimeSelector 
                                        value={this.state.publishDate}
                                        onChange={this.props.userUpdatePublishDate}
                                    />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="article-title" className="col-sm-1 col-form-label">TITLE</label>   
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext" value={this.props.newsArticle.title || ''} onChange={this.handleTitleChange} placeholder="Please insert page title"/>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="article-meta" className="col-sm-1 col-form-label">META</label>   
                                <div className="col-sm-10">
                                    <input type="text" className="form-control-plaintext" value={this.props.newsArticle.metaDescription || ''} onChange={this.handleMetaDescriptionChange} placeholder="Please insert page meta description"/>
                                </div>
                            </div>

                            <ContentParentSearch
                                onSubmit={this.handleSearchSubmit}
                                searchQuery={this.state.searchQuery}
                                handleSearchQueryChange={this.handleSearchQueryChange}
                                contentParentSearchResults={this.props.contentParentSearchResults}
                                newsArticle={this.props.newsArticle}
                                isGettingNewsArticle={this.props.isGettingNewsArticle}
                                handleContentParentClick={this.handleContentParentClick}
                                handleContentParentSearchClick={this.handleContentParentSearchClick}
                                categories={this.props.categories}
                                isGettingCategories={this.props.isGettingCategories}
                                handleSearchSubmit={this.handleSearchSubmit}
                                isGettingContentParents={this.props.isGettingContentParents}
                                contentParentTypes={this.props.contentParentTypes}
                                setContentParentSearchBox={this.setContentParentSearchBox}
                                contentParentBoxOpen={this.state.contentParentBoxOpen}
                                isGettingContentParentTypes={this.props.isGettingContentParentTypes}
                            />

                            <div className="form-group row">
                                <label htmlFor="article-meta" className="col-sm-1 col-form-label"></label>   
                                <div className="col-sm-10 editor">
                                    <Editor
                                        value={this.props.newsArticle.content || ''}
                                        init={{
                                            plugins: 'link image code table lists advlist wordcount media',
                                            toolbar: 'undo redo | formatselect | bold italic strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code | link unlink | image media',
                                            image_advtab: true,
                                            file_browser_callback_types: 'image',
                                            content_style: 'html{height: 95%;}body{height: 100%;}',
                                            images_upload_handler: (blobInfo, success, failure) =>{
                                                let fileReader = new FileReader();
                                                let fileName = blobInfo.filename();
                                                fileReader.onloadend = () => {
                                                    this.props.userUpdateArticleBodyImage(fileName, fileReader.result, failure, success);
                                                };
                                                fileReader.readAsArrayBuffer(blobInfo.blob());
                                            },
                                            setup: (editor) => {
                                                editor.on("init", () => {
                                                    document.querySelector('iframe').contentDocument.querySelector('body').addEventListener('click', () => 
                                                        this.setContentParentSearchBox(false)
                                                    );
                                                })
                                            }
                                        }}
                                        onEditorChange={this.handleContentChange}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <span htmlFor="submit-form" className="col-sm-1 col-form-span"></span>   
                                <div className="col-sm-10">
                                    <div className="row user-feedback">
                                        <div className="col-sm-12"> 
                                            <Alert color="danger" isOpen={this.props.addNewsArticleInvalid}>
                                                <span>{this.props.addNewsArticleInvalidMessage}</span>
                                            </Alert>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xs-6 col-sm-6 col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <button type="submit" className="btn btn-orange">
                                                        SAVE
                                                        { this.props.isAddingNewsArticle?
                                                            <Loader width="20px" height="20px"/>
                                                            : null
                                                        }
                                                    </button>
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form> 
                        
                    </div>
                </div>
            </div>
        )
    }
}
export default AddNews;