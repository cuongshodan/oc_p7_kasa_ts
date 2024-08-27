import "./Card.scss"


interface CardProps {
    title: string;
    cover: string;
    location: string;
}


const Card = ({ title, cover, location }: CardProps) => {
    return (
        <div className="card">
            <img src={cover} alt={title} />
            <div className="card_Title">{title}</div>
            <div className="card_Location">{location}</div>
        </div>
    )
}

export default Card