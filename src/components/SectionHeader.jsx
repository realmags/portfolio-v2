import React from "react";

// components
import { Container } from "../styles/globalStyles";
import { SectionTitle, TitleShadow } from "../styles/sectionStyles";

function SectionHeader({ children, tilt }) {
  return (
    <Container tilt={tilt} id="title-horizontal">
      <SectionTitle
        data-scroll
        data-scroll-direction="horizontal"
        data-scroll-target="#title-horizontal"
        data-scroll-speed={3}
      >
        {children}
      </SectionTitle>
      <TitleShadow left />
      <TitleShadow right />
    </Container>
  );
}

export default SectionHeader;
