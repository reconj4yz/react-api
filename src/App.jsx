import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [products, setProducts] = useState([])
  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api) 
      .then((products) => {
        console.log(products)
        setProducts(products.data)
      }
      )
      .catch((err) => console.log(err));
      
  };
  const addproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api,{
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  console.log(products)
  return (
    <div className="bg-zinc-200 h-screen w-full">
      <button className="px-3 py-1 bg-red-300 m-2" onClick={getproducts}>
        Get Products
      </button>
      <button className="px-3 py-1 bg-red-300 m-2" onClick={addproducts}>
        Add Products
      </button>
      <hr className="my-10"/>
      <ul>
        {products.length > 0 ?  products.map(product => <li className="px-3 py-1 bg-red-300 m-2 w-1/2">{product.title}</li>): <h1>Loading.....</h1>}
        
      </ul>
    </div>
  );
};

export default App;
