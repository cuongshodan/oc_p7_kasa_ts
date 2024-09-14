// APropos.tsx
import React from 'react';
import image2 from "../../assets/image2.png";
import "./Apropos.scss";
import CollapsibleSection from './CollapsibleSection'; // Adjust the path if necessary

const APropos = () => {
  return (
    <div className="pageWrapper">
      <div className="homeMainAP">
        <div className="heroSectionAP">
          <img src={image2} alt="hero" />
          <div className="darkLayer"></div>
        </div>
        <section className="collapsible-sections">
          <CollapsibleSection title="Fiabilité">
            <p>
              Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
            </p>
          </CollapsibleSection>
          <CollapsibleSection title="Respect">
            <p>
              La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </CollapsibleSection>
          <CollapsibleSection title="Service">
            <p>
              La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
            </p>
          </CollapsibleSection>
          <CollapsibleSection title="Sécurité">
            <p>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En cas de question ou de doute, nos équipes sont là pour y répondre.
            </p>
          </CollapsibleSection>
        </section>
      </div>
    </div>
  );
};

export default APropos;
