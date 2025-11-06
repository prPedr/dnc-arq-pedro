import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><h1>HOME</h1></>}></Route>
        <Route path="/about" element={<><h1>ABOUT</h1><Link to="/">Menu</Link></>}></Route>
        <Route path="/projects" element={<><h1>PROJECTS</h1><Link to="/">Menu</Link></>}></Route>
        <Route path="/contacts" element={<><h1>CONTACTS</h1><Link to="/">Menu</Link></>}></Route>
      </Routes>
    </Router>
  )
}

export default App