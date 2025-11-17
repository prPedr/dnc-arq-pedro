import { useContext, useState, useEffect } from "react"

// CSS
import "./ProjectsList.css"

// ASSETS
import BotaoLikeVazio from "../../assets/like-vazio.svg"
import BotaoLikeCurtiu from "../../assets/like-curtiu.svg"

// UTILS
import { getApiData } from "../../services/apiServices"

// CONTEXT
import { AppContext } from "../../contexts/AppContext.jsx"

function ProjectsList() {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects')
                setProjects(projectsResponse)
            } catch {
                setProjects([])
            }
        }

        fetchData()
    }, [])

    const appContext = useContext(AppContext)

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>
                    {appContext.languages[appContext.language].projects.subtitle}
                </p>
            </div>
            <div className="projects-grid">
                {
                    projects ?
                        projects.map((project) => (
                            <div className="projects-cards d-flex jc-center al-center fd-column" key={project.id}>
                                <div className="thumb tertiary-background" style={{ backgroundImage: `url(${project.thumb})`}}></div>
                                <h3>{project.title}</h3>
                                <p>{project.subtitle}</p>
                                <img src={BotaoLikeVazio} alt="Botão de gostei do projeto" height="20px" />
                            </div>
                        ))
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectsList