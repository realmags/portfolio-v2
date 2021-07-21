import React from "react";

// components
import Subheading from "../Subheading";
import { Section, Flex } from "../../styles/sectionStyles";
import {
  Container,
  Paragraph,
  Highlight,
  Icon,
} from "../../styles/globalStyles";

import { Facebook, Github } from "../../assets/social-icons";

function Contact() {
  return (
    <Section data-scroll-section>
      <Subheading alignRight>
        <h2>
          C<span className="o-special">o</span>n<em>t</em>act
        </h2>
        <p>Connect with me</p>
      </Subheading>
      <Container>
        <Flex direction="column" justify="flex-start">
          <Paragraph fontBigger size="400px">
            Wanna <Highlight>collaborate</Highlight> with me?
          </Paragraph>
          <Paragraph emphasize fontSmaller>
            kentbryan.maglinao@ustp.edu.ph
          </Paragraph>
          <Icon
            left="50%"
            animate={{
              y: ["0%", "50%", "0%"],
              scale: [1, 0.8, 1],
              x: 0,
            }}
            transition={{
              repeat: Infinity,
              //   ease: [0.6, 0.05, -0.01, 0.9],
              duration: 5,
              //   times: [0, 1, 1],
              ease: "linear",
            }}
          >
            <Facebook />
          </Icon>
        </Flex>
      </Container>
    </Section>
  );
}

export default Contact;
