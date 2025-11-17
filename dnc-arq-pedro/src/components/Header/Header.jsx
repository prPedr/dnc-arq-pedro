import { useContext, useState } from "react"
import { Link } from "react-router-dom"

// CSS
import "./Header.css"

// ASSETS
import LogoDNC from "../../assets/dnc-logo.svg"

// COMPONENTS
import Button from "../Button/Button"

// CONTEXT
import { AppContext } from "../../contexts/AppContext.jsx"

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
    const appContext = useContext(AppContext)

    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={LogoDNC} alt="Logo da DNC" /></Link>
                    <div className="menu-mobile">
                        <Button buttonStyle="secondary" onClick={toggleMenu}>
                            Menu
                        </Button>
                    </div>
                    <nav className={`${isOpen ? "open" : ""}`}>
                        <Button buttonStyle="unstyled" className="menu-mobile close-button" onClick={toggleMenu}>
                            X
                        </Button>
                        <ul className="d-flex">
                            <li><Link to="/">{appContext.languages[appContext.language].menu.home}</Link></li>
                            <li><Link to="/about">{appContext.languages[appContext.language].menu.about}</Link></li>
                            <li><Link to="/projects">{appContext.languages[appContext.language].menu.projects}</Link></li>
                            <li><Link to="/contact">{appContext.languages[appContext.language].menu.contact}</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header