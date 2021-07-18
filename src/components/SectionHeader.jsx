import React from "react";

// components
import { Container } from "../styles/globalStyles";
import { SectionTitle, TitleShadow } from "../styles/sectionStylesDraft";

function SectionHeader({ children, tilt, id, speed }) {
  return (
    <SectionTitle tilt={tilt} id={id}>
      <h2 className="title-text">
        <span
          className="title-text__inner"
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-target={`#${id}`}
          data-scroll-speed={speed}
        >
          {children}
        </span>
      </h2>
      <TitleShadow left />
      <TitleShadow right />
    </SectionTitle>
  );
}

export default SectionHeader;
