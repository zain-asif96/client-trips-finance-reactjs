import React, { useState } from 'react';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';
import { StepEightWrapper } from './Step2Style';
import RightIconInputField from '../../../../generals/right_icon_input_field/RightIconInputField';
import { ErrorText } from '../../../../generals/error_message/ErrorMessageStyles';
import { PropertyProps } from '../../../../../state/properties/propertiesActionsType';

type VoidFunction = () => void;

interface StepProps {
  updateData?: (updatedData: PropertyProps) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  formData: PropertyProps;
  previousStep?: VoidFunction;
  step: number;
  isBNFT: boolean;
}

// const containerStyle = {
//   width: '100%',
//   height: '550px',
// };

// const initial = {
//   lat: 40.7128,
//   lng: -74.006,
// };

// const loc2 = {
//   lat: 40.8128,
//   lng: -74.106,
// };

// const array = [initial, loc2];

const Step8: React.FC<StepProps> = ({
  nextStep,
  previousStep,
  step,
  formData,
  updateData,
  isBNFT,
}: StepProps) => {
  const [formErrorState, setFormErrorState] = useState({
    imagePaths: '',
  });

  const setFieldValues = (field: string, value: string, index: number) => {
    const updatedValue: string[] = formData.imagePaths;
    updatedValue[index] = value;
    const updatedData = {
      ...formData,
      [field]: updatedValue,
    };
    if (updateData) updateData(updatedData);
  };

  const checkFormValid = () => {
    let inValid = true;
    const tempData = formData?.imagePaths?.filter((val) => val);
    const errMessage = !tempData.length ? 'Please put atleast one url' : '';
    if (errMessage) {
      inValid = false;
    }
    setFormErrorState((prev) => ({
      ...prev,
      imagePaths: errMessage,
    }));
    return inValid;
  };

  return (
    <StepEightWrapper>
      {[1, 2, 3, 4, 5, 6, 7].map((val, index) => (
        <RightIconInputField
          key={index}
          placeholder={`Image URL ${val}`}
          value={
            formData?.imagePaths?.length ? formData.imagePaths[val - 1] : ''
          }
          onChange={(value) => setFieldValues('imagePaths', value, val - 1)}
          isDisable={isBNFT}
        />
      ))}
      {formErrorState.imagePaths && (
        <ErrorText>{formErrorState.imagePaths}</ErrorText>
      )}
      <ActionButtons
        leftBtnText="Back"
        rightBtnText="Next"
        rightBtnClick={() => {
          if (nextStep && (checkFormValid() || isBNFT)) nextStep();
        }}
        leftBtnClick={() => {
          if (previousStep) previousStep();
        }}
        step={step}
      />
    </StepEightWrapper>
    // TODO: will use later <Fragment>
    //   <LoadScript googleMapsApiKey="AIzaSyCjgjyqRYW0qi9U6oiX5IbnR_enFTsrvSg">
    //     <GoogleMap
    //       mapContainerStyle={containerStyle}
    //       center={center}
    //       zoom={10}
    //       onClick={(e) => {
    //         console.log(e.latLng.lat(), 'click');
    //         setCenter(e.latLng);
    //       }}
    //     >
    //       {array.map((loc, index) => (
    //         <Marker key={index} position={loc}></Marker>
    //       ))}
    //     </GoogleMap>
    //   </LoadScript>
    // </Fragment>
  );
};

export default Step8;
