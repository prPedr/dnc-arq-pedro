import { Link } from "react-router-dom"
import { useContext } from "react"

// CSS
import "./Footer.css"

// ASSETS
import LogoDNC from "../../assets/dnc-logo.svg"
import FacebookIcon from "../../assets/facebook-icon.svg"
import TwitterIcon from "../../assets/twitter-icon.svg"
import LinkedinIcon from "../../assets/linkedin-icon.svg"
import InstagramIcon from "../../assets/instagram-icon.svg"
import BrazilIcon from "../../assets/brazil-icon.svg"
import UsaIcon from "../../assets/usa-icon.svg"

// COMPONENT
import Button from "../Button/Button"

// CONTEXT
import { AppContext } from "../../contexts/AppContext.jsx"

function Footer() {
    const appContext = useContext(AppContext)
    const changeLanguage = (country) => {
        appContext.setLanguage(country)
    }
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between mobile-fd-column">
                    <div className="footer-col1">
                        <img className="footer-logo" src={LogoDNC} alt="Logo DNC" />
                        <p className="grey-1-color">
                            {appContext.languages && appContext.languages[appContext.language].general.footerLogoText}
                        </p>
                        <div className="d-flex social-links">
                            <a href="https://google.com" target="_blank">
                                <img src={FacebookIcon} alt="Facebook DNC" />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={TwitterIcon} alt="Twitter DNC" />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={LinkedinIcon} alt="Linkedin DNC" />
                            </a>
                            <a href="https://google.com" target="_blank">
                                <img src={InstagramIcon} alt="Instagram DNC" />
                            </a>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div className="footer-col2">
                            <h3>
                                {appContext.languages[appContext.language].general.pages}
                            </h3>
                            <ul className="d-flex fd-column">
                                <li><Link to="/">
                                    {appContext.languages[appContext.language].menu.home}
                                </Link></li>
                                <li><Link to="/about">
                                    {appContext.languages[appContext.language].menu.about}
                                </Link></li>
                                <li><Link to="/projects">
                                    {appContext.languages[appContext.language].menu.projects}
                                </Link></li>
                                <li><Link to="/contact">
                                    {appContext.languages[appContext.language].menu.contact}
                                </Link></li>
                            </ul>
                        </div>
                        <div className="footer-col2">
                            <h3>
                                {appContext.languages[appContext.language].general.contact}
                            </h3>
                            <p className="grey-1-color" >
                                R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 
                            </p>
                            <p className="grey-1-color">
                                suporte@escoladnc.com.br
                            </p>
                            <p className="grey-1-color">
                                (19) 99187-4342
                            </p>
                        </div>
                    </div>
                </div>
                <div className="d-flex jc-space-between footer-copy">
                    <p className="grey-1-color">
                        Copyright © DNC - 2024
                    </p>
                    <div className="langs-area d-flex">
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage("br")}>
                            <img src={BrazilIcon} alt="Idioma da pagina em Portgues Brazil" height="29px" />
                        </Button>
                        <Button buttonStyle="unstyled" onClick={() => changeLanguage("en")}> 
                            <img src={UsaIcon} alt="Idioma da pagina em Ingles USA" height="29px" />
                        </Button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer