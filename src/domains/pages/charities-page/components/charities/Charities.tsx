import React from 'react';
import Logo from '../../../../../assets/images/logo.png';

import { Container, MainRow } from './CharitiesStyle';
import LinkCard from './components/link-card/LinkCard';
const CHARITIES_DATA = [
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
  {
    link: 'themepure.net/template/findup/findup/.html',
    logo_icon: Logo,
  },
];
const Charities: React.FC = () => (
  <Container>
    <MainRow>
      {CHARITIES_DATA.map((item: any, index) => {
        return <LinkCard key={index} {...item} />;
      })}
    </MainRow>
  </Container>
);

export default Charities;
