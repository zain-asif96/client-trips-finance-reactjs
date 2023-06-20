import React from 'react';
import {
  Container,
  Wrapper,
  Heading,
  InfoWrapper,
  InfoDiv,
  InfoImg,
  InfoHead,
  InfoDesc,
  InfoLink,
  InfoDescWrapper,
} from './ContactUsStyle';
import Email from '../../../../../assets/images/email-icon.png';
import Phone from '../../../../../assets/images/phone-icon.png';
import Globe from '../../../../../assets/images/globe-icon.png';
import Location from '../../../../../assets/images/location-red-icon.png';
import { useHistory } from 'react-router-dom';

const CONTACT_INFO = [
  {
    link: 'mailto:info@webmail.com',
    name: 'Email',
    icon: Email,
    text: 'info@webmail.com',
  },
  {
    link: 'tel:09809808609',
    name: 'Phone',
    icon: Phone,
    text: '098-098-086-09',
  },
  {
    link: 'https://webexample.com',
    name: 'Website',
    icon: Globe,
    text: 'webexample.com',
  },
  {
    name: 'Location',
    icon: Location,
    text: '12/A, Miranda Halim City, US',
  },
];

const ContactUs: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Heading>Contact Us</Heading>

        <InfoWrapper>
          {CONTACT_INFO.map((item, index) => {
            return (
              <InfoDiv key={index}>
                <InfoImg src={item.icon} />
                <InfoDescWrapper>
                  <InfoHead>{`${item.name}:`}</InfoHead>
                  <InfoDesc>
                    <InfoLink
                      onClick={() => item.link && history.push(item.link)}
                    >
                      {item.text}
                    </InfoLink>
                  </InfoDesc>
                </InfoDescWrapper>
              </InfoDiv>
            );
          })}
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
};
export default ContactUs;
