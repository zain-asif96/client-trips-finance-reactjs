import React from 'react';
import Map from './Map';
import { Main, Title, MapContainer } from './BrowseMapStyle';

const BrowseMap: React.FC = () => {
  return (
    <Main>
      <Title>Click Here for Map of Available Rentals</Title>
      <MapContainer>
        <Map />
      </MapContainer>
    </Main>
  );
};

export default BrowseMap;
