import { Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Store from "./Store"
import Cart from "./Cart"
import  ShoppingCartProvider  from "../context/ShoppingCartContext"

function App() {
  return (
    <ShoppingCartProvider>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </ShoppingCartProvider>
  )
}

export default App
