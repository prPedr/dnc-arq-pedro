// COMPONENTS
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import AboutText from "../components/AboutText/AboutText"
import Footer from "../components/Footer/Footer"

function About() {
    return (
        <>
            <Header/>
            <Banner title="About Us" image="about.svg"/>
            <div className="container">
                <AboutText/>
            </div>
            <Footer/>
        </>
    )
}

export default About