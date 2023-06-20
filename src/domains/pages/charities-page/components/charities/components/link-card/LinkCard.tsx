import React from 'react';

import {
  LogoBoxContainer,
  LogoImageWrapper,
  LogoImage,
  LinkBox,
  LinkText,
} from './LinkCardStyle';

const LinkCard: React.FC = (props: any) => (
  <LogoBoxContainer>
    <LogoImageWrapper>
      <LogoImage src={props.logo_icon} />
    </LogoImageWrapper>
    <LinkBox>
      <LinkText>{props.link}</LinkText>
    </LinkBox>
  </LogoBoxContainer>
);

export default LinkCard;
