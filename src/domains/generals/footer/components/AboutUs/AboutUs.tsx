import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Wrapper,
  Heading,
  QuickLinksWrapper,
  QuickLinksInnerWrapper,
  QuickLinksText,
  QuickLinks,
} from './AboutUsStyle';

const LINKS_COL_ONE = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: '/',
    name: 'Services',
  },
  {
    link: '/',
    name: 'Features',
  },
  {
    link: '/',
    name: 'Pricing',
  },
  {
    link: '/',
    name: 'News',
  },
];

const LINKS_COL_TWO = [
  {
    link: '/',
    name: 'About',
  },
  {
    link: '/',
    name: 'Portfolio',
  },
  {
    link: '/',
    name: 'Case Study',
  },
  {
    link: '/',
    name: 'Contact',
  },
];

const AboutUs: React.FC = () => {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Heading>About Us</Heading>

        <QuickLinksWrapper>
          <QuickLinksInnerWrapper>
            {LINKS_COL_ONE.map((item, index) => {
              return (
                <QuickLinksText key={index}>
                  <QuickLinks
                    key={index}
                    onClick={() => history.push(item.link)}
                  >
                    {item.name}
                  </QuickLinks>
                </QuickLinksText>
              );
            })}
          </QuickLinksInnerWrapper>

          <QuickLinksInnerWrapper>
            {LINKS_COL_TWO.map((item, index) => {
              return (
                <QuickLinksText key={index}>
                  <QuickLinks
                    key={index}
                    onClick={() => history.push(item.link)}
                  >
                    {item.name}
                  </QuickLinks>
                </QuickLinksText>
              );
            })}
          </QuickLinksInnerWrapper>
        </QuickLinksWrapper>
      </Wrapper>
    </Container>
  );
};
export default AboutUs;
