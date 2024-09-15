import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import Slider from "react-slick";
import { useState } from "react";
import data from "../../database/logements.json";

// Import your custom arrow icons
import leftArrowIcon from "../../assets/left-arrow.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";

// Custom Arrow Components
const CustomPrevArrow = (props: any) => {
    const { style, onClick } = props;
    return (
        <button
            className="custom-arrow custom-prev"
            style={{ ...style }}
            onClick={onClick}
            aria-label="Previous Slide"
        >
            <img src={leftArrowIcon} alt="Previous" />
        </button>
    );
};

const CustomNextArrow = (props: any) => {
    const { style, onClick } = props;
    return (
        <button
            className="custom-arrow custom-next"
            style={{ ...style }}
            onClick={onClick}
            aria-label="Next Slide"
        >
            <img src={rightArrowIcon} alt="Next" />
        </button>
    );
};

const Logement = () => {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    if (!logement) {
        // Redirect to a non-existent route to trigger the 404 page
        return <Navigate to="/not-found" replace />;
    }

    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    // Carousel settings for react-slick
    const settings = {
        dots: false, // Disable dots
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        arrows: true, // Enable arrows
        beforeChange: (oldIndex: number, newIndex: number) => {
            setCurrentSlide(newIndex);
        },
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className="pageWrapper">
            <div className="homeMain">
                <div className="heroCarousel">
                    <Slider {...settings}>
                        {logement.pictures.map((picture, index) => (
                            <div key={index} className="carouselSlide">
                                <img
                                    src={picture}
                                    alt={`Slide ${index + 1}`}
                                    className="carouselImage"
                                />
                                <div className="slideNumber">
                                    {`${currentSlide + 1}/${logement.pictures.length}`}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="appartementInfo">
                    <div>
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                        <p>{logement.tags[0]} {logement.tags[1]}</p>
                    </div>
                    <div>
                        <div className="appartementInfo__locataire">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} />
                        </div>
                        <div>ratings</div>
                    </div>
                </div>
                <div>
                    <div>Description</div>
                    <div>Equipements</div>
                </div>

            </div>
        </div>
    );
};

export default Logement;
