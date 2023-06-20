import React from 'react';
import {
  Container,
  ThingsToKnowContainerCol,
  ThingsToKnowSubHeading,
} from './ThingsToKnowContainerStyle';
import ThingsToKnowItem from './ThingsToKnowItem';

interface Props {
  title: string;
  icons: string[];
  list: string[];
  showBullets?: boolean;
}

const ThingsToKnowContainer: React.FC<Props> = ({
  title,
  icons,
  list,
  showBullets,
}: Props) => (
  <Container>
    <ThingsToKnowContainerCol>
      <ThingsToKnowSubHeading>{title}</ThingsToKnowSubHeading>
      {list.map((key, index) => (
        <ThingsToKnowItem
          key={index}
          listIcon={showBullets ? icons[0] : icons[index]}
          listItem={key}
        />
      ))}
    </ThingsToKnowContainerCol>
  </Container>
);

export default ThingsToKnowContainer;
