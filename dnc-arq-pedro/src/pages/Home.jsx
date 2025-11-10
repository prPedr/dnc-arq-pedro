import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Footer from "../components/Footer/Footer"

function Home() {
    return (
        <>
            <Header/>
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle="primary" arrow>Ola</Button>
            <Banner title="Home" image="about.svg"/>
            <Footer/>
        </>
    )
}

export default Home