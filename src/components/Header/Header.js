import React from 'react'
import Logo from '../../images/logo.png'
import './Header.css'

const Header = (props) => {
     return (
          <div>
               <div className="ema-logoHare">
                    <img src={Logo} alt="ema-john" />
               </div>
               
               <nav class="navbar navbar-expand-lg navbar-dark bg-dark pt-4 pb-4">
                    <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                         <li class="nav-item">
                              <a class="nav-link text-white" aria-current="page" href="#">Shop</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link text-white" href="#">Order Review</a>
                         </li>
                         <li class="nav-item">
                              <a class="nav-link text-white me-5" href="#"> Manage Inventory Hare </a>
                         </li>
                         
                         </ul>
                         <form class="d-flex flex-fill ms-5 ps-5">
                         <input onChange={props.inputButton} class="form-control me-2" type="search" placeholder="Type hare to Search" aria-label="Search"/>
                         <button class="btn btn-success" type="submit">Search</button>
                         </form>
                    </div>
                    </div>
               </nav>

          </div>
     )
}

export default Header;