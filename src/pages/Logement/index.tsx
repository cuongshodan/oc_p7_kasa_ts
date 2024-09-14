import "./Logement.scss"
import { useParams } from "react-router-dom"
import data from "../../database/logements.json"

const Logement = () => {
    const { id } = useParams()
    const logement = data.find(item => item.id === id)

    if (!logement) {
        return <div>Logement not found</div>
    }

    return (
        <div>
            <div>Hero</div>
            <h2>{logement.title}</h2>
            <p>{logement.location}</p>
        </div>
    )
}

export default Logement
