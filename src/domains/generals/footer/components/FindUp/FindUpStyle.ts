import styled from 'styled-components';

const Container = styled.main`
  width: 100%;
  //   padding: 0 1em;
  //   margin: 30px 0px;
  //   background-color: #f8f9fa;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Heading = styled.h1`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #000000;
`;

const Paragraph = styled.p`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #777777;
  margin-top: 15px;
`;

const SocialIconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 25px;
`;

const SocialIconsFooter = styled.img`
  margin-right: 10px;
  max-width: 100%;
  width: 80%;
`;

const SocialIconLinks = styled.a`
  ::hover {
    text-decoration: none;
  }
`;

export {
  Container,
  Wrapper,
  Heading,
  Paragraph,
  SocialIconsWrapper,
  SocialIconsFooter,
  SocialIconLinks,
};
