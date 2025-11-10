// CSS
import "./Button.css"

// ASSETS
import setaBrancaDireita from "../../assets/white-arrow.svg"

// NAO USADOS: loading

function Button({ arrow, buttonStyle, children, ...props }) {
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={setaBrancaDireita}/>}
        </button>
    )
}

export default Button