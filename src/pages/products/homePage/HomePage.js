import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class HomePage extends Component {
	render() {
		return (
			<div className="container index-page">

                <div className="row content-section">
                    <div className="col-sm-12">

                        <div className="row justify-content-center">
                            <h5>Products List</h5>
                        </div>

                        <div className="row justify-content-center">
                            <Link to={"/products/products-list/"} className="btn btn-orange_border btn-auto-width">View & Edit</Link>
                        </div>

                    </div>
                </div>

                <div className="row content-section">
                    <div className="col-sm-12">

                        <div className="row justify-content-center">
                            <h5>Pending Products List</h5>
                        </div>

                        <div className="row justify-content-center">
                            <Link to={"/products/pending-products-list/"} className="btn btn-orange_border btn-auto-width">View & Edit</Link>
                        </div>

                    </div>
                </div>

            </div>
		)
	}
}

export default HomePage;
