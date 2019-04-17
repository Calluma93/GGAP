import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'


class Avatar extends Component {
  render() {
    return (
         <div className="col-sm-3">
         <FontAwesomeIcon size="3x" icon="user-circle" />
         </div>
    );
  }
}

export default Avatar;
