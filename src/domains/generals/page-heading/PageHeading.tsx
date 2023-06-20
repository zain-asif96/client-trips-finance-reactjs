import React from 'react';
import {
  Container,
  MainHeadingLeft,
  MainHeadingCenter,
  SubtitileCenter,
  SubtitileLeft,
  ShadowText,
  ShadowTextCenter,
} from './PageHeadingStyle';

export const HEADING_SUBTITLE_POSITION = {
  TOP: 'top',
  BOTTOM: 'bottom',
};
export const HEADING_CONTENT_ALIGNMENT = {
  LEFT: 'left',
  RIGHT: 'bottom',
  CENTER: 'center',
};

interface PageHeadingProps {
  heading: string;
  subtitle?: string;
  subtitlePosition?: string;
  backgroundText?: string;
  alignment?: string;
}

const PageHeading: React.FC<PageHeadingProps> = (props: any) => (
  <Container>
    {props.subtitlePosition === HEADING_SUBTITLE_POSITION.TOP &&
      props.alignment === HEADING_CONTENT_ALIGNMENT.CENTER && (
        <SubtitileCenter>{props.subtitle} </SubtitileCenter>
      )}

    {props.subtitlePosition === HEADING_SUBTITLE_POSITION.TOP &&
      props.alignment === HEADING_CONTENT_ALIGNMENT.LEFT && (
        <SubtitileLeft>{props.subtitle} </SubtitileLeft>
      )}

    {props.alignment === HEADING_CONTENT_ALIGNMENT.CENTER && (
      <ShadowTextCenter>{props.backgroundText}</ShadowTextCenter>
    )}

    {props.alignment === HEADING_CONTENT_ALIGNMENT.LEFT && (
      <ShadowText>{props.backgroundText}</ShadowText>
    )}

    {props.alignment === HEADING_CONTENT_ALIGNMENT.LEFT && (
      <MainHeadingLeft>{props.heading}</MainHeadingLeft>
    )}

    {props.alignment === HEADING_CONTENT_ALIGNMENT.CENTER && (
      <MainHeadingCenter>{props.heading}</MainHeadingCenter>
    )}

    {props.subtitlePosition === HEADING_SUBTITLE_POSITION.BOTTOM &&
      props.alignment === HEADING_CONTENT_ALIGNMENT.CENTER && (
        <SubtitileCenter>{props.subtitle} </SubtitileCenter>
      )}

    {props.subtitlePosition === HEADING_SUBTITLE_POSITION.BOTTOM &&
      props.alignment === HEADING_CONTENT_ALIGNMENT.LEFT && (
        <SubtitileLeft>{props.subtitle}</SubtitileLeft>
      )}
  </Container>
);

//default props
PageHeading.defaultProps = {
  subtitlePosition: HEADING_SUBTITLE_POSITION.TOP,
  alignment: HEADING_CONTENT_ALIGNMENT.CENTER,
  heading: '',
  subtitle: '',
  backgroundText: '',
};

export default PageHeading;
