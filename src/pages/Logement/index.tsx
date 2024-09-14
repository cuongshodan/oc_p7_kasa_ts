import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import Slider from "react-slick"; // Import react-slick for the carousel
import data from "../../database/logements.json";

const Logement = () => {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);

    if (!logement) {
        // Redirect to a non-existent route to trigger the 404 page
        return <Navigate to="/not-found" replace />;
    }

    // Carousel settings for react-slick
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
    };

    return (
        <div className="pageWrapper">
            <div className="homeMain">
                <div className="heroCarousel">
                    <Slider {...settings}>
                        {logement.pictures.map((picture, index) => (
                            <div key={index}>
                                <img src={picture} alt={`Slide ${index + 1}`} className="carouselImage" />
                            </div>
                        ))}
                    </Slider>
                </div>
                <h2>{logement.title}</h2>
                <p>{logement.location}</p>
            </div>
        </div>
    );
};

export default Logement;