import { Link } from "react-router-dom"

// CSS
import "./Header.css"

// ASSETS
import LogoDNC from "../../assets/dnc-logo.svg"

function Header() {
    return (
        <header>
            <div className="container">
                <div className="al-center d-flex jc-space-between">
                    <Link to="/"><img src={LogoDNC} alt="Logo da DNC" /></Link>

                    <nav>
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