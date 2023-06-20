import React from 'react';
import {
  Container,
  Wrapper,
  Heading,
  FeedWrapper,
  FeedInnerWrapper,
  NewsFeedDate,
  FeedTitle,
  FeedBorder,
} from './NewsFeedStyle';

const NEWS_FEED_DATA = [
  {
    date: 'December 24, 2020',
    title: 'An "IT Solution" is a set of software programs and/or services',
  },
  {
    date: 'December 24, 2020',
    title: 'An "IT Solution" is a set of software programs and/or services',
  },
];

const NewsFeed: React.FC = () => (
  <Container>
    <Wrapper>
      <Heading>News Feeds</Heading>

      <FeedWrapper>
        {NEWS_FEED_DATA.map((item, index) => {
          return (
            <>
              <FeedInnerWrapper key={index}>
                <NewsFeedDate>{item.date}</NewsFeedDate>
                <FeedTitle>{item.title}</FeedTitle>
              </FeedInnerWrapper>

              {index != NEWS_FEED_DATA.length - 1 && <FeedBorder />}
            </>
          );
        })}
      </FeedWrapper>
    </Wrapper>
  </Container>
);
export default NewsFeed;
