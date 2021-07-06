import React from "react";

// styled components
import { createGlobalStyle } from "styled-components";
import Header from "./Header";

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    margin: 0;
    padding: 0;
    /* cursor: none; */
  }

  html {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    font-size: 16px;

    @media (max-width: 699px) {
    font-size: 12px;
    }


  }

  body {
    background: black;
    /* TODO: ADD GOOGLE FONT IMPORT */
    font-family: 'Libre Baskerville', 'Times New Roman', Times, serif;
  }

  a {
    color: unset;
    text-decoration: none;
  }

  li {
    text-decoration: none;
    list-style: none;
  }
`;

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
    </>
  );
}

export default Layout;
