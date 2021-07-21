import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  width: 100%;
  margin-top: 10rem;
`;

export const SectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
  position: relative;

  .l-left {
    left: 0;
    justify-content: flex-start;
  }

  .l-right {
    right: 0;
    justify-content: flex-end;
  }

  .l-container {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 699px) {
      width: 30%;
    }
  }
`;

export const TitleText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 60%;
  color: white;
  text-transform: uppercase;
  text-align: center;
  margin: 0 auto;

  /* border: 1px solid white; */

  ${(props) =>
    props.alignLeft &&
    css`
      text-align: left;
    `}

  ${(props) =>
    props.alignRight &&
    css`
      text-align: right;
    `}

  h2 {
    font-size: 3rem;
    font-family: "Libre Baskerville", "Times New Roman", Times, serif;

    @media (max-width: 699px) {
      font-size: 2rem;
    }
  }

  .o-special {
    display: inline-block;
    background: #f1fa3c;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    color: black;
    text-align: center;

    @media (max-width: 699px) {
      width: 2rem;
      height: 2rem;
    }
  }

  p {
    font-size: 1.4rem;

    @media (max-width: 699px) {
      font-size: 1.2rem;
    }
  }
`;

// * consider as global
// todo: variable min-width
export const Line = styled(motion.hr)`
  border: 1px solid white;
  background: white;
  /* width: 30%; */
  min-width: 15%;
`;

// todo: consider as global
export const Flex = styled.div.attrs((props) => ({
  direction: props.direction || "initial",
  align: props.align || "initial",
  justify: props.justify || "initial",
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;

  width: ${(props) => (props.stretch ? "100%" : "auto")};
  margin-top: ${(props) => props.marginTop && "60px"};

  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};

  @media (max-width: 699px) {
    flex-direction: initial;
    justify-content: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 500px));
  justify-items: center;
  justify-content: center;
  column-gap: 300px;
  row-gap: 200px;
  margin-bottom: 300px;

  @media (max-width: 1024px) {
    row-gap: 50px;
    margin-bottom: initial;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  color: white;
  /* width: 40%; */
  min-width: 280px;
  max-width: 500px;

  ${(props) =>
    props.dropBottom &&
    css`
      align-self: flex-end;
      transform: translateY(20%);
    `}

  @media (max-width: 1024px) {
    transform: translateY(0%);
  }
`;

export const CardCategory = styled.p`
  font-size: 0.8rem;
  width: 80px;
  display: inline-table;
  text-align: right;
  align-self: flex-end;
`;

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .card-title {
    font-family: "Libre Baskerville", "Times New Roman", Times, serif;
    width: 30%;
    text-align: left;
  }

  .card-description {
    width: 70%;
    text-align: right;
  }
`;
