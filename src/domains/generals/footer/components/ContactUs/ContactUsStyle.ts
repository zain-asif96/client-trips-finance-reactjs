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

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 15px;
`;

const InfoDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const InfoImg = styled.img`
  width: 16px;
`;

const InfoDescWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  align-items: baseline;
`;

const InfoHead = styled.span`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  margin-left: 14px;
`;

const InfoDesc = styled.span`
  margin-left: 10px;
`;

const InfoLink = styled.a`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
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
  InfoWrapper,
  InfoDiv,
  InfoImg,
  InfoDescWrapper,
  InfoHead,
  InfoDesc,
  InfoLink,
};
