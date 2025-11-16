import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useContext } from "react"

// PAGINAS
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contatct from "./pages/Contact" // <-- Verifique se o nome desse arquivo não é "Contact"

// UTILS
import ScrollTop from "./utils/ScrollTop"

// CONTEXT
import { AppContext } from "./contexts/AppContext.jsx" // <-- 1. IMPORTE O CONTEXTO

function App() {
  // 2. Use um nome de variável diferente (ex: appContext)
  const appContext = useContext(AppContext)

  // 3. Use a nova variável para checar o loading
  if (appContext.loading) {
    return "Loading..."
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