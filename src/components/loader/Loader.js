import React, { Component } from 'react'

class Loader extends Component {

  render() {
 
      const loaderStyle = {
          width: this.props.width,
          height: this.props.height,
          top: this.props.top,
          right: this.props.right
      }

        return (
            <div className="loading" style={loaderStyle} ></div>
        );
    }
}

export default Loader;