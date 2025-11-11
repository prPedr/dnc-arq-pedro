// COMPONENTS
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ContactForm from "../components/ContactForm/ContactForm"
import Footer from "../components/Footer/Footer"

function Contatcts() {
    return (
        <>
            <Header/>
            <Banner title="Contact Us" image="contact.svg"/>
            <div className="container">
                <ContactForm/>
            </div>
            <Footer/>
        </>
    )
}

export default Contatcts