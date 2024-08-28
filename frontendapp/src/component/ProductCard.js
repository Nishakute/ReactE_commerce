import React from "react";
import {Link} from 'react-router-dom';

const ProductCard=({elmt})=>{
    return(
        <div className='col-md-6 col-lg-3 my-2'>
           <Link to={'./fetch-product/${elmt.id'} state={{elmt}}>
             <div className="product-card">
            <img src={elmt.image} alt={''}/>
            <h2>{elmt.title}</h2>
            <p className="price">${elmt.price}</p>
            <button className="btn btn-danger"> Add To Cart</button>
           More Info
          </div>
          </Link>
        </div>

    )
}

export default ProductCard;