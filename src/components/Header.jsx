import React from "react";

// Styled components
import {
  HeaderContainer,
  HeaderNav,
  Logo,
  NavList,
} from "../styles/headerStyles";
import { Container } from "../styles/globalStyles";

function Header() {
  // TODO: ADD REACT ROUTER
  return (
    // <div data-scroll-section>
    <HeaderContainer>
      <Container data-scroll-section>
        <HeaderNav data-scroll data-scroll-speed="2" data-scroll-position="top">
          <Logo>
            <a href="#">kbcm</a>
          </Logo>
          <NavList>
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">projects</a>
            </li>
            <li>
              <a href="#">contact</a>
            </li>
          </NavList>
        </HeaderNav>
      </Container>
    </HeaderContainer>
    // </div>
  );
}

export default Header;
