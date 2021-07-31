import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  @media (max-width: 699px) {
    padding-right: 20px;
    padding-left: 20px;
  }

  @media (min-width: 700px) {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
  }

  margin-right: auto;
  margin-left: auto;
  max-width: 95rem;
  position: relative;
`;

export const Flex = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media (max-width: 699px) {
    padding: 20px 0;
  }

  ${(props) =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `}

  ${(props) =>
    props.alignCenter &&
    css`
      align-items: center;
    `}

  ${(props) =>
    props.alignTop &&
    css`
      align-items: top;
    `}
`;

export const Paragraph = styled.p.attrs((props) => ({
  width: props.size || "300px",
}))`
  text-transform: uppercase;
  text-align: justify;
  font-size: 1.2rem;
  color: white;
  min-width: 280px;
  /* width: 280px; */
  max-width: ${(props) => props.width};
  text-align: left;
  /* margin: 20px 0; */
  margin-bottom: 20px;
  margin-top: ${(props) => (props.marginTop ? "200px" : "20px")};

  ${(props) =>
    props.fontBigger &&
    css`
      font-size: 2rem;
    `}

  ${(props) =>
    props.marginRight &&
    css`
      margin-right: 60px;
    `}

  ${(props) =>
    props.marginLeft &&
    css`
      margin-left: 50px;
    `}

  ${(props) =>
    props.emphasize &&
    css`
      font-family: "Libre Baskerville", "Times New Roman", Times, serif;
    `}

  ${(props) =>
    props.indent &&
    css`
      margin-left: 30px !important;
    `}

  @media (max-width: 699px) {
    margin: 20px 0;
    width: 280px;
    font-size: ${(props) => (props.fontSmaller ? "1rem" : "1.2rem")};
  }
`;

export const Image = styled.span`
  background: grey;
  min-width: 280px;
  min-height: 400px;
  margin: 20px 0;
  overflow: hidden;
  background: black;

  @media (max-width: 699px) {
    margin: 20px 0;
  }

  ${(props) =>
    props.stretch &&
    css`
      width: 100% !important;
    `}

  ${(props) =>
    props.narrowWidth &&
    css`
      width: 40%;
      max-width: 500px;
    `}

  ${(props) =>
    props.wideWidth &&
    css`
      width: 45%;
      max-width: 600px;
    `}

  ${(props) =>
    props.narrowHeight &&
    css`
      height: 40vw;
      max-height: 500px;
    `}

  ${(props) =>
    props.wideHeight &&
    css`
      height: 50vw;
      max-height: 700px;
    `}

  ${(props) =>
    props.bleed &&
    css`
      transform: translate(10%, -20%);
    `}

  @media (max-width: 699px) {
    transform: translate(0%, 0%);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const Highlight = styled.span`
  border-radius: 80%;
  border: 2px solid #f1fa3c;
`;

export const Tab = styled.span`
  margin-left: 3rem;
`;

export const Icon = styled(motion.span).attrs((props) => ({
  top: parseInt(props.top) || 0,
  left: parseInt(props.left) || 0,
}))`
  position: absolute;
  top: ${(props) => props.top + "%"};
  left: ${(props) => props.left + "%"};
  width: 40px;
  height: 40px;
  padding: 10px;
  border: 2px solid #f1fa3c;
  border-radius: 50%;
  background: black;
  z-index: 10;

  /* box-shadow: 5px 5px 10px #cdd533, -5px -5px 10px #ffff45; */
  /* box-shadow: 1px 1px 4px #f1fa3c; */

  @media (max-width: 699px) {
    width: 25px;
    height: 25px;
    top: ${(props) => (props.top > 0 ? `${props.top}%` : `${props.top - 80}%`)};
  }

  svg {
    width: 100%;
    height: 100%;
  }

  path {
    fill: white;
  }
`;
