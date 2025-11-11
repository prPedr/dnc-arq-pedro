import { useState } from "react"
import { Link } from "react-router-dom"

// CSS
import "./Header.css"

// ASSETS
import LogoDNC from "../../assets/dnc-logo.svg"

// COMPONENTS
import Button from "../Button/Button"

function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    
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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header