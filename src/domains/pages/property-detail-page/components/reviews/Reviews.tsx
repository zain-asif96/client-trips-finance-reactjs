import React, { Fragment, useState } from 'react';
import {
  MainRow,
  Container,
  TotalReviews,
  ReviewHeader,
  ReviewContents,
  ReviewItem,
  ReviewParagraph,
  ReviewerName,
  ReviewerTitle,
  Button,
  ButtonText,
  Images,
  QuoteIcon,
  ReviewerWrapper,
  ReviewerInnerWrapper,
  QuoteIconWrapper,
} from './ReviewsStyle';

import StarRatings from 'react-star-ratings';
import quoteIcon from '../../../../../assets/images/right-quote-sign.png';

const REVIEW_DATA = {
  rating: 5.0,
  totalReviews: 9,
  reviews: [
    {
      rating: 5.0,
      description:
        'Use filter to customize your kind of search and to find exactly select a category that best suits your interest in the world.',
      name: 'Annette Owens',
      title: 'Founder, Colix Co.',
    },
    {
      rating: 5.0,
      description:
        'Use filter to customize your kind of search and to find exactly select a category that best suits your interest in the world.',
      name: 'Dwayne Cain',
      title: 'Founder, Colix Co.',
    },
    {
      rating: 5.0,
      description:
        'Use filter to customize your kind of search and to find exactly select a category that best suits your interest in the world.',
      name: 'Allax Scote',
      title: 'Founder, Colix Co.',
    },
    {
      rating: 5.0,
      description:
        'Use filter to customize your kind of search and to find exactly select a category that best suits your interest in the world.',
      name: 'Dwayne Cain',
      title: 'Founder, Colix Co.',
    },
    {
      rating: 5.0,
      description:
        'Use filter to customize your kind of search and to find exactly select a category that best suits your interest in the world.',
      name: 'Allax Scote',
      title: 'Founder, Colix Co.',
    },
    {
      rating: 5.0,
      description:
        'Use filter to customize your kind of search and to find exactly select a category that best suits your interest in the world.',
      name: 'Dwayne Cain',
      title: 'Founder, Colix Co.',
    },
    {
      rating: 5.0,
      description:
        'Use filter to customize your kind of search and to find exactly select a category that best suits your interest in the world.',
      name: 'Allax Scote',
      title: 'Founder, Colix Co.',
    },
  ],
};

const Reviews: React.FC = () => {
  const [rows, setRows] = useState(3);
  const rowsToDisplay = () => {
    if (REVIEW_DATA.reviews.length > 3) {
      setRows(REVIEW_DATA.reviews.length);
    }
  };
  return (
    <Fragment>
      <Container>
        <MainRow>
          <TotalReviews>
            <StarRatings
              rating={5.0}
              starRatedColor="#E54D42"
              starDimension="20px"
              numberOfStars={1}
              name="rating"
            />
            <ReviewHeader>
              {REVIEW_DATA.rating} {`(${REVIEW_DATA.totalReviews} reviews)`}
            </ReviewHeader>
          </TotalReviews>
          <ReviewContents>
            {REVIEW_DATA.reviews.slice(0, rows).map((item: any, index) => {
              return (
                <ReviewItem key={index}>
                  <Images>
                    <StarRatings
                      rating={item.rating}
                      starRatedColor="#E54D42"
                      starDimension="14px"
                      starSpacing="1px"
                      numberOfStars={5}
                      name="rating"
                    />
                  </Images>
                  <ReviewParagraph>{item.description}</ReviewParagraph>
                  <ReviewerWrapper>
                    <QuoteIconWrapper>
                      <QuoteIcon src={quoteIcon} alt="logo" />
                    </QuoteIconWrapper>
                    <ReviewerInnerWrapper>
                      <ReviewerName>{item.name}</ReviewerName>
                      <ReviewerTitle>{item.title}</ReviewerTitle>
                    </ReviewerInnerWrapper>
                  </ReviewerWrapper>
                </ReviewItem>
              );
            })}
          </ReviewContents>
          <Button onClick={rowsToDisplay}>
            <ButtonText>Show all reviews</ButtonText>
          </Button>
        </MainRow>
      </Container>
    </Fragment>
  );
};

export default Reviews;
