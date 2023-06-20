import React, { useState } from 'react';

// Form Steps
// Note: import the components from ./components for each step in a form here
import Step1 from './components/step1/Step1';
import Step2 from './components/step2/Step2';

// Note:
// Don't bother trying to abstract this form too much.
// Simply make a new component for each page and pass them in as steps to keep it nice and simple.
// We are happy for you to copy/paste this component as many times as needed for each use case.
// That may sound unintuitive, but we value DECOUPLING > DRY.
// So by all means, copy/paste rather than add imperative (hard to maintain) logic!

import { Container, MainRow } from './EmailVericationStyle';

// Put your various Step components here

const Steps = [Step1, Step2];
type Props = {
  address?: string;
};

const EmailVerification: React.FC<Props> = (props: Props) => {
  const [step, setStep] = useState<number>(0);

  const [data, setData] = useState<{
    id: string & Props;
  }>({
    id: '',
    ...props,
  });

  // For each form, make the data object whatever you need it to be.
  console.log(data);

  const updateData = (name: string, value: string) => {
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const previousStep = () => {
    setStep(Math.max(step - 1, 0));
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    // Trigger actions/hooks on submit here
  };

  const Step = Steps[step];

  return (
    <Container>
      <MainRow>
        <Step
          previousStep={previousStep}
          nextStep={nextStep}
          handleSubmit={handleSubmit}
          updateData={updateData}
        />
      </MainRow>
    </Container>
  );
};

export default EmailVerification;
