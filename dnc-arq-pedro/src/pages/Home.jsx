import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Button from "../components/Button/Button"

function Home() {
    return (
        <>
            <Header/>
            <h1>Home</h1>
            <p>Subtitle</p>
            <Button buttonStyle="primary" arrow>Ola</Button>
            <Button buttonStyle="secondary" arrow>Ola</Button>
            <Button buttonStyle="outline">Ola</Button>
            <Button buttonStyle="primary" disabled>Ola</Button>
            <Footer/>
        </>
    )
}

export default Home