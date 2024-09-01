import React from 'react'
import { Link } from 'react-router-dom'
import cart from '../assets/bag.png'
import Cart from './Cart'
import { useState } from 'react'

function Navbar() {

    const [showCart, setshowCart] = useState(false)

    const cartDisplayHandle = ()=>{
      setshowCart(true)
    }
    const closeCart = () =>{
      setshowCart(false)
    }
  return (
    <>
    
        <nav>
          <Link to={'/'}>
            <h1>ECOMMERCE</h1>
          </Link>
            
            <div className="links">
                <Link to={'/'}>Home</Link>
                <Link to={'/Contacts'}>Contacts</Link>
                <Link to={'/Products'}>Products</Link>
                <img src={cart} alt="" height={"25px"} onClick={cartDisplayHandle} />
                <Link to={'/Login'}><button><a href="">Login</a></button></Link>
            </div>
        </nav>

      {showCart &&  <Cart cartClose = {closeCart}></Cart>}


    
    </>
  )
}

export default Navbar