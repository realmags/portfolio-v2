import React from "react";

// components
import { Container } from "../styles/globalStyles";
import { SectionTitle, TitleShadow } from "../styles/sectionStyles";

function SectionHeader({ children, tilt, id }) {
  return (
    <SectionTitle tilt={tilt} id={id}>
      <h2
        className="title-text"
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-target={`#${id}`}
        data-scroll-speed={3}
      >
        {children}
      </h2>
      <TitleShadow left />
      <TitleShadow right />
    </SectionTitle>
  );
}

export default SectionHeader;
