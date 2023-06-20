import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  border-bottom: 2px solid #f1f1f1;
  background: #ffffff;
  padding: 34px 1em;
  @media (max-width: 900px) {
    padding: 20px 0;
  }
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.07);
  position: relative;
`;

const Container = styled.main`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1em;
`;

const MainRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const BrandLogoLink = styled.a`
  text-decoration: none;
`;

const BrandLogo = styled.img`
  width: 92px;
`;

export { Nav, BrandLogo, MainRow, Container, BrandLogoLink };
