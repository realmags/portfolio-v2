import React from "react";

// components
import { SectionTitle, TitleText, Line } from "../styles/sectionStyles";

// todo: make line width variable
// todo: add motion when in view
function Subheading({ children }) {
  return (
    <SectionTitle>
      <Line />
      <TitleText>{children}</TitleText>
      <Line />
    </SectionTitle>
  );
}

export default Subheading;
