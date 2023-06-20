import React from 'react';
import _ from 'lodash';

import { Container } from './IconStyle';
import WaterDrop from '../../assets/icons/water-drop.png';
import WifiSignal from '../../assets/icons/wifi-signal.png';
import Print from '../../assets/icons/print.png';
import Balcony from '../../assets/icons/balcony.png';
import Fireplace from '../../assets/icons/fireplace.png';
import Kitchen from '../../assets/icons/kitchen.png';
import FreeParking from '../../assets/icons/free-parking.png';
import Television from '../../assets/icons/television.png';
import Backyard from '../../assets/icons/backyard.png';
import HairDryer from '../../assets/icons/hair-dryer.png';
import Sun from '../../assets/icons/sun.png';
import Clipboard from '../../assets/icons/clip-board.png';
import Swim from '../../assets/icons/swim.png';
import Fire from '../../assets/icons/fire.png';
import SmokeDetector from '../../assets/icons/smoke-detector.png';
import Clock from '../../assets/icons/clock.png';
import CheckIn from '../../assets/icons/check-in.png';
import NoSmoking from '../../assets/icons/no-smoking.png';
import Bullet from '../../assets/icons/bullet.png';

interface Props {
  icon: string;
}

interface Icons {
  [key: string]: typeof WaterDrop;
  wifi: typeof WifiSignal;
  petsAllowed: typeof Print;
  patioOrBalcony: typeof Balcony;
  indoorFireplace: typeof Fireplace;
  kitchen: typeof Kitchen;
  freeParkingOnPremises: typeof FreeParking;
  tv: typeof Television;
  backyard: typeof Backyard;
  hairDryer: typeof HairDryer;
  sun: typeof Sun;
  clipboard: typeof Clipboard;
  swim: typeof Swim;
  fire: typeof Fire;
  smokeDetector: typeof SmokeDetector;
  clock: typeof Clock;
  checkIn: typeof CheckIn;
  noSmoking: typeof NoSmoking;
  bullet: typeof Bullet;
}

const Icon: React.FC<Props> = ({ icon }: Props) => {
  const iconList: Icons = {
    waterfront: WaterDrop,
    wifi: WifiSignal,
    petsAllowed: Print,
    patioOrBalcony: Balcony,
    indoorFireplace: Fireplace,
    kitchen: Kitchen,
    freeParkingOnPremises: FreeParking,
    tv: Television,
    backyard: Backyard,
    hairDryer: HairDryer,
    sun: Sun,
    clipboard: Clipboard,
    swim: Swim,
    fire: Fire,
    smokeDetector: SmokeDetector,
    clock: Clock,
    checkIn: CheckIn,
    noSmoking: NoSmoking,
    bullet: Bullet,
  };
  const path = _.camelCase(icon);

  return (
    <Container>
      <img src={iconList[path]} />
    </Container>
  );
};

export default Icon;
