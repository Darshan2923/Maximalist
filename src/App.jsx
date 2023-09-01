import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route, json } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'
import All from './components/shopping_sections/All'
import Mens from './components/shopping_sections/Mens'
import Womens from './components/shopping_sections/Womens'
import Electronics from './components/shopping_sections/Electronics'
import Jewellery from './components/shopping_sections/Jewellery'
import SkinCare from './components/shopping_sections/SkinCare'
import { CartContext } from './pages/ProductPage'

function App() {

  const [cartItem, setCartItem] = useState([]);

  const addCart = (item) => {
    setCartItem([...cartItem, item]);
  };

  //localStorage
  useEffect(() => {
    const json = localStorage.getItem("cartItem");
    const savedCart = JSON.parse(json);
  }, []);

  useEffect(() => {
    const json = JSON.stringify(cartItem);
    localStorage.setItem('cartItem', json);
  }, [cartItem]);

  return (
    <>
      <CartContext.Provider value={{ cartItem, addCart, setCartItem }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="categories" element={<Categories />}>
            <Route path="all" element={<All />} />
            <Route path="mens" element={<Mens />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="jewellery" element={<Jewellery />} />
            <Route path="womens" element={<Womens />} />
            <Route path="skin-care" element={<SkinCare />} />
          </Route>
          <Route path="categories/product/:id" element={<ProductPage />} />
        </Routes>
      </CartContext.Provider>
    </>
  )
}

export default App
