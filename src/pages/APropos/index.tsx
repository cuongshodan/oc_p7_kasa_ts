// APropos.tsx
import React from 'react';
import image2 from "../../assets/image2.png";
import "./Apropos.scss";
import CollapsibleSection from './CollapsibleSection'; // Adjust the path if necessary

const APropos = () => {
  return (
    <main className="pageWrapper">
      <div className="homeMainAP">
        <div className="heroSectionAP">
          <img src={image2} alt="hero" />
          <div className="darkLayer"></div>
        </div>
        <section className="collapsible-sections">
          <CollapsibleSection title="Fiabilité">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis ex.
            </p>
          </CollapsibleSection>
          <CollapsibleSection title="Respect">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis ex.
            </p>
          </CollapsibleSection>
          <CollapsibleSection title="Service">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis ex.
            </p>
          </CollapsibleSection>
          <CollapsibleSection title="Sécurité">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae convallis ex.
            </p>
          </CollapsibleSection>
        </section>
      </div>
    </main>
  );
};

export default APropos;
