import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import {Alert} from 'reactstrap';
import Loader from '../../../../components/loader/Loader';
import ImageFormInput from '../../../../components/imageFormInput/ImageFormInput';
import ContentParentSearch from '../../../../components/contentParentSearch/ContentParentSearch';

import {PhotoSwipe} from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';

// import datepicker
import DateTimeSelector from '../../../../components/dateTimeSelector/DateTimeSelector';

// Import TinyMCE
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

class EditNews extends Component{

    state = {
        isOpen: false,
        options: {
          closeOnScroll: false
        },
        contentParentBoxOpen: false
      };

    handleTitleChange = (e) => {
        this.props.userUpdateTitle(e.target.value);
    }

    handleMetaDescriptionChange = (e) => {
        this.props.userUpdateMetaDescription(e.target.value);
    }

    handleContentChange = (content) => {
        this.props.userUpdateContent(content);
    }

    handleArticleEnable = (e) => {
        e.preventDefault();
        this.props.userUpdateArticleIsDisabled(this.props.newsArticle.articleId, !this.props.newsArticle.isDisabled)
    }

    handleNewsSave = (e) => {
        e.preventDefault();
        this.props.userUpdateArticle(this.props.newsArticle.articleId, this.props.newsArticle.publishDate, this.props.newsArticle.title,
        this.props.newsArticle.metaDescription, this.props.newsArticle.content, this.props.newsArticle.contentParents);
    }

    handleUserUpdatesNewsArticleImage = (imageName, imageContent) => {
        this.props.userUpdateArticleImage(this.props.newsArticle.articleId, imageName, imageContent)
    }

