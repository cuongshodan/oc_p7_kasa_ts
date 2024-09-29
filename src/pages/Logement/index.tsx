import { useState } from 'react';
import "./Logement.scss";
import { useParams, Navigate } from "react-router-dom";
import data from "../../database/logements.json";

// Import your custom arrow icons
import leftArrowIcon from "../../assets/left-arrow.svg";
import rightArrowIcon from "../../assets/right-arrow.svg";

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as filledStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as emptyStar } from "@fortawesome/free-regular-svg-icons";

// Import CollapsibleSection component
import CollapsibleSection from '../../components/CollapsibleSection/CollapsibleSection'; // Adjust the path if necessary

const Logement = () => {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    if (!logement) {
        // Redirect to a non-existent route to trigger the 404 page
        return <Navigate to="/not-found" replace />;
    }

    // State to keep track of the current slide index
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % logement.pictures.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + logement.pictures.length) % logement.pictures.length);
    };

    // Convert rating to a number
    const rating = Number(logement.rating);

    // Create an array of 5 elements for the stars
    const maxRating = 5;
    const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

    return (
        <div className=" logementWrapper">
            <div className="homeMain">
                <div className="heroCarousel">
                    <div className="carouselSlide">
                        <img
                            src={logement.pictures[currentSlide]}
                            alt={`Slide ${currentSlide + 1}`}
                            className="carouselImage"
                        />
                        {logement.pictures.length > 1 && (
                            <div className="slideNumber">
                                {`${currentSlide + 1}/${logement.pictures.length}`}
                            </div>
                        )}
                        {logement.pictures.length > 1 && (
                            <>
                                <button
                                    className="custom-arrow custom-prev"
                                    onClick={handlePrev}
                                    aria-label="Previous Slide"
                                >
                                    <img src={leftArrowIcon} alt="Previous" />
                                </button>
                                <button
                                    className="custom-arrow custom-next"
                                    onClick={handleNext}
                                    aria-label="Next Slide"
                                >
                                    <img src={rightArrowIcon} alt="Next" />
                                </button>
                            </>
                        )}
                    </div>
                </div>
                <div className="appartementInfo">
                    <div className="appartementInfo__details">
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                        <div className="tags">
                            {logement.tags.map((tag, index) => (
                                <span key={index} className="tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="appartementInfo__hostRating">
                        <div className="appartementInfo__locataire">
                            <p>{logement.host.name}</p>
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                        <div className="rating">
                            {stars.map((star) => (
                                <FontAwesomeIcon
                                    key={star}
                                    icon={star <= rating ? filledStar : emptyStar}
                                    className={star <= rating ? "star filled" : "star"}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="descriptionEquipments">
                    <section className="collapsible-sections-logement">
                        <CollapsibleSection title="Description">
                            <p>{logement.description}</p>
                        </CollapsibleSection>
                        <CollapsibleSection title="Équipements">
                            <ul>
                                {logement.equipments.map((equipment, index) => (
                                    <li key={index}>{equipment}</li>
                                ))}
                            </ul>
                        </CollapsibleSection>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Logement;
