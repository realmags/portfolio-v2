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
            <Paragraph marginRight emphasize indent>
              for learning is a lifelong undertaking.
            </Paragraph>
          </Flex>
          <Image data-scroll data-scroll-speed="2" narrowWidth wideHeight>
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-kbcm.appspot.com/o/public%2Fmags-portrait.jpg?alt=media&token=d7dfde48-b9d9-4dd1-8f5a-e97677905d03"
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
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-kbcm.appspot.com/o/public%2Fbevz-group-photo.jpg?alt=media&token=a163f32c-ef83-42bf-8f54-14d49a809fd6"
              alt="Mags with a group of close friends"
            />
          </Image>
        </Flex>
      </Container>
    </Section>
  );
}

export default About;
