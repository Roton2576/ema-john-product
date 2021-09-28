import React from 'react'
const Cart = (props) => {
     const {cart} = props;

     let total = 0;
     for(const product of cart) {
          total = total + product.price;
     }

     let shipping = total > 0 ? 15 : 0;
     let taxFee = (total + shipping) / 100 * 10;
     let grandTotal = total  + shipping + taxFee;

     return (
          <div>
               <h5 className="text-center mt-3 fw-bold"> Order Summery </h5>
               <h5 className="text-center mt-3"> items order: {cart.length} </h5>
               <p> items price: {total.toFixed(2)} </p>
               <p> shipping & handling: {shipping} </p>
               <p> total before tax: {taxFee.toFixed(2)} </p>
               <h5 className="text-danger"> Order Total: {grandTotal.toFixed(2)} </h5>
               <button className="btn btn-warning ps-5 pe-5 ms-5 mt-3"> Review Your Order </button>
          </div>
     )
}

export default Cart;