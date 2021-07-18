import styled, { css } from "styled-components";

export const Section = styled.section`
  margin-top: 10rem;
`;

// TODO: ADD ATTR TO SECTIONTITLE
export const SectionTitle = styled.div`
  width: 100%;
  background: #f1fa3c;
  margin-bottom: 60px;

  ${(props) =>
    props.tilt === "rotateRight" &&
    css`
      transform: rotate(-5deg);
    `}

  ${(props) =>
    props.tilt === "rotateLeft" &&
    css`
      transform: rotate(5deg);
    `}

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 200px;
    `}

  @media (max-width: 699px) {
    margin-bottom: 30px;
  }

  .title-text {
    font-family: "Libre Baskerville", "Times New Roman", Times, serif;
    font-size: 5.5rem;
    text-transform: uppercase;
    color: black;
    overflow: hidden;

    .title-text__inner {
      white-space: nowrap;
      width: 100%;
      display: flex;
      align-items: center;
    }

    @media (max-width: 699px) {
      font-size: 8.5vw;
    }

    @media (min-width: 700px) and (max-width: 999px) {
      font-size: 6.5vw;
    }
  }

  .title-circle {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: white;
    margin: 0 1rem;
    display: inline-table;

    @media (max-width: 699px) {
      width: 8.5vw;
      height: 8.5vw;
    }
  }
`;

export const TitleShadow = styled.div`
  position: absolute;
  top: -2%;
  width: 20%;
  height: 104%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(0, 0, 0, 0) 100%
  );

  ${(props) =>
    props.left &&
    css`
      left: -5%;
    `}

  ${(props) =>
    props.right &&
    css`
      right: -5%;
      transform: scale(-1);
    `}
`;


// * new styles for subheading
