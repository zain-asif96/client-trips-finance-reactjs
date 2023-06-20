import React, { useEffect } from 'react';
import { Container, MainRow } from './BookingStyle';
import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
  HEADING_SUBTITLE_POSITION,
} from '../../../../generals/page-heading/PageHeading';
import PropertyCard from '../properties/components/property-card/PropertyCard';
import { getMyBookings } from '../../../../../state/profile/profileActions';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { NoDataFound } from '../properties/PropertiesStyle';
import { CenterLoading } from '../../../home-page/components/hot-deals/HotDealsStyle';
import { CircleLoader } from 'react-spinners';

const HotDeals: React.FC = () => {
  const dispatch = useAppDispatch();
  const { root, profileReducer: profile } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getMyBookings());
  }, []);
  return (
    <Container>
      <MainRow>
        <PageHeading
          heading="Bookings"
          subtitle=""
          subtitlePosition={HEADING_SUBTITLE_POSITION.TOP}
          backgroundText="Bookings"
          alignment={HEADING_CONTENT_ALIGNMENT.LEFT}
        />
      </MainRow>
      <MainRow>
        {root.isLoading ? (
          <CenterLoading>
            <CircleLoader />
          </CenterLoading>
        ) : profile.myBookings?.length ? (
          profile.myBookings.map((item: any, index: number) => {
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
            return <PropertyCard key={index} {...params} />;
          })
        ) : (
          <CenterLoading>
            <NoDataFound>No Booking Found</NoDataFound>
          </CenterLoading>
        )}
      </MainRow>
    </Container>
  );
};

export default HotDeals;
