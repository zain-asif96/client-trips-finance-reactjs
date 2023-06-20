import React from 'react';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import FindUp from './components/FindUp/FindUp';
import NewsFeed from './components/NewsFeed/NewsFeed';
import {
  Container,
  MainRow,
  FooterCol,
  SocialIconsWrapper,
  SocialIconsFooter,
  SocialIconLinks,
  FooterColTwo,
  FooterBorder,
  CopyRight,
} from './FooterStyle';
import FacebookIcon from '../../../assets/images/facebook-icon.png';
import TwitterIcon from '../../../assets/images/twitter-icon.png';
import BehanceIcon from '../../../assets/images/behance-icon.png';
import YoutubeIcon from '../../../assets/images/youtube-icon.png';
import { useHistory } from 'react-router-dom';

const SOCIAL_ICONS = [
  {
    link: 'https://www.facebook.com',
    logo_icon: FacebookIcon,
  },
  {
    link: 'https://twitter.com',
    logo_icon: TwitterIcon,
  },
  {
    link: 'https://www.behance.net',
    logo_icon: BehanceIcon,
  },
  {
    link: 'https://www.youtube.com',
    logo_icon: YoutubeIcon,
  },
];

const Footer: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <MainRow>
        <FooterCol>
          <FindUp />
        </FooterCol>

        <FooterCol>
          <AboutUs />
        </FooterCol>

        <FooterCol>
          <ContactUs />
        </FooterCol>

        <FooterCol>
          <NewsFeed />
        </FooterCol>
      </MainRow>

      <MainRow>
        <FooterCol>
          <SocialIconsWrapper>
            {SOCIAL_ICONS.map((item, index) => {
              return (
                <SocialIconLinks
                  key={index}
                  onClick={() => history.push(item.link)}
                >
                  <SocialIconsFooter
                    src={item.logo_icon}
                    alt={item.logo_icon}
                  />
                </SocialIconLinks>
              );
            })}
          </SocialIconsWrapper>
        </FooterCol>
        <FooterColTwo>
          <FooterBorder />
          <CopyRight>Copyright © 2021 ThemePure. All Reserved</CopyRight>
        </FooterColTwo>
      </MainRow>
    </Container>
  );
};
export default Footer;
