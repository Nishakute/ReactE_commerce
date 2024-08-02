// useEffect example

// import React,{useState,useEffect} from "react";
import './fetch.css';
import ProductCard from "./ProductCard";


function Fetchproduct({data}) {
 
  return (
    <>
      <div>Show Products</div>
      <div className="row mx-2">
        {data.map((elmt,index) => (
          <ProductCard key={index} elmt={elmt}/>
        ))}
      </div>
    </>
  );
}

export default Fetchproduct;
