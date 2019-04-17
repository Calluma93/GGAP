import React, { Component } from 'react';
import Loader from '../loader/Loader';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

class ContentParentItem extends Component {

    render() {

        return (
            this.props.isGettingCategories || this.props.isGettingContentParentTypes
                ? <Loader height="60px" width="60px" right="50%" />
                : <div className="row content-parent-item" onClick={ () => this.props.handleContentParentClick(this.props.index) }>
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
                    <FontAwesomeIcon size="lg" icon="times"/>
                </div>
        )
    }
}

export default ContentParentItem;