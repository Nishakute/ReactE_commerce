// useEffect example

import React,{useState,useEffect} from "react";
import './fetch.css';

function Fetchproduct() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=5`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div>Show Products</div>
      <div className="product-grid ">
        {data.map((elmt) => (
          <div className="product-card">
            <img src={elmt.image} />
            <h2>{elmt.title}</h2>
            <p className="price">{elmt.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Fetchproduct;
