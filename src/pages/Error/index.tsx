import { Link } from "react-router-dom"
import "./Error.scss"

const Error = () => {
    return (
        <div className="errorContainer">
            <div id="errorNum">404</div>
            <div className="errorMsg">Oups! la page que vous demandez n'exist pas.</div>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error