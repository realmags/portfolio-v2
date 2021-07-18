import styled, { css } from "styled-components";

export const Section = styled.section`
  width: 100%;
  margin-top: 10rem;
`;

export const SectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 60px;
`;

export const TitleText = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  color: white;
  text-transform: uppercase;
  text-align: center;

  h2 {
    font-size: 3rem;
    font-family: "Libre Baskerville", "Times New Roman", Times, serif;

    @media (max-width: 699px) {
      font-size: 1.5rem;
    }
  }

  .o-special {
    display: inline-block;
    background: #f1fa3c;
    width: 3rem;
    height: 3rem;
    border-radius: 100%;
    color: black;

    @media (max-width: 699px) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }

  p {
    font-size: 1.4rem;

    @media (max-width: 699px) {
      font-size: 0.8rem;
    }
  }
`;

// * consider as global
// todo: variable min-width
export const Line = styled.hr`
  border: 1px solid white;
  background: white;
  width: 30%;
  min-width: 30px;
`;

// todo: make global, set direction to auto for responsiveness
export const Flex = styled.div.attrs((props) => ({
  direction: props.direction || "row",
  align: props.align || "normal",
  justify: props.justify || "normal",
}))`
  display: flex;
  width: ${(props) => (props.stretch ? "100%" : "auto")};
  /* height: min-content; */
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.justify};
  margin-top: ${(props) => props.marginTop && "60px"};
  align-items: ${(props) => props.align};
  flex-wrap: wrap;
  /* row-gap: 140px; */
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
