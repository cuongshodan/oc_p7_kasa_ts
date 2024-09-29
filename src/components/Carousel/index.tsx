import React, { useState } from 'react';
import './Carousel.scss';

// Import your custom arrow icons
import leftArrowIcon from '../../assets/left-arrow.svg';
import rightArrowIcon from '../../assets/right-arrow.svg';

type CarouselProps = {
    pictures: string[];
};

const Carousel: React.FC<CarouselProps> = ({ pictures }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % pictures.length);
    };

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + pictures.length) % pictures.length);
    };

    return (
        <div className="heroCarousel">
            <div className="carouselSlide">
                <img
                    src={pictures[currentSlide]}
                    alt={`Slide ${currentSlide + 1}`}
                    className="carouselImage"
                />
                {pictures.length > 1 && (
                    <div className="slideNumber">
                        {`${currentSlide + 1}/${pictures.length}`}
                    </div>
                )}
                {pictures.length > 1 && (
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
    );
};

export default Carousel;
