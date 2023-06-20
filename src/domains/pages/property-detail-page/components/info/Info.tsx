import React from 'react';
import InfoItem from './InfoItem';
import { Container } from './InfoStyle';

import EntireHome from '../../../../../assets/icons/home.png';
import EnhancedClean from '../../../../../assets/icons/broom.png';
import SelfCheckIn from '../../../../../assets/icons/door.png';
import GreatLocation from '../../../../../assets/icons/check.png';
import HouseRules from '../../../../../assets/icons/rules.png';

const Info: React.FC = () => {
  const testArray = [
    {
      title: 'Entire home',
      decs: `You'll have the challet to yourself.`,
      image: EntireHome,
    },
    {
      title: 'Enhanced Clean',
      decs: `This host committed to Airbnb's 5-step enhanced cleaning process.`,
      image: EnhancedClean,
    },
    {
      title: 'Self check-in',
      decs: 'Check yourself in with the lockbox.',
      image: SelfCheckIn,
    },
    {
      title: 'Great location',
      decs: '100% of recent gusts gave the location a 5-star rating.',
      image: GreatLocation,
    },
    {
      title: 'House rules',
      decs: `This place isn't suitable for children (2-12 yrs) and the host doesn't allow pets, parties, or smoking.`,
      image: HouseRules,
    },
    {
      title: 'KYC Policy',
      decs: `Some KYC policy content`,
      image: HouseRules,
    },
  ];

  return (
    <Container>
      {testArray.map((key) => (
        <InfoItem
          key={key.title}
          title={key.title}
          description={key.decs}
          icon={key.image}
        />
      ))}
    </Container>
  );
};

export default Info;
