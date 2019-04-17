import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {Alert} from 'reactstrap';
import HtmlPageColumn from '../htmlPageColumn/HtmlPageColumn';
import Loader from '../../../../components/loader/Loader';

class HtmlPagesList extends Component {

  componentDidMount(){
    this.props.onGetHtmlPages();
  }

  render() {
    let htmlPagesList;
      
    if(this.props.isGettingHtmlPages){
      htmlPagesList = <Loader height="60px" width="60px" top="60px" right="50%"  />
    }else if (this.props.htmlPages != null){
      htmlPagesList = this.props.htmlPages.map((htmlPage, index) => (
        <HtmlPageColumn key={index} htmlPage={htmlPage}/>
      ))
    } else {
      htmlPagesList = "No Html Pages found";
    }
    return ( 
      <div className="html-pages">

        <div className="row">
          <div className="col-sm-12">
            <h4 className="page-main-heading">
              Html Content Pages
            </h4>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <Alert color="success" isOpen={this.props.createHtmlPageSuccessful}>
              Html page Created
            </Alert>
            <Alert color="warning" isOpen={this.props.deleteHtmlPageSuccessful}>
              Html page Deleted
            </Alert>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 html-page-column">
            <div className="wrapper">
              <h6><span className="status active"></span>New Page</h6>
              <Link to="/content/html-pages/new/" className="btn btn-orange_border">Add New</Link>
            </div>
          </div>
          {htmlPagesList}
        </div>
        
      </div>
    )
  }
}

export default HtmlPagesList;