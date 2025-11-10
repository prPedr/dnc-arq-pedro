import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
// import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

function Home() {
    return (
        <>
            <Header/>
            <div className="container">
                <Hero/>
                <ProjectsList/>
            </div>
            {/* <Banner title="Home" image="about.svg"/> */}
            <Footer/>
        </>
    )
}

export default Home