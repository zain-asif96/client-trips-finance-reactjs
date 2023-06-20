import React from 'react';
import MapListing from './MapListing';
import { Main, Title, MapContainer, Location } from './ListingLocationStyle';

const ListingLocation: React.FC = () => {
  return (
    <Main>
      <Title>Location</Title>
      <MapContainer>
        <MapListing />
      </MapContainer>
      <Location>Especify Location</Location>
    </Main>
  );
};

export default ListingLocation;
