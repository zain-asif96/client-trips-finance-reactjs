import React, { Fragment, useState, useEffect } from 'react';
import { MainRow } from './ProfilePageStyle';
import Header from '../../generals/header/Header';
import Properties from './components/properties/Properties';
import OpenListing from './components/OpenListing/OpenListing';
import Booking from './components/Booking/Booking';
import Requests from './components/Requests/Requests';
import {
  SelectedTab,
  UnSelectedTab,
  ContainerWrapper,
  TabbarView,
} from './ProfilePageStyle';

const PROFILE_TABS_NAME = {
  properties: 'properties',
  openListings: 'openListings',
  bookingsBNFT: 'bookingsBNFT',
  requests: 'requests',
};

const Profile: React.FC = () => {
  const PROFILE_TABS = [
    {
      id: 1,
      title: 'Properties',
      slug: PROFILE_TABS_NAME.properties,
      isRenter: false,
    },
    {
      id: 2,
      title: 'Open Listings',
      slug: PROFILE_TABS_NAME.openListings,
      isRenter: false,
    },
    {
      id: 3,
      title: 'Bookings',
      slug: PROFILE_TABS_NAME.bookingsBNFT,
      isRenter: true,
    },
    {
      id: 4,
      title: 'Inbox',
      slug: PROFILE_TABS_NAME.requests,
      isRenter: true,
    },
  ];

  const [isOwner, setOwner] = useState<boolean>(true);
  const [selectedTab, setSelectedTab] = useState<number>(1);

  useEffect(() => {
    setOwner(true);
  }, []);

  return (
    <Fragment>
      <Header />

      <MainRow>
        <TabbarView>
          {PROFILE_TABS.map(({ id, title, isRenter }) => {
            const isSelected = selectedTab === id;
            const renter = isRenter && !isOwner;

            if (renter) {
              if (isSelected) {
                return (
                  <SelectedTab
                    key={id}
                    onClick={() => {
                      setSelectedTab(id);
                    }}
                  >
                    {title}
                  </SelectedTab>
                );
              }

              return (
                <UnSelectedTab
                  key={id}
                  onClick={() => {
                    setSelectedTab(id);
                  }}
                >
                  {title}
                </UnSelectedTab>
              );
            } else if (isOwner) {
              if (isSelected) {
                return (
                  <SelectedTab
                    key={id}
                    onClick={() => {
                      setSelectedTab(id);
                    }}
                  >
                    {title}
                  </SelectedTab>
                );
              }

              return (
                <UnSelectedTab
                  key={id}
                  onClick={() => {
                    setSelectedTab(id);
                  }}
                >
                  {title}
                </UnSelectedTab>
              );
            }
          })}
        </TabbarView>

        <ContainerWrapper>
          {selectedTab === 1 && <Properties />}
          {selectedTab === 2 && <OpenListing />}
          {selectedTab === 3 && <Booking />}
          {selectedTab === 4 && <Requests isOwner={isOwner} />}
        </ContainerWrapper>
      </MainRow>
      {/* <Footer /> */}
    </Fragment>
  );
};

export default Profile;
