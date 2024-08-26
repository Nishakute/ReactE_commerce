import React from 'react'
import {useLocation} from 'react-router-dom';



const productDetail = () => {
const location =useLocation();
const {elmt}=location.state;


  return (

    <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-6'>
                <img src={elmt.image} alt={elmt.title} className='img-fluid'/>
            </div>
            <div className='col-md-6'>
                <h2>{elmt.title}</h2>
                <p>{elmt.description}</p>
                <h3>${elmt.price}</h3>
                <button className='btn btn-primary'>Add to cart</button>
            </div>
        </div>
    </div>
  )
}

export default productDetail