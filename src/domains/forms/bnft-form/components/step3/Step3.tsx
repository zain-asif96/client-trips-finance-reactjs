import React, { useState, Fragment } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';
import ActionButtons from '../../../../generals/ActionButtons/ActionButtons';

type VoidFunction = () => void;

interface StepProps {
  updateData: (name: string, value: string) => void;
  handleSubmit?: VoidFunction;
  nextStep?: VoidFunction;
  previousStep?: VoidFunction;
}

const containerStyle = {
  width: '100%',
  height: '550px',
};

const initial = {
  lat: 40.7128,
  lng: -74.006,
};

const loc2 = {
  lat: 40.8128,
  lng: -74.106,
};

const array = [initial, loc2];

const Step8: React.FC<StepProps> = ({ nextStep, previousStep }: StepProps) => {
  const [center, setCenter] = useState(initial);

  return (
    <Fragment>
      <LoadScript googleMapsApiKey="AIzaSyCjgjyqRYW0qi9U6oiX5IbnR_enFTsrvSg">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onClick={(e: any) => {
            setCenter(e.latLng);
          }}
        >
          {array.map((loc, index) => (
            <Marker key={index} position={loc}></Marker>
          ))}
        </GoogleMap>
      </LoadScript>

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
    </Fragment>
  );
};

export default Step8;
