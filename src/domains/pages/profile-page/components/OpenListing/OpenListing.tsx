import React, { useEffect } from 'react';
import { Container, MainRow } from './OpenListingStyle';

import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
  HEADING_SUBTITLE_POSITION,
} from '../../../../generals/page-heading/PageHeading';
import PropertyCard from '../properties/components/property-card/PropertyCard';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { getMyListings } from '../../../../../state/profile/profileActions';
import { CenterLoading } from '../../../home-page/components/hot-deals/HotDealsStyle';
import { CircleLoader } from 'react-spinners';
import { NoDataFound } from '../properties/PropertiesStyle';

const HotDeals: React.FC = () => {
  const dispatch = useAppDispatch();
  const { root, profileReducer: profile } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getMyListings());
  }, []);

  return (
    <Container>
      <MainRow>
        <PageHeading
          heading="Open Listings"
          subtitle=""
          subtitlePosition={HEADING_SUBTITLE_POSITION.TOP}
          backgroundText="Open Listings"
          alignment={HEADING_CONTENT_ALIGNMENT.LEFT}
        />
      </MainRow>
      <MainRow>
        {root.isLoading ? (
          <CenterLoading>
            <CircleLoader />
          </CenterLoading>
        ) : profile.myListings?.length ? (
          profile.myListings.map((item: any, index: number) => {
            const params = {
              ...item,
              country:
                item.property?.address?.country || item.destination_country,
              name: item?.name || item.destination_name,
              checkIn: item?.checkIn || item.start_date,
              checkOut: item?.checkOut || item.end_date,
              price: item?.price || item.destination_price,
              imageURL: item.property?.imagePaths?.length
                ? item.imagePaths[0]
                : item.destination_image,
            };
            return (
              <PropertyCard key={index} type={'hot-deal-locale'} {...params} />
            );
          })
        ) : (
          <CenterLoading>
            <NoDataFound>No Listing Found</NoDataFound>
          </CenterLoading>
        )}
      </MainRow>
    </Container>
  );
};

export default HotDeals;
