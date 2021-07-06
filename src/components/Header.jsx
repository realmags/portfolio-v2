import React from "react";

// Styled components
import { HeaderNav, Logo, NavList } from "../styles/headerStyles";
import { Container } from "../styles/globalStyles";

function Header() {
  // TODO: ADD REACT ROUTER
  return (
    <header>
      <Container>
        <HeaderNav>
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
    </header>
  );
}

export default Header;
