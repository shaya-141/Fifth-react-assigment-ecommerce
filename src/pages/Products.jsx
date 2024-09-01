import React, { useEffect, useState } from 'react'
import img from '../assets/shirt.png'
import { Link } from 'react-router-dom'
function Products() {
    const [Products, setProducts] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then((res) => res.json())
            .then((data) => setProducts(data))

    }, [])

    console.log("Products Products", Products);


    return (
        <>
            <h1 className='producthead'>Products</h1>
            <section id="products">
                {
                    Products.map((product,index) => {
                        return (
                            <Link to={`/Product-Detail/${product.id}`} key={product.id}>
                            <div className="productcard" key={index}>
                                <div className="img">

                                    <img src={product.image} alt="" />
                                </div>
                                <div className="text">

                                    <h1>{product.title.slice(0,35)}</h1>
                                    <h3>Price : {product.price}$</h3>
                                    {/* <button>Add Cart</button> */}
                                </div>
                            </div>
                            </Link>
                        )
                    })
                }
            </section>

        </>
    )
}

export default Products