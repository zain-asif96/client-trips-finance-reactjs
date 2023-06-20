import React from 'react';

import {
  DealsCardBoxContainer,
  RequestBoxWrapper,
  RequestBoxView,
  RequestBoxText,
  AmountText,
  DenyButton,
  ApproveButton,
  ChatButton,
} from './RequestsCardStyle';

const CardGrid: React.FC = (props: any) => (
  <DealsCardBoxContainer>
    <RequestBoxWrapper>
      <RequestBoxView>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {/* <RequestUserImage src={props.destination_image} /> */}
          <RequestBoxText>{props.name}</RequestBoxText>
        </div>
        <div>
          <AmountText>{props.amount}</AmountText>
        </div>
      </RequestBoxView>

      <RequestBoxView>
        <div>
          <RequestBoxText>Requested Check in</RequestBoxText>
          <RequestBoxText>Requested Check out</RequestBoxText>
          <RequestBoxText>Status</RequestBoxText>
        </div>
        <div>
          <RequestBoxText>{props.checkIn}</RequestBoxText>
          <RequestBoxText>{props.checkOut}</RequestBoxText>
          <RequestBoxText>{props.status}</RequestBoxText>
        </div>
      </RequestBoxView>

      {props.isOwner && (
        <RequestBoxView>
          <ApproveButton>Approve</ApproveButton>
          <DenyButton>Deny</DenyButton>
        </RequestBoxView>
      )}

      <ChatButton onClick={() => props.setChatViewVisible(true)}>
        See Messages
      </ChatButton>
    </RequestBoxWrapper>
  </DealsCardBoxContainer>
);

export default CardGrid;
