import Card from "../../components/Card"
import "./Home.scss"
import data from "../../database/logements.json"
import image1 from "../../assets/image1.png"
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <main className="pageWrapper">
            <div className="homeMain">
                <div className="heroSection">
                    <img src={image1} alt="hero" />
                    <div className="darkLayer"></div>
                    <h2>Chez vous,
                        <span className="mobile-break">
                            <br />
                        </span> partout et ailleurs
                    </h2>
                </div>
                <section className="cardSection">
                    {data.map(({ title, cover, id, location }) => {
                        return (
                            <Link to={`/logement/${id}`} key={id}>
                                <Card
                                    title={title}
                                    cover={cover}
                                    location={location}
                                />
                            </Link>
                        )
                    })}

                </section>
            </div>
        </main>
    )
}

export default Home