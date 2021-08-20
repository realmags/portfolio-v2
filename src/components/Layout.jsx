import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

// styled components
import { createGlobalStyle } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";

// provider
import { useGlobalStateContext } from "../context/globalContext";

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

    @media (min-width: 700px) and (max-width: 999px) {
    font-size: 13px;
    }

    @media (min-width: 1000px) and (max-width: 1199px) {
    font-size: 14px;
    }

    @media (min-width: 1200px) and (max-width: 1599px) {
    font-size: 16px;
    }

    @media (min-width: 2400px) {
    font-size: 22px;
    }


  }

  body {
    background: black;
    /* TODO: ADD GOOGLE FONT IMPORT */
    font-family: Montserrat ,Verdana, Geneva, Tahoma, sans-serif;
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
  let scrollContainer = useRef(null);
  const { projects } = useGlobalStateContext();

  useEffect(() => {
    let scroll;
    projects &&
      (scroll = new LocomotiveScroll({
        el: scrollContainer.current,
        smooth: true,
      }));

    return () => projects && scroll.destroy();
  }, [projects]);
  // const scroll = new LocomotiveScroll();

  return (
    <>
      <GlobalStyle />
      <CustomCursor />
      <div ref={scrollContainer} data-scroll-container>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
}

export default Layout;
