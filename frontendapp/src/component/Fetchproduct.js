// useEffect example

import React,{useState,useEffect} from "react";
import './fetch.css';
import ProductCard from "./ProductCard";


function Fetchproduct() {
 
  return (
    <>
      <div>Show Products</div>
      <div className="row mx-2">
        {data.map((elmt) => (
          <ProductCard key={index} elmt={elmt}/>
  h
        ))}
      </div>
    </>
  );
}






export default Fetchproduct;
