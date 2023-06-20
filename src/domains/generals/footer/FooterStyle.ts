import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  padding: 4.5em 1em;
  margin: 0;
  background-color: #f8f9fa;
  @media (max-width: 767px) {
    padding: 1.5em 1em;
  }
`;

const MainRow = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  padding: 0 1em;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const FooterCol = styled.div`
  :last-child {
    padding-right: 0;
  }
  :first-child {
    padding-left: 0;
  }
  padding: 0.5em 35px;
  width: 25%;
  @media (max-width: 1289px) {
    width: 50%;
    padding: 1.5em 35px;
  }
  @media (max-width: 767px) {
    padding: 0.5em 0px;
    width: 100%;
  }
`;

const FooterColTwo = styled.div`
  :last-child {
    padding-right: 0;
  }
  :first-child {
    padding-left: 0;
  }
  padding: 0.5em 35px;
  width: 75%;
  @media (max-width: 1289px) {
    width: 50%;
    padding: 1.5em 35px;
  }
  @media (max-width: 767px) {
    padding: 0.5em 0px;
    width: 100%;
  }
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SocialIconsFooter = styled.img`
  margin-right: 10px;
  max-width: 100%;
  width: 50%;
  margin: 0 auto;
`;

const SocialIconLinks = styled.a`
  ::hover {
    text-decoration: none;
  }
`;

const FooterBorder = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(53, 53, 53, 0.12);
  margin: 10px 0 24px;
`;

const CopyRight = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #777777;
  text-align: center;
`;

export {
  Container,
  MainRow,
  FooterCol,
  FooterColTwo,
  SocialIconsWrapper,
  SocialIconsFooter,
  SocialIconLinks,
  FooterBorder,
  CopyRight,
};
