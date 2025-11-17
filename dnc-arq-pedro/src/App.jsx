import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext } from "react"

// PAGINAS
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contatct from "./pages/Contact"
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner"

// UTILS
import ScrollTop from "./utils/ScrollTop"

// CONTEXT
import { AppContext } from "./contexts/AppContext.jsx"

function App() {
  const appContext = useContext(AppContext)

  if (appContext.loading) {
    return <LoadingSpinner/>
  }

  return (
    <Router>
      <ScrollTop/>
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