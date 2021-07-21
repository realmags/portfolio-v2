import styled, { css } from "styled-components";
// import { motion } from "framer-motion";

export const BannerContainer = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;

  @media (max-width: 699px) {
    /* change to 50 */
    height: 50vh;
    min-height: 340px;
  }

  @media (min-width: 700px) and (max-width: 999px) {
    /* minus 20 */
    height: 80vh;
    min-height: 380px;
  }

  @media (min-width: 1000px) {
    height: 100vh;
    /* min-height: 46.875rem; */
    /* max-height: calc(100vh - 45px); */
    min-height: calc(100vh - 45px);
  }
`;

export const BannerTitle = styled.h1`
  font-family: "Libre Baskerville", "Times New Roman", Times, serif;
  font-size: 11rem;
  line-height: 0.9;
  text-transform: uppercase;
  color: white;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;

  .b-title {
    display: block;
    width: 100%;
    position: relative;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.5) 30%,
      rgba(0, 0, 0, 0) 100%
    );
  }

  @media (max-width: 699px) {
    font-size: 13vw;
  }

  @media (min-width: 700px) and (max-width: 1599px) {
    font-size: 13.5vw;
  }

  @media (min-width: 1600px) {
    font-size: 12vw;
  }

  ${(props) =>
    props.sendBackward &&
    css`
      z-index: -10;
    `}
`;

export const BannerTitleAnim = styled.span`
  color: #2a363b;
  display: block;
  white-space: nowrap;
  font-weight: bold;
  overflow: hidden;
  pointer-events: none;

  .b-line {
    display: inline-block;
  }

  .b-title__inner {
    display: inline-block;
    z-index: -10;
  }
`;

export const BannerSubtitle = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: white;
  text-align: justify;
  width: 17rem;
  align-self: flex-end;
  position: absolute;
  top: 3.5rem;
  right: 0;

  @media (max-width: 699px) {
    font-size: 1rem;
    width: 14rem;
  }
`;

// todo: make width variable, consider as global
export const Shadow = styled.div.attrs((props) => ({
  width: props.shadowSize || "0%",
}))`
  position: absolute;
  top: 0;
  height: 100%;
  width: ${(props) => props.width};
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  ${(props) =>
    props.left &&
    css`
      left: 0%;
      min-width: 10%;
    `}

  ${(props) =>
    props.right &&
    css`
      right: 0%;
      transform: scale(-1);
      min-width: 10%;
    `}
`;
