import React, { useEffect } from 'react';
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

import { Container, MainRow, CenterLoading } from './HotDealsStyle';
import DealsCard from './components/deals-card/DealsCard';
import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
  HEADING_SUBTITLE_POSITION,
} from '../../../../generals/page-heading/PageHeading';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { CircleLoader } from 'react-spinners';
import { getHotDeals } from '../../../../../state/properties/propertiesActions';

export const HOT_DEALS_DATA = [
  {
    destination_image: Rome,
    country: 'Italy',
    district: 'Abruzzo',
    id: nanoid(10),
  },
  {
    destination_image: PortoCheli,
    country: 'Greece',
    district: 'Abruzzo',
    id: nanoid(10),
  },
  {
    destination_image: TajMahal,
    country: 'India',
    district: 'Taj Mahal',
    id: nanoid(10),
  },
  {
    destination_image: Kioto,
    country: 'Japan',
    district: 'Kioto',
    id: nanoid(10),
  },
  {
    destination_image: Sydney,
    country: 'Australia',
    district: 'Sydney',
    id: nanoid(10),
  },
  {
    destination_image: Bangkok,
    country: 'Thailand',
    district: 'Bangkok',
    id: nanoid(10),
  },
  {
    destination_image: Barcelona,
    country: 'Spain',
    district: 'Barcelona',
    id: nanoid(10),
  },
  {
    destination_image: Yogyakarta,
    country: 'Indonesia',
    district: 'Yogyakarta',
    id: nanoid(10),
  },
  {
    destination_image: Zermatt,
    country: 'Switzerland',
    district: 'Zermatt',
    id: nanoid(10),
  },
  {
    destination_image: Rabat,
    country: 'Marocco',
    district: 'Rabat',
    id: nanoid(10),
  },
];

const HotDeals: React.FC = () => {
  const dispatch = useAppDispatch();
  const { root, propertiesReducer: properties } = useAppSelector(
    (state) => state,
  );

  useEffect(() => {
    dispatch(getHotDeals());
  }, []);

  return (
    <Container>
      <MainRow>
        <PageHeading
          heading="Hot deals"
          subtitle="Best deals"
          subtitlePosition={HEADING_SUBTITLE_POSITION.TOP}
          backgroundText="Hot deals"
          alignment={HEADING_CONTENT_ALIGNMENT.LEFT}
        />
      </MainRow>
      <MainRow>
        {root.isLoading ? (
          <CenterLoading>
            <CircleLoader />
          </CenterLoading>
        ) : (
          properties.hotDeals?.map((item: any, index: number) => {
            return <DealsCard key={index} {...item} />;
          })
        )}
      </MainRow>
    </Container>
  );
};

export default HotDeals;
