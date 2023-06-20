import React from 'react';
import {
  Container,
  MainRow,
  SocialInfoWrapper,
  EmailWrapper,
  Icon,
  EmailText,
  Wrapper,
  LoginWrapper,
  LoginInnerWrapper,
  LoginText,
  SocialIconsWrapper,
  SocialIconLinks,
  SocialIconsHeader,
} from './TopBarStyle';
import Email from '../../../../../assets/images/email-white.png';
import Facebook from '../../../../../assets/images/facebook-white.png';
import Twitter from '../../../../../assets/images/twitter-white.png';
import Instagram from '../../../../../assets/images/insta-white.png';
import Pinterest from '../../../../../assets/images/pinterest-white.png';

const SOCIAL_ICONS = [
  {
    link: 'https://twitter.com',
    logo_icon: Twitter,
  },
  {
    link: 'https://www.facebook.com',
    logo_icon: Facebook,
  },
  {
    link: 'https://www.behance.net',
    logo_icon: Instagram,
  },
  {
    link: 'https://www.youtube.com',
    logo_icon: Pinterest,
  },
];

const TopBar: React.FC = () => (
  <Wrapper>
    <Container>
      <MainRow>
        <SocialInfoWrapper>
          <EmailWrapper>
            <Icon src={Email} />
            <EmailText href="mailto:info@websitesupport.com">
              info@websitesupport.com
            </EmailText>
          </EmailWrapper>
          <SocialIconsWrapper>
            {SOCIAL_ICONS.map((item, index) => {
              return (
                <SocialIconLinks key={index} href={item.link}>
                  <SocialIconsHeader
                    src={item.logo_icon}
                    alt={item.logo_icon}
                  />
                </SocialIconLinks>
              );
            })}
          </SocialIconsWrapper>
        </SocialInfoWrapper>

        <LoginWrapper>
          <LoginInnerWrapper>
            {/* <LoginIcon src={User} /> */}
            <LoginText>Connect wallet</LoginText>
          </LoginInnerWrapper>

          {/* <VerticalBorder />

          <LoginInnerWrapper>
            <SignupText>Sign Up</SignupText>
          </LoginInnerWrapper> */}
        </LoginWrapper>
      </MainRow>
    </Container>
  </Wrapper>
);
export default TopBar;
