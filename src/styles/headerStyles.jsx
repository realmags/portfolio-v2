import styled from "styled-components";

export const HeaderNav = styled.nav`
  /* TODO: ADD EXTRA MEDIA QUERIES */
  /* @media (min-width: 1024px) {
    max-width: 960px;
  } */

  /* @media (min-width: 1216px) {
    max-width: 1152px;
  } */

  /* TODO: ADJUST MEDIA QUERY */
  @media (min-width: 1408px) {
    max-width: 1244px;
    margin: 20px auto 0px auto;
  }

  display: flex;
  justify-content: space-between;
  font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
  text-transform: uppercase;
  color: black;
  margin-top: 20px;
`;

export const Logo = styled.span`
  font-size: 2rem;
  letter-spacing: -0.2rem;
`;

export const NavList = styled.ul`
  letter-spacing: -0.2rem;
  display: flex;

  li {
    font-size: 1.3rem;
    margin: 0 30px;
  }
`;
