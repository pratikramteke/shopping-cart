import { Route, Routes } from "react-router-dom"
import Nav from "./Nav"
import Home from "./Home"
import Store from "./Store"
import About from "./About"

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
