import React, { Component } from 'react'

const Status = {
    OFF: "OFF",
    WAITING: "WAITING",
    ON: 'ON'

}

class StatusLight extends Component {
  render() {
    let styles;

    if(this.props.size){
        styles = {
            width: this.props.size,
            height: this.props.size
        }
    } else{
         styles = null;
    }
      let classNames= this.props.status === Status.ON ? "status active" : this.props.status === Status.OFF ? "status disabled" : "status scheduled";
    return (
        <span className={classNames} style={ styles !== null ? styles : null }></span>
    )
  }
}
export default StatusLight;