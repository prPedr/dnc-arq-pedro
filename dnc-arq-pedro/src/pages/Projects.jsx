// ASSETS
import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ProjectsList from "../components/ProjectsList/ProjectsList"
import Footer from "../components/Footer/Footer"



function Projects() {
    return (
        <>
            <Header/>
            <Banner title="Projects" image="projects.svg"/>
            <div className="container">
                <ProjectsList/>
            </div>
            <Footer/>
        </>
    )
}

export default Projects