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
        <Flex direction="column" justify="flex-start" marginBottom>
          <Paragraph fontBigger size="400px">
            Wanna <Highlight>collaborate</Highlight> with me?
          </Paragraph>
          <Paragraph emphasize fontSmaller>
            kentbryan.maglinao@ustp.edu.ph
          </Paragraph>
          <Icon
            left="50"
            animate={{
              y: ["0%", "100%"],
              x: 0,
            }}
            transition={{
              type: "tween",
              ease: [0.6, 0.05, -0.01, 0.9],
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <Facebook />
          </Icon>
          <Icon
            left="20"
            top="100"
            animate={{
              y: ["0%", "80%"],
              x: 0,
            }}
            transition={{
              type: "tween",
              ease: [0.6, 0.05, -0.01, 0.9],
              y: {
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: {
                duration: 0.3,
              },
            }}
            whileTap={{
              scale: 0.9,
              transition: {
                duration: 0.3,
              },
            }}
          >
            <Github />
          </Icon>
        </Flex>
      </Container>
    </Section>
  );
}

export default Contact;
