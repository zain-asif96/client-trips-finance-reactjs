import React from 'react';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';
import {
  StepFiveWrapper,
  StepFiveDesc,
  StepFiveHead,
  StepFiveBoxWrapper,
} from './Step5Style';

type VoidFunction = () => void;

interface StepProps {
  updateData: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}
const Step5: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  return (
    <StepFiveWrapper>
      <StepFiveHead>Please read and agree to our user agreement.</StepFiveHead>
      <StepFiveBoxWrapper>
        <StepFiveDesc>
          Praesent in suscipit tortor. In vel vehicula lorem, et convallis mi.
          Sed tempor purus turpis, a blandit justo consectetur ut. Fusce
          ultricies lacinia congue. Aliquam a ante sollicitudin, lacinia dui ut,
          facilisis ligula. Nulla accumsan, lacus in ornare facilisis, sem urna
          tristique magna, eu porta justo sem non lorem. Ut malesuada ornare
          commodo. Etiam interdum laoreet sagittis. Cras aliquet molestie
          eleifend. Cras euismod nulla quis aliquam eleifend. Vestibulum eu
          fermentum velit. Aliquam vulputate, risus ac lobortis varius, nisi
          diam gravida magna, at convallis mi mi non metus. Morbi et dolor sem.
          Cras sed vestibulum mauris. In at sapien tortor. Maecenas ante urna,
          iaculis non luctus et, rutrum tincidunt lectus. Praesent in suscipit
          tortor. In vel vehicula lorem, et convallis mi. Sed tempor purus
          turpis, a blandit justo consectetur ut. Fusce ultricies lacinia
          congue. Aliquam a ante sollicitudin, lacinia dui ut, facilisis ligula.
          Nulla accumsan, lacus in ornare facilisis, sem urna tristique magna,
          eu porta justo sem non lorem. Ut malesuada ornare commodo. Etiam
          interdum laoreet sagittis. Cras aliquet molestie eleifend. Cras
          euismod nulla quis aliquam eleifend. Vestibulum eu fermentum velit.
          Aliquam vulputate, risus ac lobortis varius, nisi diam gravida magna,
          at convallis mi mi non metus. Morbi et dolor sem. Cras sed vestibulum
          mauris. In at sapien tortor. Maecenas ante urna, iaculis non luctus
          et, rutrum tincidunt lectus.
        </StepFiveDesc>
      </StepFiveBoxWrapper>
      <ActionButtons
        leftBtnText="Back"
        rightBtnText="Next"
        rightBtnClick={() => {
          if (nextStep) nextStep();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
      />
    </StepFiveWrapper>
  );
};

export default Step5;
