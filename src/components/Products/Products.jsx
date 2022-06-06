import React, { useEffect, useState } from "react";
import Product from "./Product/Product";
import "./Products.css";
const Products = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      let r = await fetch(`http://localhost:8080/products`);
      let d = await r.json();
      setData(d);
      console.log(data);
    };
    fetchdata();
  }, []);
  return (
    <div>
      <h1>Products</h1>
      <div className="prod">
        <Product data={data} />
      </div>
    </div>
  );
};

export default Products;
