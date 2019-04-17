import React, { Component } from 'react';
import Loader from '../loader/Loader';

class ContentParentSearchItem extends Component {

    render() {

        return (
            this.props.isGettingContentParents || this.props.isGettingContentParentTypes
                ? <Loader height="60px" width="60px" />
                : <div className="row content-parent-search-item" onClick={() => this.props.handleContentParentSearchClick(this.props.contentParent)}>
                    <div className="content-parent-type">
                        {
                            this.props.contentParentTypes === null 
                                ? "" 
                                : this.props.contentParentTypes.byId[this.props.contentParent.type].name
                        }:&nbsp;
                    </div>
                    <div className="content-parent-category">
                        {
                            this.props.contentParent.categoryId === null 
                                ? ''
                                : this.props.categories.byId[this.props.contentParent.categoryId].adminName
                        }&nbsp;
                    </div>
                    <div className="content-parent-brand">
                        {this.props.contentParent.brand}&nbsp;
                    </div>
                    <div className="content-parent-tag">
                        {this.props.contentParent.tag}&nbsp;
                    </div>
                </div>
        )
    }
}

export default ContentParentSearchItem;