import {React,useState , useEffect } from 'react'
import img1 from '../assets/shirt.png'
import img2 from '../assets/circle.png'
import { Link } from 'react-router-dom'
import Feature from '../components/Feature'
function Home() {

  const [trendingProduct, settrendingProduct] = useState([])

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products?limit=8')
    .then((res)=> res.json())
    .then((data)=> settrendingProduct(data))
  },[])
  console.log(trendingProduct);
  

  return (
    <>
       
       <section id='landing'>
          <div id="text">
            <h2>Your One-Stop Shop for</h2>
            <h1>Everything</h1>
            <div className='para'>

            <p>Quality Products, Unbeatable Prices &</p>
            <p>Unlock the Best Deals Online.</p>
            </div>
            <Link to={'/Products'}><button>Shop Now</button></Link>
          </div>
          <div id="img">
            <img src={img1} alt=""  className='shirtimage'/>
            
          </div>
       </section>
       <Feature></Feature>
        
        <h1 className='trendtitle'>Trendings</h1>
        <div id="trendingsproduct">
        {
                    trendingProduct.map((product,index) => {
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
        </div>
    


    </>
  )
}

export default Home