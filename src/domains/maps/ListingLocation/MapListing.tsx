import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  // minWidth: '300px',
  width: '100%',
  height: '100%',
  minHeight: '400px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 29,
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MapListing: React.FC = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyCjgjyqRYW0qi9U6oiX5IbnR_enFTsrvSg">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      ></GoogleMap>
    </LoadScript>
  );
};

export default MapListing;
