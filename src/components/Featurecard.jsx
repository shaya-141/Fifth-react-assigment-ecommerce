import React from 'react'

function Featurecard({head,img,text}) {
  return (
   <>
    <div className="feturecard">
        <img src={img} alt="" />
        <h2>{head}</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo incidunt dolorum. Dolorem  </p>
    </div>
   </>
  )
}

export default Featurecard