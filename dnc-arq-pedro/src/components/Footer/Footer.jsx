import { Link } from "react-router-dom"

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

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="d-flex jc-space-between">
                    <div className="footer-col1">
                        <img src={LogoDNC} alt="Logo DNC" />
                        <p className="grey-1-color">
                            A escola que prepara você para as profissões em alta no mercado de trabalho.
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
                </div>
            </div>
        </footer>
    )
}

export default Footer