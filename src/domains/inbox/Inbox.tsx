import React from 'react';
import {
  Container,
  MainRow,
  TableWrapper,
  TableBody,
  TableRow,
  TableHeader,
} from './InboxStyle';
import Table from './components/table/Table';

const INBOX_DATA = [
  {
    sender: 'Trips.Finance Support',
    message:
      'Hi, sorry to hear there was a problem with the location of your listing on the map. Can you confirm this new...',
    status: 'Unopened',
  },
  {
    sender: 'Interested Booker',
    message:
      'Hey, I was interested in your property in Albequerque but I wanted to know a little more about the area...',
    status: 'Opened',
  },
];
const Inbox: React.FC = () => (
  <Container>
    <MainRow>
      <TableWrapper>
        <TableBody>
          <TableRow>
            <TableHeader>From</TableHeader>
            <TableHeader>Preview</TableHeader>
            <TableHeader>Opened/Unopened</TableHeader>
          </TableRow>
          {INBOX_DATA.map((item: any, index) => {
            return <Table key={index} {...item} />;
          })}
        </TableBody>
      </TableWrapper>
    </MainRow>
  </Container>
);

export default Inbox;
