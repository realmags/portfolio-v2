import styled, { css } from "styled-components";

export const Section = styled.section`
  margin-top: 250px;
`;

// TODO: ADD ATTR TO SECTIONTITLE
export const SectionTitle = styled.h2`
  font-family: "Libre Baskerville", "Times New Roman", Times, serif;
  font-size: 5.5rem;
  text-transform: uppercase;
  background: #f1fa3c;
  color: black;
  white-space: nowrap;
  /* transform: translateX(-10%); */
  width: 200%;
  position: relative;

  .title-circle {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    background: white;
    margin: 0 1rem;
    display: inline-block;
  }
`;

// TODO: edit gradient, remove gray step
export const TitleShadow = styled.div`
  position: absolute;
  top: -2%;
  width: 30%;
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
