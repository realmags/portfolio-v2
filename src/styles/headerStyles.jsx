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
  /* @media (min-width: 1408px) {
    max-width: 1244px;
    margin: 20px auto 0px auto;
  } */

  font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: black;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #f1fa3c;
`;

export const Logo = styled.span`
  font-size: 1.8rem;
  letter-spacing: -0.2rem;
  color: #f1fa3c;
`;

export const NavList = styled.ul`
  letter-spacing: -0.05rem;
  display: flex;
  color: white;

  li {
    font-size: 0.8rem;
    margin: 0 1rem;
  }

  li:last-child {
    margin-right: 0px;
  }
`;
