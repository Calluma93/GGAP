import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import StatusLight from '../../../../components/statusLight/StatusLight';
import {Status} from '../../../../uiHelpers/UiHelpers';

class NewsListItem extends Component {
  render() {
    let articleStatus = this.props.status === 'Live'? Status.ON :
        this.props.status === 'Offline' ? Status.OFF : Status.WAITING;
        
    const articleUrl = '/content/news/edit/' + this.props.articleId;

    return (
        <div className="row list-article">
            <div className="col-xl-7 col-lg-5 col-sm-12"><h6><StatusLight status={articleStatus} />{this.props.title}</h6></div>
            <div className="col-xl-3 col-lg-5 col-sm-12 date"><h6>Last Edited - {this.props.lastEdited} </h6></div>
            <div className="col-xl-2 col-lg-2 col-sm-12"><Link to={articleUrl} className="btn btn-orange_border">EDIT</Link></div>
        </div>
    )
  }
}
export default  NewsListItem;
