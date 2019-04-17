import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class HomePage extends Component {
    render(){
        return(
            <div className="container index-page">

                <div className="row content-section">
                    <div className="col-sm-12">

                        <div className="row justify-content-center">
                            <h5>HTML Pages</h5>
                        </div>

                        <div className="row justify-content-center">
                            <Link to={"/content/html-pages/"} className="btn btn-orange_border btn-auto-width">View & Edit</Link>
                        </div>

                    </div>
                </div>

                <div className="row content-section">
                    <div className="col-sm-12">

                        <div className="row justify-content-center">
                            <h5>News Section</h5>
                        </div>

                        <div className="row justify-content-center">
                            <Link to={"/content/news/"} className="btn btn-orange_border btn-auto-width">View & Edit</Link>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default HomePage;