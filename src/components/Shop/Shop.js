import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Product from '../Product/Product';

const Shop = () => {

     const [products, setProducts] = useState([])
     const [cart, setCart] = useState([])
     const [display, setDisplay] = useState([])

     useEffect(() => {
          fetch('./products.JSON')
          .then(res => res.json())
          .then(data => { setProducts(data); setDisplay(data)})
     }, [])

     const handleButton = (pathanoProduct) => {
          const newCart = [...cart, pathanoProduct];
          setCart(newCart)
     }

     const inputButton = (even) => {
          const searchText = even.target.value;
          const matchProduct = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
          setDisplay(matchProduct)
     }

     return (
          <div>
               <Header 
               inputButton={inputButton}
               />
               <div className="row">
                    <div className="col-md-9">
                         {
                              display.map( product => <Product
                                   
                                   product={product}
                                   handleButton={handleButton}
                              />)
                         }

                    </div>
                    <div className="col-md-3">
                         <Cart 
                         cart={cart}
                         />
                    </div>
               </div>
          </div>
     )
}

export default Shop;