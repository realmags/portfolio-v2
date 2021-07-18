import React from "react";

// components
import { Section, Flex } from "../../styles/sectionStyles";
import {
  Container,
  Paragraph,
  Image,
  Highlight,
} from "../../styles/globalStyles";
import Subheading from "../Subheading";

import sampleImg from "../../assets/sample.jfif";

// todo: fix responsiveness of each flex content
function About() {
  const currentAge = new Date().getFullYear() - 2000;

  return (
    <Section data-scroll-section>
      <Subheading>
        <h2>
          <em>A</em>b<span className="o-special">o</span>ut
        </h2>
        <p>Get to know me</p>
      </Subheading>
      <Container>
        <Flex direction="row-reverse" stretch justify="space-between">
          <Flex direction="column">
            <Paragraph marginRight>
              You can call me '<Highlight>mags</Highlight>,' all my friends do.
              I am a {currentAge}-year old developer. Learning to create
              sickening websites and turning them to reality is something I am
              really passionate about.
            </Paragraph>
            <Paragraph marginRight>
              Although I already completed my degree in computer engineering, I
              still and always feel like a student --
            </Paragraph>
            <Paragraph marginRight emphasize>
              for learning is a lifelong undertaking.
            </Paragraph>
          </Flex>
          <Image narrowWidth wideHeight>
            <img src={sampleImg} alt="Sample image" />
          </Image>
        </Flex>
        <Flex
          marginTop
          direction="row-reverse"
          align="flex-start"
          justify="space-between"
        >
          <Image wideWidth wideHeight bleed>
            <img src={sampleImg} alt="Sample image" />
          </Image>
          <Paragraph marginLeft marginTop>
            As such, I am willing to learn and adapt to whatever. I am very much
            open to employment offers and intern opportunities.
          </Paragraph>
        </Flex>
      </Container>
    </Section>
  );
}

export default About;
