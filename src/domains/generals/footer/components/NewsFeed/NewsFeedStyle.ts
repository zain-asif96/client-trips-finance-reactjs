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

const FeedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 15px;
`;

const FeedInnerWrapper = styled.div`
  padding-bottom: 14px;
`;

const FeedBorder = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(53, 53, 53, 0.12);
  margin: 10px 0 24px;
`;

const FeedTitle = styled.h4`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  margin-top: 14px;
`;

const NewsFeedDate = styled.h6`
  font-family: ${({ theme }) => theme.fontFamily1};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #777777;
`;

export {
  Container,
  Wrapper,
  Heading,
  FeedWrapper,
  FeedInnerWrapper,
  NewsFeedDate,
  FeedTitle,
  FeedBorder,
};
