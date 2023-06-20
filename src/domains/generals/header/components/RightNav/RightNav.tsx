import React from 'react';
import {
  Ul,
  AnchorTag,
  BorderSaperateLine,
  ProfileName,
  EmailIcon,
  FoxIcon,
  ProfileView,
  ItemWrapper,
} from './RightNavStyle';
import Fox from '../../../../../assets/images/fox-icon.png';
import Email from '../../../../../assets/images/email-icon-black.png';
import { PATHS } from '../../../../../globals';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IRootState } from '../../../../../state/reducers';

const MENU_LINKS = [
  // {
  //   name: 'List my Property',
  //   link: PATHS.CreateBooking,
  // },
  {
    name: 'Browse Market',
    link: PATHS.BrowserMarket,
  },
  {
    name: 'FAQ',
    link: PATHS.Faqs,
  },
  {
    name: 'Hot Deals',
    link: PATHS.home,
  },
];

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const RightNav = ({ open }: { open: boolean }) => {
  const { auth } = useSelector((state: IRootState) => state.authReducer);
  const history = useHistory();
  return (
    <Ul open={open}>
      <AnchorTag
        onClick={() =>
          history.push(auth ? PATHS.CreateProperty : PATHS.CreateBooking)
        }
      >
        List my Property
      </AnchorTag>
      {MENU_LINKS.map((item, index) => {
        return (
          <li key={index}>
            <AnchorTag onClick={() => item.link && history.push(item.link)}>
              {item.name}
            </AnchorTag>
          </li>
        );
      })}
      {/* <li>
        <InputWrapper>
          <SearchInput type="text" placeholder="Search" />
          <SearchIcon src={Search} />
        </InputWrapper>
      </li> */}

      <ProfileView>
        <BorderSaperateLine />
        <ItemWrapper
          onClick={() =>
            history.push(auth ? PATHS.Profile : PATHS.CreateBooking)
          }
        >
          {/* <ProfileImage src={Profile} />
          <ProfileName>Addy</ProfileName> */}
          {auth ? (
            <>
              <ProfileName>Profile</ProfileName>
              <EmailIcon src={Email} />
            </>
          ) : (
            <>
              <ProfileName>Connect Wallet</ProfileName>
              <FoxIcon src={Fox} />
            </>
          )}
        </ItemWrapper>
      </ProfileView>
    </Ul>
  );
};
export default RightNav;
