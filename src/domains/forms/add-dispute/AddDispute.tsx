import React, { useState } from 'react';
import BoardIcon from '../../../assets/images/board-icon.png';
import StarRatings from 'react-star-ratings';
import AttachIcon from '../../../assets/images/attach-icon.png';
import {
  StepOneWrapper,
  StepOneHead,
  StepOneContentWrapper,
  AttachFileInput,
  RatingStarsWrapper,
  RatingStarsDesc,
  AttachFileInputImg,
  AttachFileInputWrapper,
} from './AddDisputeStyle';
import LeftIconTextArea from '../left-icon-textarea/LeftIconTextArea';
import ActionButtons from '../../generals/ActionButtons/ActionButtons';

const AddDispute: React.FC = () => {
  const [rating, setRating] = useState<number>();

  return (
    <StepOneWrapper>
      <StepOneContentWrapper>
        <StepOneHead>
          You have chosen to dispute your stay at [property name]. Please
          provide a brief summary of your issues, along with any photograph or
          video evidence below.
        </StepOneHead>
      </StepOneContentWrapper>
      <LeftIconTextArea
        placeholder="Typable text box, they can type anything here. Also allows users to attach photos."
        icon={BoardIcon}
      />
      <AttachFileInputWrapper>
        <AttachFileInput type="file" placeholder="Attach file" />
        <AttachFileInputImg src={AttachIcon} />
      </AttachFileInputWrapper>
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

export default AddDispute;
