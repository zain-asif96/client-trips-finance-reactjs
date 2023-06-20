import React, { Fragment } from 'react';
import {
  MainRow,
  HostInfoContainer,
  HostInfoParagraph,
  Host,
  HostInfoBody,
  HostInfoHeader,
  HostInfoHeading,
  HostInfoSubHeading,
  HostInfoDate,
  HostReview,
  SubHeadingRow,
  Response,
  Button,
  ButtonText,
  ShowMore,
  ProfileIcon,
  VectorIcon,
} from './HostInfoStyle';
import StarRatings from 'react-star-ratings';
import profileIcon from '../../../../../assets/images/rectangle-56.png';
import vector from '../../../../../assets/images/Vector.png';

const HOSTINFO_DATA = {
  title: 'Hosted by Iryna',
  joinedDate: 'December 2019',
  rating: 5.0,
  totalReviews: 8,
  IDverified: true,
  description:
    'Praesent in suscipit tortor. In vel vehicula lorem, et convallis mi. Sed tempor purus turpis, a blandit justo consectetur ut. Fusce ultricies lacinia congue. Aliquam a ante sollicitudin, lacinia dui ut, facilisis ligula. Nulla accumsan, lacus in ornare facilisis, sem urna tristique magna, eu porta justo sem non lorem. Ut malesuada ornare commodo. Etiam interdum laoreet sagittis. Cras aliquet molestie eleifend. Cras euismod nulla quis aliquam eleifend. Vestibulum eu fermentum velit. Aliquam vulputate, risus ac lobortis varius, nisi diam gravida magna, at convallis mi mi non metus. Morbi et dolor sem. Cras sed vestibulum mauris. In at sapien tortor. Maecenas ante urna, iaculis non luctus et, rutrum tincidunt lectus.',
  responseRate: '100%',
  responseTime: 'within an hour',
};

const HostInfo: React.FC = () => (
  <Fragment>
    <HostInfoContainer>
      <MainRow>
        <HostInfoHeader>
          <ProfileIcon src={profileIcon} alt="profileIcon" />
          <Host>
            <HostInfoHeading>{HOSTINFO_DATA.title}</HostInfoHeading>
            <HostInfoDate>Joined in {HOSTINFO_DATA.joinedDate}</HostInfoDate>
          </Host>
        </HostInfoHeader>
        <HostInfoSubHeading>
          <SubHeadingRow>
            <StarRatings
              rating={5.0}
              starRatedColor="#E54D42"
              starDimension="16px"
              numberOfStars={1}
              name="rating"
            />
            <HostReview>
              {HOSTINFO_DATA.rating} {`(${HOSTINFO_DATA.totalReviews} reviews)`}
            </HostReview>
          </SubHeadingRow>
          <SubHeadingRow>
            <VectorIcon src={vector} alt="vector" />
            <HostReview>
              {HOSTINFO_DATA.IDverified ? 'Property verified' : null}
            </HostReview>
          </SubHeadingRow>
        </HostInfoSubHeading>
        <HostInfoBody>{HOSTINFO_DATA.description}</HostInfoBody>
        <HostInfoBody>
          <ShowMore>Show more</ShowMore>
        </HostInfoBody>
      </MainRow>
      <Response>
        <HostInfoParagraph>
          Response rate: {HOSTINFO_DATA.responseRate}
        </HostInfoParagraph>

        <HostInfoParagraph>
          Response time: {HOSTINFO_DATA.responseTime}
        </HostInfoParagraph>
      </Response>
      <Button>
        <ButtonText>Contact host</ButtonText>
      </Button>
    </HostInfoContainer>
  </Fragment>
);

export default HostInfo;
