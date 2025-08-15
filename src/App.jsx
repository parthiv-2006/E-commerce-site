import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import ShoppingPage from "./components/ShoppingPage.jsx";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import ShoppingCart from "./components/ShoppingCart.jsx";

function App() {
  const [cartItems, setCartItems] = useState([])

  function addToCart(product, quantity) {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) => {
          if (item.id === product.id) {
            return {...item, quantity: item.quantity + quantity}
          }
          return item
        })
      }
      else {
        return [...prevItems, {...product, quantity}]
      }
    })
  }
  

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems}/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShoppingPage addToCart={addToCart}/>} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
