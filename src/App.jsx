import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Services from "./components/Services";

const App = () => {
  const [products, setProducts] = useState([]);

  const getproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .get(api)
      .then((response) => {
        console.log(response);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
  };

  const addproducts = () => {
    const api = "https://fakestoreapi.com/products";
    axios
      .post(api, {
        title: "test product",
        price: 13.5,
        description: "lorem ipsum set",
        image: "https://i.pravatar.cc",
        category: "electronic",
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getproducts();
  }, []);

  return (
    <Router>
      <div className="bg-zinc-200 h-screen w-full">
        <nav>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
        </nav>
        <button className="px-3 py-1 bg-red-300 m-2" onClick={getproducts}>
          Get Products
        </button>
        <button className="px-3 py-1 bg-red-300 m-2" onClick={addproducts}>
          Add Products
        </button>
        <hr className="my-10" />
        <ul>
          {products.length > 0 ? (
            products.map((product) => (
              <li className="px-3 py-1 bg-red-300 m-2 w-1/2" key={product.id}>
                {product.title}
              </li>
            ))
          ) : (
            <h1>Loading.....</h1>
          )}
        </ul>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
