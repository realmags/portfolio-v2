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
            <Paragraph marginRighT>
              Although I already completed my degree in computer engineering, I
              still and always feel like a student --
            </Paragraph>
            <Paragraph marginRight emphasize indent>
              for learning is a lifelong undertaking.
            </Paragraph>
          </Flex>
          <Image data-scroll data-scroll-speed="2" narrowWidth wideHeight>
            <img
              src="https://storage.googleapis.com/portfolio-kbcm.appspot.com/public/mags-portrait.jpg"
              alt="Mags posing on a bench"
            />
          </Image>
        </Flex>
        <Flex marginTop align="flex-start" justify="space-between">
          <Paragraph marginLeft marginTop>
            As such, I am willing to learn and adapt to whatever. I am very much
            open to employment offers and intern opportunities.
          </Paragraph>
          <Image data-scroll data-scroll-speed="1.5" wideWidth wideHeight bleed>
            <img
              src="https://storage.googleapis.com/portfolio-kbcm.appspot.com/public/bevz-group-photo.jpg"
              alt="Mags with a group of close friends"
            />
          </Image>
        </Flex>
      </Container>
    </Section>
  );
}

export default About;
