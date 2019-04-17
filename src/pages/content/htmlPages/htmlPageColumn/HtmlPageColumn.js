import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import StatusLight from '../../../../components/statusLight/StatusLight';

import {Status} from '../../../../uiHelpers/UiHelpers';

class HtmlPageColumn extends Component {
  render() { 
    let isActive = this.props.htmlPage.isPublished? Status.ON : Status.OFF ;
    return (
      <div className="col-lg-3 col-md-4 col-sm-6 html-page-column">
        <div className="wrapper">
          <h6><StatusLight status={isActive} />{this.props.htmlPage.title}</h6>
          <h6>{this.props.htmlPage.lastEdited}</h6>
          <Link to={"/content/html-pages/" + this.props.htmlPage.pageId} className="btn btn-orange_border">Edit</Link>
            <div className="text-center html-column-category">
              <h6>{this.props.htmlPage.type}</h6>
            </div>
          </div>
      </div>
    )
  }
}
export default  HtmlPageColumn;