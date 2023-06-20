import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import Rome from '../../../../../assets/images/italy-rome.png';
import PortoCheli from '../../../../../assets/images/greece.png';
import TajMahal from '../../../../../assets/images/india-tajmahal.png';
import Kioto from '../../../../../assets/images/japan-kioto.png';
import Sydney from '../../../../../assets/images/australia-sydney.png';
import Bangkok from '../../../../../assets/images/thailand-bangkok.png';
import Barcelona from '../../../../../assets/images/spain-barcelona.png';
import Yogyakarta from '../../../../../assets/images/indonesia-yogyakarta.png';
import Zermatt from '../../../../../assets/images/switzerland-zermatt.png';
import Rabat from '../../../../../assets/images/marocco-rabatt.png';
import { useLocation } from 'react-router-dom';

import { Container, MainRow } from './PropertyListingStyle';
import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
} from '../../../../generals/page-heading/PageHeading';
import PropertyCard from '../../../profile-page/components/properties/components/property-card/PropertyCard';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import {
  getHotDealsLocale,
  getTripDetails,
} from '../../../../../state/properties/propertiesActions';
import { CenterLoading } from '../../../home-page/components/hot-deals/HotDealsStyle';
import { CircleLoader } from 'react-spinners';
import { TripFormProps } from '../../../browser-market-page/BrowserMarketPage';

export const HOT_DEALS_LOCALE_DATA = [
  {
    destination_image: Rome,
    destination_country: 'Italy',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Rome',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: PortoCheli,
    destination_country: 'Greece',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Porto Cheli',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: TajMahal,
    destination_country: 'India',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Taj Mahal',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: Kioto,
    destination_country: 'Japan',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Kioto',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: Sydney,
    destination_country: 'Australia',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Sydney',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: Bangkok,
    destination_country: 'Thailand',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Bangkok',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: Barcelona,
    destination_country: 'Spain',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Barcelona',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: Yogyakarta,
    destination_country: 'Indonesia',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Yogyakarta',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: Zermatt,
    destination_country: 'Switzerland',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Zermatt',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
  {
    destination_image: Rabat,
    destination_country: 'Marocco',
    destination_name: '1185 Lake Forest City, TN',
    destination_price: '375.00',
    district: 'Rabat',
    start_date: '12.06.2021',
    end_date: '22.06.2021',
    id: nanoid(10),
  },
];
const HotDeals: React.FC<{ tripSearchQuery?: TripFormProps }> = ({
  tripSearchQuery,
}) => {
  const dispatch = useAppDispatch();
  const { hash } = useLocation();
  const [pageHeading, setPageHeading] = useState('');
  const [country, setCountry] = useState('');
  const [district, setDistrict] = useState('');
  const { root, propertiesReducer: properties } = useAppSelector(
    (state) => state,
  );

  useEffect(() => {
    if (hash) {
      const headerText = hash.replace('%20', ' ').replace('#', '');
      setPageHeading(headerText);
      const [country, district] = headerText.split(',');
      setCountry(country);
      setDistrict(district);
      dispatch(getHotDealsLocale(district));
    }
  }, []);

  useEffect(() => {
    if (tripSearchQuery) {
      setCountry(tripSearchQuery.district.label);
      setPageHeading(tripSearchQuery.district.label);
      dispatch(
        getTripDetails({
          ...tripSearchQuery,
          district: tripSearchQuery.district.value,
        }),
      );
    }
  }, [tripSearchQuery]);

  return (
    <Container>
      <MainRow>
        <PageHeading
          heading={pageHeading}
          backgroundText={pageHeading}
          alignment={HEADING_CONTENT_ALIGNMENT.LEFT}
        />
      </MainRow>
      <MainRow>
        {root.isLoading ? (
          <CenterLoading>
            <CircleLoader />
          </CenterLoading>
        ) : (
          properties?.hotDealsLocale.map((item: any, index: number) => {
            const params = {
              id: item?.id,
              name: item?.name,
              country,
              district,
              checkIn: item?.checkIn,
              checkOut: item?.checkOut,
              price: item?.price,
              imageURL: item?.property?.imagePaths?.length
                ? item?.property?.imagePaths[0]
                : '',
            };
            return (
              <PropertyCard key={index} type={'hot-deal-locale'} {...params} />
            );
          })
        )}
      </MainRow>
    </Container>
  );
};

export default HotDeals;
