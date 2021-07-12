import React from "react";

// components
import { Section } from "../../styles/sectionStyles";
import { Container, Flex, Paragraph, Image } from "../../styles/globalStyles";
import SectionHeader from "../SectionHeader";

function About() {
  return (
    <Section data-scroll-section>
      <Container>
        <SectionHeader tilt="rotateRight" id="title-one__horizontal">
          Get to know <em>m</em>e<span className="title-circle"></span>
          Get to know <em>m</em>e
        </SectionHeader>
        <Flex spaceAround marginTop alignCenter>
          <Paragraph>
            You can call me 'mags,' all my friends do. I am a{" "}
            {new Date().getFullYear() - 2000}-year old developer. Learning to
            create sickening websites and turning them to reality is something I
            am really passionate about.
          </Paragraph>
          <Image wideWidth wideHeight>
            <img src="#" alt="Image" />
          </Image>
        </Flex>
        <Flex spaceAround marginTop alignCenter>
          <Paragraph width="350px">
            Although I already completed my degree in computer engineering, I
            still and always feel like a student--for learning is a lifelong
            undertaking.
          </Paragraph>
        </Flex>
        <Flex spaceAround alignTop marginTop marginBottom>
          <Image narrowWidth wideHeight>
            <img src="#" alt="Image" />
          </Image>
          <Paragraph width="200px" marginTop>
            As such, I am willing to learn and adapt to whatever. I am very much
            open to employment offers and intern opportunities.
          </Paragraph>
        </Flex>
        <SectionHeader tilt="rotateLeft" id="title-two__horizontal">
          See My Wo<em>r</em>ks<span className="title-circle"></span>
          See My Wo<em>r</em>ks<span className="title-circle"></span>
        </SectionHeader>
      </Container>
    </Section>
  );
}

export default About;
