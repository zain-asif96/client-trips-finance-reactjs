import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import LeftIconTextArea from '../left-icon-textarea/LeftIconTextArea';
import BoardIcon from '../../../assets/images/board-icon.png';

import {
  StepOneWrapper,
  StepOneHead,
  StepOneContentWrapper,
  RatingStarsWrapper,
  RatingStarsDesc,
} from './AddReviewStyle';
import ActionButtons from '../../generals/ActionButtons/ActionButtons';

const HelloWorld: React.FC = () => {
  const [rating, setRating] = useState<number>();

  return (
    <StepOneWrapper>
      <StepOneContentWrapper>
        <StepOneHead>
          Did you enjoy your [stay at property/time with guest]?
        </StepOneHead>
        <StepOneHead>Leave a review!</StepOneHead>
      </StepOneContentWrapper>
      <LeftIconTextArea
        placeholder="Typable text box, they can type anything here."
        icon={BoardIcon}
      />
      <RatingStarsWrapper>
        <StarRatings
          rating={rating}
          starRatedColor="#E54D42"
          starDimension="20px"
          numberOfStars={5}
          name="rating"
          changeRating={(rat: any) => {
            setRating(rat);
          }}
        />
        <RatingStarsDesc>1-5 star clickable system below.</RatingStarsDesc>
      </RatingStarsWrapper>
      <ActionButtons
        rightBtnText="Submit"
        rightBtnClick={() => {
          console.log;
        }}
        leftBtnClick={() => {
          console.log;
        }}
      />
    </StepOneWrapper>
  );
};

export default HelloWorld;
