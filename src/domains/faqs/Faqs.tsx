import React from 'react';
import FaqButton from './components/faq-button/FaqButton';
import TripFinanceUse from '../../assets/images/trip-finance-use.png';
import TripFinanceMain from '../../assets/images/trip-finance-main.png';
import Trips from '../../assets/images/trips.png';
import CancellationPolicy from '../../assets/images/cancellation-policy.png';
import { Container, MainRow } from './FaqsStyle';
import FaqCard from './components/faq-card/FaqCard';

const FAQ_DATA = [
  {
    image: TripFinanceUse,
    question: 'How do I use Trips.Finance?',
  },
  {
    image: TripFinanceMain,
    question: 'What is Trips.Finance?',
  },
  {
    image: Trips,
    question: 'What is $TRIPS?',
  },
  {
    image: CancellationPolicy,
    question: 'Dispute Policy',
  },
];

const Faqs: React.FC = () => (
  <Container>
    <MainRow>
      {FAQ_DATA.map((item: any) => {
        return <FaqCard key={item} {...item} />;
      })}
    </MainRow>
    <FaqButton />
  </Container>
);

export default Faqs;
