import React, { Component } from 'react'
import ServerErrorImage from './error-1.jpg';
class ServerError extends Component {
    render() {
        const errorBackground = {
            backgroundImage: 'url(' + ServerErrorImage + ')',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            height: '100vh'
        }
        return(
            <div className="container-fluid app-error" style={errorBackground}>
                <div className="row">
                    <div className="col-sm-12">
                        <div className="error-message">
                            <h1>Server Error</h1>
                            <h6>Something appears to be missing</h6>
                            <button onClick={this.props.onClearError} className="btn btn-lg btn-success">Go Back home</button>
                        </div>
                    </div>
                </div> 
            </div>
         );
    }
}
export default ServerError;