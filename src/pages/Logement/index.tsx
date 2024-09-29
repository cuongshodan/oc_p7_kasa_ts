import { useParams, Navigate } from 'react-router-dom';
import data from '../../database/logements.json';

// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as filledStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

// Import components
import CollapsibleSection from '../../components/CollapsibleSection/CollapsibleSection';
import Carousel from '../../components/Carousel';

import './Logement.scss';

const Logement = () => {
    const { id } = useParams();
    const logement = data.find((item) => item.id === id);

    if (!logement) {
        return <Navigate to="/not-found" replace />;
    }

    const rating = Number(logement.rating);
    const maxRating = 5;
    const stars = Array.from({ length: maxRating }, (_, index) => index + 1);

    return (
        <div className="pageWrapper logementWrapper">
            <div className="homeMain">
                <Carousel pictures={logement.pictures} />
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
                                    className={star <= rating ? 'star filled' : 'star'}
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
