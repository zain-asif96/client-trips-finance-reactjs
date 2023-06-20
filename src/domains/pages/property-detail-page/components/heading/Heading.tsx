import React, { Fragment } from 'react';
import {
  MainRow,
  HeadersContainer,
  Line,
  ProfileIcon,
  ListingHeading,
  ListingSubheading,
  ListingParagraph,
  ColumnOne,
  ColumnTwo,
  RowOne,
  RowTwo,
} from './HeadingStyle';

import image from '../../../../../assets/images/user-thumbnail.png';

const HEADERS_DATA = {
  propertyName: 'HAPPY NEST COTTAGE',
  propertyLocation: "Papirnya, L'vivs'ka oblast, Ukraine",
  title: 'Entire chalet hosted by Iryna',
  capacity: {
    guests: 4,
    bedrooms: 2,
    beds: 2,
    baths: 1,
  },
};

const Headers: React.FC = (props: any) => (
  <Fragment>
    <HeadersContainer>
      <MainRow>
        <ColumnOne>
          <RowOne>
            <div>
              <ListingHeading>{props?.name}</ListingHeading>
              <ListingParagraph>
                {props?.property?.address?.address1}
              </ListingParagraph>
            </div>
          </RowOne>
          <Line />
          <RowTwo>
            <div>
              <ListingSubheading>{`Hosted by ${
                props?.property?.account?.firstName || ''
              } ${
                props?.property?.account?.lastName || ''
              } `}</ListingSubheading>
              <ListingParagraph>
                {`${props?.maxGuests} guests · ${props?.bedrooms} bedrooms · ${props?.beds} beds · ${props?.bathrooms} bath`}
              </ListingParagraph>
            </div>
            <div>
              <ProfileIcon
                src={props?.property?.account?.imagePath || image}
                alt="profileIcon"
              />
            </div>
          </RowTwo>
          <Line />
        </ColumnOne>

        <ColumnTwo></ColumnTwo>
      </MainRow>
    </HeadersContainer>
  </Fragment>
);

export default Headers;
