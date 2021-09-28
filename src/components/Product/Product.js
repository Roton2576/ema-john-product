import React from 'react'
import './Product.css'

const Product = (props) => {
     const {name, seller, img, price, stock } = props.product;
     return (
          <div>
               <div className="productContainer">

               <div>
                    <img className="me-3" src={img} alt="Product Image" />
               </div>
               <div>
                    <h5> {name} </h5>
                    <p> by: {seller} </p>
                    <h5> Price: ${price} </h5>
                    <p> only {stock} left in stock - order soon </p>
                    <button onClick={() => props.handleButton(props.product)} className="btn btn-primary"> add product </button>
               </div>

               </div>

          </div>
     )
}

export default Product;