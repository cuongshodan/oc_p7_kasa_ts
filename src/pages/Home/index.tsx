import Card from "../../components/Card"
import "./Home.scss"
import data from "../../database/logements.json"


const Home = () => {
    return (
        <main className="pageWrapper">
            <div className="homeMain">
                <div className="heroSection">
                    <h2>Chez vous, partout et ailleurs</h2>
                </div>
                <section className="cardSection">
                    {data.map(({ title, cover, location }) => {
                        return (
                            <Card
                                title={title}
                                cover={cover}
                                location={location}
                            />
                        )
                    })}

                </section>
            </div>
        </main>
    )
}

export default Home