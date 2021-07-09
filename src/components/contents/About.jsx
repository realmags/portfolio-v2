import React from "react";

// components
import { Section } from "../../styles/sectionStyles";
import SectionHeader from "../SectionHeader";

function About() {
  return (
    <Section data-scroll-section>
      <SectionHeader tilt="right">
        Get to know <em>m</em>e<span className="title-circle"></span>
        Get to know <em>m</em>e
      </SectionHeader>
    </Section>
  );
}

export default About;
