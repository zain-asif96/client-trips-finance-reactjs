import React, { useState } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '540px',
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

const Map: React.FC = () => {
  const [center, setCenter] = useState(initial);

  return (
    <LoadScript googleMapsApiKey="AIzaSyCjgjyqRYW0qi9U6oiX5IbnR_enFTsrvSg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onClick={(e: any) => {
          console.log(e.latLng.lat(), 'click');
          setCenter(e.latLng);
        }}
      >
        {array.map((loc, index) => (
          <Marker key={index} position={loc}></Marker>
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
