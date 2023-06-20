import React from 'react';
import Burger from '../Burger/Burger';
import {
  Nav,
  BrandLogo,
  MainRow,
  Container,
  BrandLogoLink,
} from './NavbarStyle';
import TripsLogo from '../../../../../assets/images/trips_logo.png';
import { PATHS } from '../../../../../globals';
import { useHistory } from 'react-router-dom';

const Navbar: React.FC = () => {
  const history = useHistory();
  return (
    <Nav>
      <Container>
        <MainRow>
          <BrandLogoLink onClick={() => history.push(PATHS.home)}>
            <BrandLogo src={TripsLogo} />
          </BrandLogoLink>
          <Burger />
        </MainRow>
      </Container>
    </Nav>
  );
};

export default Navbar;
