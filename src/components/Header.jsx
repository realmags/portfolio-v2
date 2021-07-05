import React from "react";

// Styled components
import { HeaderNav, Logo, NavList } from "../styles/headerStyles";

function Header() {
  // TODO: ADD REACT ROUTER
  return (
    <header>
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
    </header>
  );
}

export default Header;
