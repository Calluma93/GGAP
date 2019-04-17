import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navs extends Component {
  render() {
    return (
      <div className="navs">
        {
          this.props.page > 1 ?
            <span>
              <Link
                to={this.props.prev}
              >
                PREV
              </Link>
              <span> | </span>
            </span> :
            null
        }
        <Link
          to={this.props.next}
        >
          NEXT
        </Link>
        <br/>
        <p>Page {this.props.page}</p> 
      </div> 
    );
  }
}
export default Navs;