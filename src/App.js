import "./App.scss";
import React, { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

function App() {
  const [cart, setCart] = useState(() => {
    const cartProducts = localStorage.getItem("cart");
    if (cartProducts) {
      return JSON.parse(cartProducts);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function handleProductAdd(newProduct) {
    // check if item exists
    const existingProduct = cart.find((product) => product._id === newProduct._id);
    if (existingProduct) {
      // increase quantity
      const updatedCart = cart.map((product) => {
        if (product._id === newProduct._id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          };
        }
        return product;
      });
      setCart(updatedCart);
    } else {
      // product is new to the cart
      setCart([
        ...cart,
        {
          ...newProduct,
          quantity: 1,
        },
      ]);
    }
  }

  function handleProductDelete(id) {
    const updatedCart = cart.filter((product) => product._id !== id);
    setCart(updatedCart);
  }

  return (
    <div className="App">
      <Header cart={cart} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/shop" element={<Shop cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete} />}></Route>
        <Route path="/cart" element={<Cart cart={cart} />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
