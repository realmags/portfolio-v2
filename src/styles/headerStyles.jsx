import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 45px;
`;

export const HeaderNav = styled.nav`
  font-family: Montserrat, Verdana, Geneva, Tahoma, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  color: black;
  /* margin-top: 20px; */
  padding-top: 20px;
  /* width: 100vw; */
  /* border-top: 1px solid #f1fa3c; */
  /* margin-bottom: 5vh; */
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
