import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ContentParentItem from './ContentParentItem';
import ContentParentSearchItem from './ContentParentSearchItem';
import Loader from '../loader/Loader';

class ContentParentSearch extends Component {

    state = {
        timeoutUntilSubmission: null,
        eventToRegister: null
    };

    onClick() {
        this.props.setContentParentSearchBox(true);
    }
    
    blurListener(e) {
        let elementThatWasClicked = e.target;
        let thisReactComponentElement = ReactDOM.findDOMNode(this).querySelector('.content-parent-search');

        if (!thisReactComponentElement.contains(elementThatWasClicked)) {
            this.props.setContentParentSearchBox(false);
        }
    }

    //Used to listen for clicks inside wysiwyg and close dropdown
    componentDidMount() {
        const eventToRegister = e => this.blurListener(e);
        document.addEventListener('click', eventToRegister);

        this.setState({
            eventToRegister
        });
    }

    letterTyped() {

        if (this.state.timeoutUntilSubmission !== null ) {
            clearTimeout(this.state.timeoutUntilSubmission);
        }

        let timeoutUntilSubmission = setTimeout(() =>
            this.props.handleSearchSubmit(), 100);

        this.setState({
            timeoutUntilSubmission
        });

    }

    componentWillUnmount() {

        if (this.state.eventToRegister !== null) {
            document.removeEventListener('click', this.state.eventToRegister);
        }

    }

    render() {

        let contentParentsSearchResults;
        let associatedContentParents = null;

        if(this.props.isGettingContentParents){
            contentParentsSearchResults = <Loader height="60px" width="60px" top="60px" right="50%" />;
        }
        else{

            if ('contentParentSearchResults' in this.props) {
                contentParentsSearchResults = this.props.contentParentSearchResults.map((contentParent, index) => (
                    <ContentParentSearchItem
                        contentParent={contentParent} 
                        key={index}
                        handleContentParentSearchClick={this.props.handleContentParentSearchClick}
                        categories={this.props.categories}
                        isGettingCategories={this.props.isGettingCategories}
                        contentParentTypes={this.props.contentParentTypes}
                        isGettingContentParents={this.props.isGettingContentParents}
                        isGettingContentParentTypes={this.props.isGettingContentParentTypes}
                    />
                ));
            }
        } 

        if(this.props.isGettingNewsArticle) {
            associatedContentParents = <Loader height="60px" width="60px" right="50%" />;
        }
        else{

            if ('newsArticle' in this.props && 'contentParents' in this.props.newsArticle) {
                associatedContentParents = this.props.newsArticle.contentParents.map((contentParent, index) => (
                    <ContentParentItem
                        contentParent={contentParent} 
                        key={index}
                        index={index}
                        handleContentParentClick={this.props.handleContentParentClick}
                        categories={this.props.categories}
                        contentParentTypes={this.props.contentParentTypes}
                        isGettingCategories={this.props.isGettingCategories}
                        isGettingContentParentTypes={this.props.isGettingContentParentTypes}
                    />
                ));
            }
        } 

        return (
            <div className="form-group row">

                <label htmlFor="article-category" className="col-sm-1 col-form-label">CATEGORY</label>   

                <div className="col-sm-5 content-parent-search" onClick={e => this.onClick(e)}>
                    <input 
                        type="text" 
                        className="form-control-plaintext" 
                        placeholder="Please insert content parent"
                        value={this.props.searchQuery || ''}
                        onChange={(e) => {
                            this.props.handleSearchQueryChange(e);
                            this.letterTyped();
                        }}
                    />
                    <div className={`content-parent-dropdown ${this.props.contentParentBoxOpen ? "content-parent-search-box-open" : "content-parent-search-box-closed"}`} >
                        {contentParentsSearchResults}
                    </div>
                </div>

                <button className="btn btn-grey" hidden />

                <div className="col-sm-6 associated-content-parents">
                    {associatedContentParents}
                </div>
            </div>
        )
    }
}

export default ContentParentSearch;