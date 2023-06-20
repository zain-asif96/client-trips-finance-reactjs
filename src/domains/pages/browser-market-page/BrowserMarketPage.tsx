import React, { useState } from 'react';

import {
  BannerBg,
  Container,
  BannerBoxContainer,
  BannerBoxRow,
  MainRow,
} from './BrowserMarketPageStyle';
import CryptoBox from './components/crypto-box/CryptoBox';
import TripForm from './components/trip-form/TripForm';
import Header from '../../generals/header/Header';
import HotDeals from '../home-page/components/hot-deals/HotDeals';
import PropertyListing from '../property-listing-page/components/property-listing/PropertyListing';
// import { getTripDetails } from '../../../state/properties/propertiesActions';
// import { useAppDispatch } from '../../../state/hooks';

export interface TripFormProps {
  checkIn: string;
  checkOut: string;
  guests: string;
  district: { value: string } | string | any;
}

// will be replace when search broser
const BrowserMarketPage: React.FC = () => {
  const [findTrip, setFindTrip] = useState<TripFormProps | any>(null);
  // const dispatch = useAppDispatch();

  const fetchTripDetails = (formData: TripFormProps) => {
    // dispatch(getTripDetails({...formData, district: (formData.district?.value || '')}));
    const searchData: any = { ...formData };
    if (searchData.checkIn) {
      searchData.checkIn = new Date(formData.checkIn);
    } else {
      delete searchData.checkIn;
    }
    if (searchData.checkOut) {
      searchData.checkOut = new Date(formData.checkOut);
    } else {
      delete searchData.checkOut;
    }
    if (searchData.guests) {
      searchData.guests = Number(searchData.guests);
    } else {
      delete searchData.guests;
    }
    setFindTrip(searchData);
    console.log(formData);
  };

  return (
    <Container>
      <Header />
      <BannerBg>
        <BannerBoxContainer>
          <BannerBoxRow>
            <TripForm submitForm={(formData) => fetchTripDetails(formData)} />
            <CryptoBox />
          </BannerBoxRow>
        </BannerBoxContainer>
      </BannerBg>
      <MainRow>
        {/* <BrowseMap /> */}
        {findTrip ? (
          <PropertyListing tripSearchQuery={findTrip} />
        ) : (
          <HotDeals />
        )}
      </MainRow>
      {/* <Footer /> */}
    </Container>
  );
};

export default BrowserMarketPage;
