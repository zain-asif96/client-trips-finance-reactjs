import React, { useEffect } from 'react';
import { Container, MainRow, NoDataFound } from './PropertiesStyle';
import PropertyCard from './components/property-card/PropertyCard';
import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
  HEADING_SUBTITLE_POSITION,
} from '../../../../generals/page-heading/PageHeading';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { getMyProperties } from '../../../../../state/profile/profileActions';
import { CenterLoading } from '../../../home-page/components/hot-deals/HotDealsStyle';
import { CircleLoader } from 'react-spinners';

const HotDeals: React.FC = () => {
  const dispatch = useAppDispatch();
  const { root, profileReducer: profile } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getMyProperties());
  }, []);

  return (
    <Container>
      <MainRow>
        <PageHeading
          heading="Properties"
          subtitle=""
          subtitlePosition={HEADING_SUBTITLE_POSITION.TOP}
          backgroundText="Properties"
          alignment={HEADING_CONTENT_ALIGNMENT.LEFT}
        />
      </MainRow>
      <MainRow>
        {root.isLoading ? (
          <CenterLoading>
            <CircleLoader />
          </CenterLoading>
        ) : profile.myProperties?.length ? (
          profile.myProperties.map((item: any, index: number) => {
            const params = {
              ...item,
              country: item.address?.country || item.destination_country,
              name: item.baseListing?.name || item.destination_name,
              checkIn: item.baseListing?.checkIn || item.start_date,
              checkOut: item.baseListing?.checkOut || item.end_date,
              price: item.baseListing?.price || item.destination_price,
              imageURL: item.imagePaths?.length
                ? item.imagePaths[0]
                : item.destination_image,
            };
            return <PropertyCard key={index} type={'listing'} {...params} />;
          })
        ) : (
          <CenterLoading>
            <NoDataFound>No Property Found</NoDataFound>
          </CenterLoading>
        )}
      </MainRow>
    </Container>
  );
};

export default HotDeals;
