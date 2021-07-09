import React from "react";

// components
import { Container } from "../styles/globalStyles";
import { SectionTitle, TitleShadow } from "../styles/sectionStyles";

function SectionHeader({ children, tilt }) {
  // TODO: add em tag to char at position
  // const italicChar = text.splice(position, 1);

  return (
    <Container tilt={tilt}>
      <SectionTitle>{children}</SectionTitle>
      <TitleShadow left />
      <TitleShadow right />
    </Container>
  );
}

export default SectionHeader;
