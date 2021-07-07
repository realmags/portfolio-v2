import styled from "styled-components";

export const BannerContainer = styled.div`
  @media (min-width: 1408px) {
    max-width: 1244px;
    margin: 20px auto 0px auto;
  }

  text-align: left;
  /* color: #f8f6f6; */

  h1 {
    font-size: 10rem;
    line-height: 8rem;
    text-transform: uppercase;
  }

  p {
    font-size: 1rem;
  }
`;

export const BannerTitle = styled.h1`
  font-family: "Libre Baskerville", "Times New Roman", Times, serif;
  font-size: 11rem;
  line-height: 10rem;
  text-transform: uppercase;
  color: white;
  /* margin: 0; */
  margin: 2rem 0 0 0;

  span {
    display: block;
  }

  em {
    display: inline-block;
  }

  .name-initials {
    font-style: normal;
  }
`;

export const BannerParagraph = styled.p`
  font-size: 1.2rem;
  text-transform: uppercase;
  color: white;
  text-align: justify;
  width: 17rem;
  align-self: flex-end;
  margin-top: 3.5rem;

  & .tab {
    margin-left: 3rem;
  }

  & .highlight {
    border-radius: 80%;
    border: 2px solid #f1fa3c;
  }
`;
