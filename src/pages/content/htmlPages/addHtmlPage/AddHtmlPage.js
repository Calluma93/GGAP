import React, { Component } from 'react'
import Select from 'react-select';
import {Link, Redirect} from 'react-router-dom';
import {Alert} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Loader from '../../../../components/loader/Loader';

class AddHtmlPage extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            title: '',
            metaDescription: '',
            metaKeywords: '',
            content: '',
            pageType: '',
            published: false
        }
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleTitleChange = (event) => {
        this.setState({title: event.target.value})
    }

    handleMetaDescriptionChange = (event) => {
        this.setState({metaDescription: event.target.value})
    }

    handleMetaKeywordsChange = (event) => {
        this.setState({metaKeywords: event.target.value})
    }

    handleContentChange = (event) => {
        this.setState({content: event.target.value})
    }

    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.onCreateHtmlPage(
            this.state.name, 
            this.state.pageType, 
            this.state.title, 
            this.state.metaDescription,
            this.state.metaKeywords, 
            this.state.content
        );
    }

    handleTypeChange = (selectedValue) => {  
        this.setState({
            pageType: selectedValue.value
        })
    }

    componentDidMount(){
        if(this.props.pageTypes.length <= 0){
            this.props.onGetHtmlPageTypes();
        } 
    }

  render() {
    return (
      <div className="col-sm-12 edit-html-page">
        {
            this.props.addRedirectRequired
            ? <Redirect to="/content/html-pages" /> 
            : null
        }
        <div className="row">
            <div className="col-sm-12 text-right">
                <Link to={"/content/html-pages/"}><FontAwesomeIcon icon="times" /></Link>
            </div>
            <div className="col-sm-9">
            <form onSubmit={this.handleSubmitForm}>
                <div className="form-group row">
                    <label htmlFor="page-name" className="col-sm-2 col-form-label">Page Name</label>   
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleNameChange} placeholder="Please insert page name" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="select-type" className="col-sm-2 col-form-label">Page Type</label>
                    <div className="col-sm-10">
                        {this.props.isGettingHtmlPageTypes ?
                            <Loader width="20px" height="20px"/> :
                            <Select
                                value={this.state.pageType}
                                placeholder="Please Select Page Type"
                                onChange={this.handleTypeChange}
                                options={this.props.pageTypes.map(pageType => ({ value: pageType, label: pageType }))}
                            />
                            
                        }
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-title" className="col-sm-2 col-form-label">Page Title</label>   
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleTitleChange}  placeholder="Please insert page title" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-meta-description" className="col-sm-2 col-form-label">Meta Description</label>   
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleMetaDescriptionChange}  placeholder="Please insert page meta description" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-meta-keywords" className="col-sm-2 col-form-label">Meta Keywords</label>   
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleMetaKeywordsChange} placeholder="Please insert page meta keywords" />
                    </div>
                </div>
                <div className="form-group row">
                    <label htmlFor="page-mete-keywords" className="col-sm-2 col-form-label">Content</label>   
                    <div className="col-sm-10">
                        <textarea  className="form-control-plaintext" onChange={this.handleContentChange}  placeholder="Please insert Content" />
                    </div>
                </div>
                <div className="row">
                    <span htmlFor="submit-form" className="col-sm-2 col-form-span"></span>   
                    <div className="col-sm-10">
                        <div className="row">
                            <div className="col-sm-6">
                                <button className="btn btn-orange">Save
                                { this.props.isCreatingHtmlPage ?
                                    <Loader width="20px" height="20px"/> :
                                    null
                                }
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row user-feedback">
                    <div className="col-sm-12"> 
                    <Alert color="danger" isOpen={this.props.createHtmlPageInvalid}>
                        <span>{this.props.invalidCreateHtmlPageMessage}</span>
                    </Alert>
                    </div>
                </div>
            </form>
            </div>
        </div>
      </div>
    )
  }
}

export default AddHtmlPage;
