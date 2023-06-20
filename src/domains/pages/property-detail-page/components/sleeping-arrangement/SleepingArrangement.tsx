import React from 'react';
import DoubleBed from '../../../../../assets/images/double-bed.png';
import {
  AmneitiesHeading,
  Container,
  MainRow,
} from './SleepingArrangementStyle';
import SleepingArrangementCard from './components/sleeping-arrangement-item/SleepingArrangementItem';
const SLEEPING_ARRANGEMENT_DATA = [
  {
    bed_icon: DoubleBed,
    bedroom_heading: 'Bedroom 1',
    double_bed_count: 1,
  },
  {
    bed_icon: DoubleBed,
    bedroom_heading: 'Bedroom 2',
    double_bed_count: 2,
  },
];
const SleepingArrangement: React.FC = () => (
  <Container>
    <AmneitiesHeading>Sleeping arrangements</AmneitiesHeading>
    <MainRow>
      {SLEEPING_ARRANGEMENT_DATA.map((item: any, index) => {
        return <SleepingArrangementCard key={index} {...item} />;
      })}
    </MainRow>
  </Container>
);

export default SleepingArrangement;
