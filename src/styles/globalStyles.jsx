import styled, { css } from "styled-components";

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
  width: props.width || "250px",
}))`
  text-transform: uppercase;
  font-size: 1.2rem;
  color: white;
  min-width: 280px;
  width: 300px;
  /* max-width: ${(props) => `calc(${props.width} * 1.8)`}; */
  text-align: left;
  margin: 20px 0;
  margin-top: ${(props) => props.marginTop && "200px"};

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
      margin-left: 30px;
      width: 0;
    `}

  @media (max-width: 699px) {
    margin: 20px 0;
  }
`;

export const Image = styled.span`
  background: grey;
  min-width: 280px;
  min-height: 400px;
  margin: 20px 0;

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
