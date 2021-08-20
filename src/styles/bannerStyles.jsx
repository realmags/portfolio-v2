import styled from "styled-components";
import { Container } from "./globalStyles";

export const BannerContainer = styled(Container)`
  /* border: 1px solid white; */
  /* z-index: -10; */

  div {
    position: relative;
    top: 0;
    width: 100%;
    height: 100%;
  }

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
    max-height: calc(100vh - 45px);
  }
`;

export const BannerTitle = styled.h1`
  font-family: "Libre Baskerville", "Times New Roman", Times, serif;
  font-size: 11rem;
  /* line-height: 10rem; */
  line-height: 0.9;
  text-transform: uppercase;
  color: white;
  /* margin: 0; */
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;

  .banner-title {
    display: block;
  }

  .title-float {
    display: inline-block;
  }

  em {
    font-weight: normal !important;
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
`;

export const BannerParagraph = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: white;
  text-align: justify;
  width: 17rem;
  align-self: flex-end;
  /* margin-top: 3.5rem; */
  position: absolute;
  top: 3.5rem;
  right: 0;

  & .tab {
    margin-left: 3rem;
  }

  & .highlight {
    border-radius: 80%;
    border: 2px solid #f1fa3c;
  }

  @media (max-width: 699px) {
    font-size: 1rem;
    width: 14rem;
  }
`;
