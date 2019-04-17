import React, { Component } from 'react'

class ProductsListItem extends Component {
  render() {
    return (
      <ul className="product-list-item">
      
        <li className="sku">
          <p>
            {this.props.sku}
          </p>
        </li>

        <li className="title">
          <p>
            {this.props.title}
          </p>
        </li>

        <li className="price">
          <p>
            £{this.props.price.toFixed(2)}
          </p>
        </li>

        <li className="in-stock">
          <p>
            <span className="mobile-label">
              In Stock: 
            </span>
            {this.props.quantityInStock}
          </p>
        </li> 

        <li className="on-order">
          <p>
            <span className="mobile-label">
              On Order: 
            </span> 
            {this.props.quantityOnOrder}
          </p>
        </li> 

        <li className="allocated">
          <p>
            <span className="mobile-label">
              Allocated: 
            </span> 
            {this.props.quantityAllocated}
          </p>
        </li>

      </ul>
    )
  }
}
export default ProductsListItem;