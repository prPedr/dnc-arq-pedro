import { useContext } from "react"

// COMPONENTS
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"
import Footer from "../components/Footer/Footer"

// CONTEXT
import { AppContext } from "../contexts/AppContext.jsx"

function Contatcts() {
    const appContext = useContext(AppContext)

    return (
        <>
            <Header/>
            <Banner title={appContext.languages[appContext.language].menu.contact} image="contact.svg"/>
            <div className="container">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}

export default Contatcts