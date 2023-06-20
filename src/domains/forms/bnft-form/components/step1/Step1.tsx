import React from 'react';
import { StepOneWrapper, StepOneHead, AddressButton } from './Step1Style';
type VoidFunction = () => void;

interface StepProps {
  updateData?: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}
const Step1: React.FC<StepProps> = ({ nextStep }: StepProps) => {
  const addressListing = [
    {
      name: 'Address 1',
      id: 1,
    },
    {
      name: 'Address 2',
      id: 2,
    },
    {
      name: 'Address 3',
      id: 3,
    },
    {
      name: 'Address 4',
      id: 4,
    },
    {
      name: 'Address 5',
      id: 5,
    },
  ];

  return (
    <StepOneWrapper>
      <StepOneHead>
        Let’s create your BNFT! Which of your properties do you want to list?
      </StepOneHead>

      {addressListing.map((item) => {
        return (
          <AddressButton
            key={item.id}
            onClick={() => {
              if (nextStep) nextStep();
            }}
          >
            <span>{item.name}</span>
          </AddressButton>
        );
      })}

      {/*  <ActionButtons
      
        rightBtnText="Next"
        rightBtnClick={() => {
          if (nextStep) nextStep();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
      /> */}
    </StepOneWrapper>
  );
};

export default Step1;
