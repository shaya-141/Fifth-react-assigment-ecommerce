import React from 'react'
import Featurecard from './Featurecard'
import shipimg from '../assets/free-shipping.png'
import qualityimg from '../assets/high-quality.png'
import returnimg from '../assets/return.png'
function Feature() {
  return (
    <>
        <h1 className='featureheading'>Features</h1>  
        <section id="feature">
            <Featurecard img={shipimg} head={'Free Shipping'} ></Featurecard>
            <Featurecard img={qualityimg} head={"High Quality"} ></Featurecard>
            <Featurecard img={returnimg} head={'Return'}></Featurecard>
        </section>
    </>
  )
}

export default Feature