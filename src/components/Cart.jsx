import React from 'react'
import close from '../assets/close.png'

function Cart({ cartClose }) {
  return (
    <>

      <div id="cartsection">
       
          <div className="heading">
            <h1>Your Cart</h1>
            <img src={close} alt="" onClick={cartClose} />
          </div>
          <div className="cartitemcontainer">

          </div>
          <div className="footer">
            <div className="subtotal">
              <h2>SUB TOTAL:</h2>
              <p>4000$</p>
            </div>
            <div className="checkout">
              <button>CHECK OUT</button>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default Cart