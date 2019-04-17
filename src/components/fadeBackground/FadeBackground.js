import React, { Component } from 'react'

class FadeBackground extends Component {
  
  render() {
    const  style = {
     backgroundColor: this.props.color
    }

    return (
      <div className="fade-out-background" style={style}>
        
      </div>
    )
  }
}
export default FadeBackground;
