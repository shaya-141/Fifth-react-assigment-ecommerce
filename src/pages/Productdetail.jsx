import {React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function Productdetail() {

    const {id} = useParams()
    const [productdetail, setproductdetail] = useState([])
    const [desc, setdesc] = useState('')
    
    useEffect(()=>{
          fetch(`https://fakestoreapi.com/products/${id}`)
          .then((res)=> res.json())
          .then((data)=> setproductdetail(data))  
          
    },[id])
    
    console.log(productdetail);
    
  return (
    <>
    
    <div id="productdetail">
        <div className="detailimg">
            <img src={productdetail.image} alt="" />
        </div>
        <div className="detailtext">
            <h1>{productdetail.title}</h1>
            <p>{productdetail.description}</p>
            <h3>Price : {productdetail.price}$</h3>
            <button>Add Cart</button>
        </div>
    </div>
    
    </>
  )
}

export default Productdetail