import React, { useState, useEffect } from 'react';
import RequestsCard from './components/RequestsCard/RequestsCard';
import MessageComponent from './components/MessageComponent/MessageComponent';

import { Container, MainRow } from './RequestsStyle';

import PageHeading, {
  HEADING_CONTENT_ALIGNMENT,
  HEADING_SUBTITLE_POSITION,
} from '../../../../generals/page-heading/PageHeading';
import { getRequests } from '../../../../../state/profile/profileActions';
import { useAppDispatch, useAppSelector } from '../../../../../state/hooks';
import { CenterLoading } from '../../../home-page/components/hot-deals/HotDealsStyle';
import { CircleLoader } from 'react-spinners';
import { NoDataFound } from '../properties/PropertiesStyle';

interface HotDealsProps {
  isOwner?: boolean;
}

const HotDeals: React.FC<HotDealsProps> = (props: any) => {
  const [isChatViewVisible, setChatViewVisible] = useState(false);
  const dispatch = useAppDispatch();
  const { root, profileReducer: profile } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(getRequests());
  }, []);

  return (
    <Container>
      <MainRow>
        <PageHeading
          heading="Inbox"
          subtitle=""
          subtitlePosition={HEADING_SUBTITLE_POSITION.TOP}
          backgroundText="Requests"
          alignment={HEADING_CONTENT_ALIGNMENT.LEFT}
        />
      </MainRow>

      {!isChatViewVisible && (
        <MainRow>
          {root.isLoading ? (
            <CenterLoading>
              <CircleLoader />
            </CenterLoading>
          ) : profile.requests?.length ? (
            profile.requests.map((item: any, index: number) => {
              return (
                <RequestsCard
                  key={index}
                  {...item}
                  setChatViewVisible={setChatViewVisible}
                  isOwner={props.isOwner}
                />
              );
            })
          ) : (
            <CenterLoading>
              <NoDataFound>No Request Found</NoDataFound>
            </CenterLoading>
          )}
        </MainRow>
      )}

      {isChatViewVisible && (
        <MainRow>
          <MessageComponent isOwner={props.isOwner} />
        </MainRow>
      )}
    </Container>
  );
};

HotDeals.defaultProps = {
  isOwner: false,
};

export default HotDeals;
