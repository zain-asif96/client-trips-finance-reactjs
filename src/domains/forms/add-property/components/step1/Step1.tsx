import React from 'react';

// THERE WILL BE 6 STEPS FOR THIS ONE.

type VoidFunction = () => void;

// Note: not every Step will use all these functions.
// This is JUST an example.
interface StepProps {
  updateData: (name: string, value: string) => void;
  handleSubmit: VoidFunction;
  nextStep: VoidFunction;
  previousStep: VoidFunction;
}

// Don't bother trying to abstract these form steps.
// Simply make a new component for each page and pass them in as steps to keep it nice and simple.
const Step1: React.FC<StepProps> = ({
  updateData,
  handleSubmit,
  nextStep,
  previousStep,
}: StepProps) => {
  return (
    <div>
      Render the component for the first step here
      <div onClick={() => updateData('id', 'just an example')}>
        Add your data
      </div>
      <div onClick={previousStep}>Back</div>
      <div onClick={nextStep}>Next</div>
      <div onClick={handleSubmit}>Submit</div>
    </div>
  );
};

export default Step1;
