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

const QuickLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 15px;
  @media (max-width: 1289px) {
    flex-direction: column;
  }
`;

const QuickLinksInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

const QuickLinksText = styled.h6`
  margin-bottom: 40px;
`;

const QuickLinks = styled.a`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  color: #777777;
  text-decoration: none;
  ::hover {
    text-decoration: none;
  }
`;

export {
  Container,
  Wrapper,
  Heading,
  QuickLinksWrapper,
  QuickLinksInnerWrapper,
  QuickLinks,
  QuickLinksText,
};
