import React, { useEffect, useState } from 'react';
import Bangkok from '../../../../../../../assets/images/thailand-bangkok.png';

import {
  Container,
  MessageContainer,
  ThreadContainer,
  RequestBoxWrapper,
  RequestBoxView,
  RequestUserImage,
  RequestBoxText,
  AmountText,
  ApproveButton,
  DenyButton,
  ChatButton,
  TopHeader,
  TopHeaderThread,
  MessagerView,
  MessagerTextView,
  MessagerHeading,
  MessagerText,
  MessgaerImage,
  UserView,
  UserTextView,
  UserText,
  TypeMessage,
  MessageBox,
  MessageBodyContainer,
  SendButton,
} from './MessageComponentStyle';
import {
  useAppDispatch,
  useAppSelector,
} from '../../../../../../../state/hooks';
import {
  getMessages,
  sendMessage,
} from '../../../../../../../state/messages/messagesActions';
import { CenterLoading } from '../../../../../home-page/components/hot-deals/HotDealsStyle';
import { CircleLoader } from 'react-spinners';
import { Message } from '../../../../../../../state/messages/messagesReducer';
import {
  requestAccept,
  requestDeny,
} from '../../../../../../../state/properties/propertiesActions';
import { useHistory } from 'react-router-dom';

interface HotDealsProps {
  isOwner?: boolean;
}

const CardGrid: React.FC<HotDealsProps> = (props: any) => {
  const dispatch = useAppDispatch();
  const {
    root,
    messagesReducer: messagesStore,
    authReducer: auth,
    propertiesReducer: properties,
  } = useAppSelector((state) => state);

  const listingId = 1;
  const [showActions, setShowAction] = useState(true);
  const histroy = useHistory();

  const [textMessage, setTextMessage] = useState('');

  useEffect(() => {
    setShowAction(true);
    dispatch(getMessages('1'));
    fetchLatestMessages();
  }, []);

  const fetchLatestMessages = () => {
    setInterval(() => {
      dispatch(getMessages('1'));
    }, 120000);
  };

  const sendTextMessage = () => {
    setTextMessage('');
    dispatch(sendMessage({ text: textMessage, sender_id: 1 }));
  };

  const closeMessageChat = () => {
    histroy.goBack();
  };

  return (
    <Container>
      <MessageContainer>
        <TopHeader>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <RequestUserImage src={Bangkok} />
            <RequestBoxText>Sarah</RequestBoxText>
          </div>
        </TopHeader>
        <MessageBodyContainer>
          {root.isLoading ? (
            <CenterLoading>
              <CircleLoader />
            </CenterLoading>
          ) : (
            messagesStore.messages.length > 0 &&
            messagesStore.messages.map((message: Message, index: number) =>
              message.sender_id !== auth.user.id ? (
                <MessagerView key={index}>
                  <MessgaerImage src={Bangkok} />
                  <MessagerTextView>
                    <MessagerHeading>{message.name}</MessagerHeading>
                    <MessagerText>{message.text}</MessagerText>
                  </MessagerTextView>
                </MessagerView>
              ) : (
                <UserView>
                  <UserTextView>
                    <UserText>{message.text}</UserText>
                  </UserTextView>
                </UserView>
              ),
            )
          )}
        </MessageBodyContainer>

        {properties.showMessageInput && (
          <MessageBox>
            <TypeMessage
              placeholder={'Message'}
              value={textMessage}
              onChange={(e) => setTextMessage(e.target.value)}
            ></TypeMessage>
            <SendButton onClick={() => sendTextMessage()}>Send</SendButton>
          </MessageBox>
        )}
      </MessageContainer>

      <ThreadContainer>
        <TopHeaderThread>Thread</TopHeaderThread>
        <RequestBoxWrapper>
          <RequestBoxView>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <RequestUserImage src={Bangkok} />
              <RequestBoxText>Sarah</RequestBoxText>
            </div>
            <div>
              <AmountText>$375,000</AmountText>
            </div>
          </RequestBoxView>

          <RequestBoxView>
            <div>
              <RequestBoxText>Requested Check in</RequestBoxText>
              <RequestBoxText>Requested Check out</RequestBoxText>
              <RequestBoxText>Status</RequestBoxText>
            </div>
            <div>
              <RequestBoxText>20.12.2021</RequestBoxText>
              <RequestBoxText>20.12.2021</RequestBoxText>
              <RequestBoxText>Active</RequestBoxText>
            </div>
          </RequestBoxView>

          {props.isOwner && showActions && (
            <RequestBoxView>
              <ApproveButton onClick={() => dispatch(requestAccept(listingId))}>
                Approve
              </ApproveButton>
              <DenyButton onClick={() => dispatch(requestDeny(listingId))}>
                Deny
              </DenyButton>
            </RequestBoxView>
          )}

          <ChatButton onClick={() => closeMessageChat()}>
            Close Messages
          </ChatButton>
        </RequestBoxWrapper>
      </ThreadContainer>
    </Container>
  );
};

export default CardGrid;
