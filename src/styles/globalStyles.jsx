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
`;

export const Flex = styled.div`
  display: flex;
  width: 100%;
  /* height: 100%; */

  ${(props) =>
    props.direction &&
    css`
      flex-direction: ${props.direction};
    `}
`;