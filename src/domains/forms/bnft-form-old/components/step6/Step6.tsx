import React from 'react';
import {
  StepSixWrapper,
  FieldsDataOuterWrapper,
  FieldsDataInnerWrapper,
  FieldsIcon,
  FieldsContentWrapper,
  FieldsContent,
  ActionBtnContainer,
  NextBtn,
  PrevBtn,
  StepSixHead,
  StepSixBoxWrapper,
  CalendarContainer,
} from './Step6Style';
import LocationIcon from '../../../../../assets/images/location-red-icon.png';
import CalendarReview from '../../../../FinalPurchase/CalendarReview/CalendarReview';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

const Step6: React.FC<StepProps> = ({ previousStep }: StepProps) => {
  return (
    <StepSixWrapper>
      <StepSixHead>Let’s review the details!</StepSixHead>
      <StepSixBoxWrapper>
        <FieldsDataOuterWrapper>
          <FieldsDataInnerWrapper>
            <FieldsIcon src={LocationIcon} />
            <FieldsContentWrapper>
              <FieldsContent>Your address 1</FieldsContent>
              <FieldsContent>Farmingdale NY 11735</FieldsContent>
            </FieldsContentWrapper>
          </FieldsDataInnerWrapper>

          <FieldsDataInnerWrapper>
            <FieldsIcon src={LocationIcon} />
            <FieldsContentWrapper>
              <FieldsContent>Your address 1</FieldsContent>
              <FieldsContent>Farmingdale NY 11735</FieldsContent>
            </FieldsContentWrapper>
          </FieldsDataInnerWrapper>

          <FieldsDataInnerWrapper>
            <FieldsIcon src={LocationIcon} />
            <FieldsContentWrapper>
              <FieldsContent>Your address 1</FieldsContent>
              <FieldsContent>Farmingdale NY 11735</FieldsContent>
            </FieldsContentWrapper>
          </FieldsDataInnerWrapper>
        </FieldsDataOuterWrapper>
        <CalendarContainer>
          <CalendarReview />
        </CalendarContainer>
      </StepSixBoxWrapper>
      <ActionBtnContainer>
        <PrevBtn onClick={previousStep}>Back</PrevBtn>
        <NextBtn>That’s all correct, I’m ready to buy my BNFT!</NextBtn>
      </ActionBtnContainer>
    </StepSixWrapper>
  );
};

export default Step6;
