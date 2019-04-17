import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import ServerErrorImage from './error-2.jpg';

class NotFound extends Component {
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
                            <h1>Page Not Found</h1>
                            <h6>Something appears to be missing</h6>
                            <Link to="/" className="btn btn-lg btn-success">Take me home</Link>
                        </div>
                    </div>
                </div> 
            </div> 
         );
    }
}
export default NotFound;