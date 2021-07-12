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

  ${(props) =>
    props.spaceAround &&
    css`
      justify-content: space-around;
    `}

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 200px;
    `}

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 200px;
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

  min-width: ${(props) => props.width};
  width: ${(props) => `calc(${props.width} * 1.8)`};
  text-align: center;

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: 200px;
    `}

  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 200px;
    `}
`;

// todo: add attr for width, height, flex grow
// * crosswise image: 600x700
// * lengthwise image: 400x500
export const Image = styled.span`
  width: 250px;
  height: 250px;
  background: grey;

  ${(props) =>
    props.narrowWidth &&
    css`
      width: 400px;
    `}

  ${(props) =>
    props.wideWidth &&
    css`
      width: 600px;
    `}

  ${(props) =>
    props.narrowHeight &&
    css`
      height: 500px;
    `}

  ${(props) =>
    props.wideHeight &&
    css`
      height: 700px;
    `}

    ${(props) =>
    props.marginTop &&
    css`
      margin-top: 200px;
    `}

    ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: 200px;
    `}
`;
