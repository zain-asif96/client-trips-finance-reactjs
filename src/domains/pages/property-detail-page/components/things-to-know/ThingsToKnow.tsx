import React, { useEffect, useState } from 'react';

import {
  Container,
  ThingsToKnowHeading,
  ThingsToKnowRow,
} from './ThingsToKnowStyle';
import ThingsToKnowContainer from './ThingsToKnowContainer';
import ShowMoreButton from '../../../../common/ShowMoreButton';

interface Prop {
  houseRulesList: any[];
}

const ThingsToKnow: React.FC<Prop> = ({ houseRulesList }: Prop) => {
  const healthAndSafetyIcons: string[] = [
    'Sun',
    'Clipboard',
    'Swim',
    'Fire',
    'Smoke detector',
  ];
  const healthAndSafetyList: string[] = [
    "Committed to our's enhancedcleaning process.",
    "Our's social-distancing and other COVID-19-related guidlines apply",
    'Nearby lake, river, other body of water',
    'Carbon monoxide alarm',
    'Smoke alarm',
  ];
  const houseRulesIcons: string[] = ['bullet'];

  const cancellationPolicy: string[] = [];
  const [show, setShow] = useState<boolean>(false);
  const [showHealthList, setShowHealthList] = useState<string[]>(
    healthAndSafetyList,
  );
  const [showHealthIcons, setShowHealthIcons] = useState<string[]>(
    healthAndSafetyIcons,
  );
  const [showHouseList, setShowHouseList] = useState<any[]>(houseRulesList);
  const [showHouseIcons, setShowHouseIcons] = useState<string[]>(
    houseRulesIcons,
  );
  const [showingMore, setShowingMore] = useState<boolean>(false);

  useEffect(() => {
    if (healthAndSafetyList.length > 5 || houseRulesList.length > 5) {
      shrinkHealthList();
      shrinkHouseList();
      setShow(true);
    }
  }, [houseRulesList]);

  const toggle = () => {
    if (showingMore) {
      setShowingMore(false);
      shrinkHealthList();
      shrinkHouseList();
    } else {
      setShowingMore(true);
      expandHealthList();
      expandHouseList();
    }
  };

  const shrinkHealthList = () => {
    setShowHealthList(healthAndSafetyList.slice(0, 5));
    setShowHealthIcons(healthAndSafetyIcons.slice(0, 5));
  };

  const expandHealthList = () => {
    setShowHealthList(healthAndSafetyList);
    setShowHealthIcons(healthAndSafetyIcons);
  };

  const shrinkHouseList = () => {
    setShowHouseList(houseRulesList.slice(0, 5));
    setShowHouseIcons(houseRulesIcons);
  };

  const expandHouseList = () => {
    setShowHouseList(houseRulesList);
    setShowHouseIcons(houseRulesIcons);
  };

  return (
    <Container>
      <ThingsToKnowHeading>Things to know</ThingsToKnowHeading>
      <ThingsToKnowRow>
        <ThingsToKnowContainer
          title="Health & safety"
          icons={showHealthIcons}
          list={showHealthList}
        />
        <ThingsToKnowContainer
          title="House rules"
          icons={showHouseIcons}
          list={showHouseList}
          showBullets={true}
        />
        <ThingsToKnowContainer
          title="Dispute Policy"
          icons={[]}
          list={cancellationPolicy}
        />
      </ThingsToKnowRow>
      {show ? (
        <ShowMoreButton
          text={showingMore ? 'Show less' : 'Show more'}
          toggle={toggle}
        />
      ) : null}
    </Container>
  );
};

export default ThingsToKnow;
