import React from "react"
import Navbar from "./compoent/Navbar"
import Home from "./compoent/Home"
import About from "./compoent/About"
import ListProducts from "./compoent/Labs/ListProducts"
import ProductDisplay from "./compoent/Labs/ProductDisplay"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar d/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path='/labs' element={<ListProducts />}>
        <Route path=":id" element={<ProductDisplay />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App