    openPhotoSwipe = (e) => {
        e.preventDefault();
        this.setState({
            isOpen: true
        });
    };

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };

    componentDidMount() {
        this.props.userGetArticle(this.props.match.match.params.id);
        this.props.userGetCategories();
        this.props.userGetContentParentTypes();
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

    setContentParentSearchBox = (action) => {
        this.setState({
            contentParentBoxOpen: action
        })
    }
 
    render() {

        const items = [{
            src: this.props.newsArticle.imageUrl,
            w: 1200,
            h: 900
        }];

        let publishedStatus = this.props.newsArticle.status === 'Live' 
                ? "published-label" 
                : this.props.newsArticle.status === 'Offline' 
                    ? "published-label offline" 
                    : "published-label waiting"
        ;

        return(
            <div className="col-sm-12 news-article">
                <div className="titles">
                    <span>News  |  </span><span className={publishedStatus} >{this.props.newsArticle.status}</span>
                </div>

                <div className="row">
                    <div className="col-sm-12 main-body">
                        <Alert color="danger" isOpen={this.props.updatingArticleIsDisabledInvalid}>
                            <span>{this.props.updatingArticleIsDisabledInvalidMessage}</span>
                        </Alert>
                        <div className="col-sm-12 text-right">
                            <Link to={"/content/news/"}><FontAwesomeIcon icon="times" /></Link>
                        </div>

                        <Alert color="success" isOpen={this.props.addNewsArticleSuccess}>
                            News Article Created
                        </Alert>
                        
                        <Alert color="danger" isOpen={this.props.updateNewsArticleImageInvalid}>
                            <span>{this.props.updateNewsArticleImageInvalidMessage}</span>
                        </Alert>

                        {this.props.isGettingNewsArticle
                            ?   <Loader width="60px" height="60px" top="100px" right="100px"/>
                            : ''
                        }
                        
                        <form>    

                            <div className="row">

                                <div className="col-lg-10 col-sm-12">
                                    <div className="form-group row">
                                        <label htmlFor="article-dated" className="col-sm-1 col-md-2 col-lg-2 col-xl-1 col-form-label">SCHEDULE</label>  
                                        <div className="col-sm-12 col-md-12 col-lg-10 col-xl-11">
                                            <DateTimeSelector
                                                value={this.props.newsArticle.publishDate}
                                                onChange={this.props.userUpdatePublishDate}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-12 col-lg-2">
                                    {this.props.newsArticle.isDisabled 
                                        ?   <button onClick={this.handleArticleEnable}  className="btn btn-green">ENABLE </button>
                                        :   <button onClick={this.handleArticleEnable}  className="btn btn-red"> DISABLE </button>
                                    }
                                    {this.props.isUpdatingArticleIsDisabled
                                        ?   <Loader width="20px" height="20px" top="7px" right="20px"/>
                                        :   ''
                                    }
                                </div>

                            </div>   

                            <div className="row">

                                <div className="col-sm-12 col-lg-10">

                                    <div className="form-group row">
                                        <label htmlFor="article-thumb" className="col-sm-1 col-md-2 col-lg-2 col-xl-1 col-form-label">THUMB</label>
                                        <div className="col-sm-12 col-md-12 col-lg-3 col-xl-2">
                                            <div className="image-uploader">
                                                <ImageFormInput onChange={this.handleUserUpdatesNewsArticleImage} />
                                            </div>
                                            <p className="image-uploader-label">
                                                UPLOAD
                                                { this.props.isUpdatingNewsArticleImage
                                                    ?   <Loader width="20px" height="20px"/>
                                                    :   null
                                                }
                                            </p>
                                        </div>
                                        <div className="col-sm-12 col-md-12 col-lg-7 col-xl-9">
                                            <input 
                                                type="text" 
                                                value={this.props.newsArticle.imageUrl == null
                                                        ? "" 
                                                        : this.props.newsArticle.imageUrl} 
                                                className="form-control-plaintext" disabled
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="article-title" className="col-sm-1 col-md-1 col-form-label">TITLE</label>   
                                        <div className="col-sm-12 col-md-11">
                                            <input type="text" value={this.props.newsArticle.title || ''} onChange={this.handleTitleChange} className="form-control-plaintext" />
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label htmlFor="article-meta" className="col-sm-1 col-md-1 col-form-label">META</label>   
                                        <div className="col-sm-12 col-md-11">
                                            <input type="text" value={this.props.newsArticle.metaDescription || ''} onChange={this.handleMetaDescriptionChange} className="form-control-plaintext" />
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

                                </div>

                                <div className="col-lg-2 col-xl-2 col-sm-12">
                                { this.props.newsArticle.imageUrl ? 
                                    <div className="news-image news-image-preview" onClick={this.openPhotoSwipe}>
                                        <img src={this.props.newsArticle.imageUrl} alt={this.props.newsArticle.imageName} />
                                        <p className="preview">Thumb Preview</p>
                                        <PhotoSwipe isOpen={this.state.isOpen} items={items} onClose={this.handleClose} />
                                        <p className="click">(Click to view)</p>
                                    </div>
                                    : null
                                    }
                                </div>      

                            </div>   

                            <div className="row">
                                <div className="col-sm-12 col-lg-10">
                                    <div className="row">
                                    
                                <label htmlFor="article-meta" className="col-sm-1 col-form-label"></label>   
                                <div className="col-sm-12 col-lg-11 editor">
                                    <Editor
                                        value={this.props.newsArticle.content || ''}
                                        init={{
                                            plugins: 'link image code table lists advlist wordcount media',
                                            toolbar: 'undo redo | formatselect | bold italic strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | code | link unlink | image media',
                                            image_advtab: true,
                                            automatic_uploads: false,
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
                                </div>
                            </div>

                            <div className="row user-feedback">
                                <div className="col-sm-12"> 
                                    <Alert color="danger" isOpen={this.props.updateNewsArticleInvalid}>
                                        <span>{this.props.updateNewsArticleInvalidMessage}</span>
                                    </Alert>
                                    <Alert color="success" isOpen={this.props.updateNewsArticleSuccess}>
                                        News Page Updated
                                    </Alert>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-10">
                                    <div className="row"> 
                                <span htmlFor="submit-form" className="col-sm-1 col-form-span"></span>   
                                <div className="col-sm-12 col-lg-11 mt-2">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-6">
                                            <div className="row">
                                                <div className="col-sm-6 mb-2">
                                                    <a href={this.props.newsArticle.previewUrl} target="_blank" className="btn btn-grey">
                                                        PREVIEW
                                                    </a>
                                                </div>
                                                <div className="col-sm-6">
                                                    <button onClick={this.handleNewsSave} type="submit" className="btn btn-orange">
                                                        SAVE
                                                        { this.props.isUpdatingNewsArticle
                                                            ?   <Loader width="20px" height="20px"/>
                                                            :   null
                                                        }
                                                    </button>
                                                </div>
                                            </div> 
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
export default EditNews;