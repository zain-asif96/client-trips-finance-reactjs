import React, { Fragment } from 'react';
import { Line } from '../heading/HeadingStyle';
import { MainRow, Container, DescriptionParagraph } from './DescriptionStyle';

const DESCRIPTION_DATA = {
  intro:
    'HAPPY NEST COTTAGE - a cozy house with a sauna for your vacation! Here you can combine with nature and just escape from the hustle and bustle of the city. Incredible views of the hills, fresh air and endless forest will help you reload and recharge your batteries!',
  body:
    'The house is located 28 km from the center of Lviv, near the Yavoriv National Nature Park.',
};

const Description: React.FC<{ description: string }> = ({
  description,
}: {
  description: string;
}) => (
  <Fragment>
    <Container>
      <MainRow>
        <DescriptionParagraph>
          {description || DESCRIPTION_DATA.intro}
        </DescriptionParagraph>
        {/* <DescriptionParagraph>{DESCRIPTION_DATA.body}</DescriptionParagraph> */}

        {/* <DescriptionParagraph>
          <ShowMore href="#">Show more</ShowMore>
        </DescriptionParagraph> */}
        <Line />
      </MainRow>
    </Container>
  </Fragment>
);

export default Description;
