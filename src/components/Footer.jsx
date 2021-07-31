import React from "react";
import { FooterContainer } from "../styles/footerStyles";
import { Container } from "../styles/globalStyles";
import { Flex } from "../styles/sectionStyles";

function Footer() {
  return (
    <FooterContainer data-scroll-section>
      <Container>
        <Flex justify="space-between">
          <p>c 2021 Cagayan de Oro</p>
          <a href="#main">Back to Top</a>
        </Flex>
      </Container>
    </FooterContainer>
  );
}

export default Footer;
