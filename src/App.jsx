import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import ProductPage from './pages/ProductPage'
import All from './components/shopping_sections/All'
import Mens from './components/shopping_sections/Mens'
import Womens from './components/shopping_sections/Womens'
import Electronics from './components/shopping_sections/Electronics'
import Lamps from './components/shopping_sections/Lamps'
import SkinCare from './components/shopping_sections/SkinCare'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="categories" element={<Categories />}>
          <Route path="all" element={<All />} />
          <Route path="mens" element={<Mens />} />
          <Route path="electronics" element={<Electronics />} />
          <Route path="lamps" element={<Lamps />} />
          <Route path="womens" element={<Womens />} />
          <Route path="skin-care" element={<SkinCare />} />
        </Route>
        <Route path="categories/product/:id" element={<ProductPage />} />
      </Routes>

    </>
  )
}

export default App
