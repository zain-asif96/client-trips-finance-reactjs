import React, { Fragment, useEffect, useState } from 'react';
import { Container, MainRow, Col1, Col2 } from './PropertyDetailPageStyle';
import Header from '../../generals/header/Header';
import ImageCollage from './components/image-collage/ImageCollage';
import Heading from './components/heading/Heading';
import CheckAvailability from './components/check-availability/CheckAvailability';
import Description from './components/description/Description';
import SleepingArrangement from './components/sleeping-arrangement/SleepingArrangement';
import Amenities from './components/amenities/Amenities';
import ThingsToKnow from './components/things-to-know/ThingsToKnow';
import Info from './components/info/Info';
import { Line } from './components/heading/HeadingStyle';
import { useLocation } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../state/hooks';
import {
  getBlackOutDays,
  getBlackOutDaysSuccess,
  getPropertyDetails,
} from '../../../state/properties/propertiesActions';
import { IRootState } from '../../../state/reducers';

const PropertyListingPage: React.FC = () => {
  const { hash } = useLocation();
  const dispatch = useAppDispatch();
  const { propertiesReducer: properties } = useAppSelector((state) => state);
  const { auth } = useAppSelector((state: IRootState) => state.authReducer);
  const isAuthenticated = !!auth;
  const [propertyId, setPropertyId] = useState('');

  useEffect(() => {
    if (!hash) {
      return;
    }
    const propId = hash.replace('#', '');
    setPropertyId(propId);
    dispatch(getPropertyDetails(propId));
    dispatch(getBlackOutDays(propId));
  }, [hash]);

  useEffect(() => {
    return () => {
      dispatch(getBlackOutDaysSuccess([]));
    };
  }, []);

  return (
    <Fragment>
      <Header />
      <Container>
        {properties?.propertyDetails?.property?.imagePaths.length > 0 && (
          <ImageCollage
            imagePaths={properties?.propertyDetails?.property?.imagePaths || []}
          />
        )}

        <MainRow>
          <Col1>
            <Heading {...properties?.propertyDetails} />
            <Info />
            <Line />
            <Description
              description={properties?.propertyDetails?.description || ''}
            />
            <SleepingArrangement />
            <Line />
            <Amenities
              amenityList={properties?.propertyDetails?.amenities || []}
            />
            {/* <Line />
            <ListingCalendar /> */}
            {/* <Line />
            <ListingLocation />
            <Line />
            <Reviews />
            <Line />
            <HostInfo /> */}
            <Line />
            <ThingsToKnow
              houseRulesList={
                properties.propertyDetails?.houseRules
                  ? properties.propertyDetails?.houseRules.map(
                      (rule: { name: string }) => rule.name,
                    )
                  : []
              }
            />
          </Col1>
          <Col2>
            {isAuthenticated && (
              <CheckAvailability
                {...{
                  ...properties?.propertyDetails,
                  blackoutDays: properties?.blackoutDays,
                  propertyId,
                }}
              />
            )}
          </Col2>
        </MainRow>
      </Container>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default PropertyListingPage;
