import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

// PAGINAS
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contatcts from "./pages/Contact"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/projecs" element={<Projects/>}></Route>
        <Route path="/contacts" element={<Contatcts/>}></Route>
      </Routes>
    </Router>
  )
}

export default App