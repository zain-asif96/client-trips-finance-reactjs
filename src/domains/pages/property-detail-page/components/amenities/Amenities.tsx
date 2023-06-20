import React, { useEffect, useState } from 'react';

import {
  Container,
  AmenitiesHeading,
  AmenitiesContainer,
  Button,
} from './AmenitiesStyle';
import AmenityItem from './components/AmenityItem';

interface Props {
  amenityList: { name: string; id: number }[];
}

const Amenities: React.FC<Props> = ({ amenityList }: Props) => {
  const [show, setShow] = useState<boolean>(false);
  const [showAmenityList, setShowAmenityList] = useState<
    { name: string; id: number }[]
  >(amenityList);
  const [showingMore, setShowingMore] = useState<boolean>(false);

  useEffect(() => {
    if (amenityList.length > 15) {
      shrinkAmenityList();
      setShow(true);
    }
    setShowAmenityList(amenityList);
  }, [amenityList]);

  const shrinkAmenityList = () => {
    setShowAmenityList(amenityList.slice(0, 15));
  };

  const expandAmenityList = () => {
    setShowAmenityList(amenityList);
  };

  const toggle = () => {
    if (showingMore) {
      setShowingMore(false);
      shrinkAmenityList();
    } else {
      setShowingMore(true);
      expandAmenityList();
    }
  };

  return (
    <Container>
      <AmenitiesHeading>Amenities</AmenitiesHeading>
      <AmenitiesContainer>
        {showAmenityList.map((listItem, index) => (
          <AmenityItem key={index} icon="bullet" text={listItem.name} />
        ))}
      </AmenitiesContainer>
      {show ? (
        <Button onClick={toggle}>
          {showingMore ? 'Show less amenities' : 'Show all amenities'}
        </Button>
      ) : null}
    </Container>
  );
};

export default Amenities;
