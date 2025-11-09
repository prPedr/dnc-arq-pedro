import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

// PAGINAS
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contatct from "./pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contatct/>}></Route>
      </Routes>
    </Router>
  )
}

export default App