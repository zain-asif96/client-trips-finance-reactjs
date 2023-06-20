import React from 'react';
import { Container } from './HeaderStyle';
import Navbar from './components/Navbar/Navbar';

const Header: React.FC = () => (
  <Container>
    {/* <TopBar /> */}
    <Navbar />
  </Container>
);

export default Header;
