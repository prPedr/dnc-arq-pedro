// CSS
import "./ProjectsList.css"

// ASSETS
import BotaoLikeVazio from "../../assets/like-vazio.svg"
import BotaoLikeCurtiu from "../../assets/like-curtiu.svg"

function ProjectsList() {
    return (
        <div className="project-section">
            <div className="projects-hero">
                <h2>Follow Our Projects</h2>
                <p>
                    It is a long established fact that a reader will be distracted 
                    by the of readable content of page  lookings at its layouts 
                    points.
                </p>
            </div>
            <div className="projects-grid">
                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeVazio} alt="Botao de gostei do projeto" height="20px" />
                </div>

                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeVazio} alt="Botao de gostei do projeto" height="20px" />
                </div>

                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeCurtiu} alt="Botao de gostei do projeto" height="20px" />
                </div>

                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeVazio} alt="Botao de gostei do projeto" height="20px" />
                </div>

                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeVazio} alt="Botao de gostei do projeto" height="20px" />
                </div>

                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeVazio} alt="Botao de gostei do projeto" height="20px" />
                </div>

                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeCurtiu} alt="Botao de gostei do projeto" height="20px" />
                </div>

                <div className="projects-cards d-flex jc-center al-center fd-column">
                    <div className="thumb tertiary-background"></div>
                    <h3>João Silva</h3>
                    <p>Belo Horizonte, Brasil</p>    
                    <img src={BotaoLikeVazio} alt="Botao de gostei do projeto" height="20px" />
                </div>
            </div>
        </div>
    )
}

export default ProjectsList