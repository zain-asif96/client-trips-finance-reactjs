/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ThunkDispatch } from 'redux-thunk';
import { apolloClient } from '../../graphql/apollo-client';
import { SEND_MESSAGE } from '../../graphql/mutations';
import { GET_MESSAGES } from '../../graphql/queries';
import { setLoading } from '../actions';
import {
  GET_MESSAGE_FAILURE,
  GET_MESSAGE_SUCCESS,
  MessagesActionsType,
  SEND_MESSAGE_SUCCESS,
} from './messagesActionsType';
import { Message } from './messagesReducer';

const dummyMessages = [
  {
    sender_id: 1,
    text: 'hi, This is text from sender 1',
    receiver_id: 2,
    name: 'john',
  },
  {
    sender_id: 2,
    text: 'hi, This is text from rec 1',
    receiver_id: 1,
    name: 'doe',
  },
  {
    sender_id: 1,
    text: 'hi, Thsi is text from sender 2',
    receiver_id: 2,
    name: 'john',
  },
  {
    sender_id: 2,
    text: 'hi, This is text from rec 2',
    receiver_id: 1,
    name: 'doe',
  },
  {
    sender_id: 1,
    text: 'hi, This is text from sender 3',
    receiver_id: 2,
    name: 'john',
  },
  {
    sender_id: 2,
    text: 'hi, This is text from rec 3',
    receiver_id: 1,
    name: 'doe',
  },
  {
    sender_id: 1,
    text: 'hi, Thsi is text from sender 4',
    receiver_id: 2,
    name: 'john',
  },
  {
    sender_id: 2,
    text: 'hi, This is text from rec 4',
    receiver_id: 1,
    name: 'doe',
  },
  {
    sender_id: 1,
    text: 'hi, This is text from sender 5',
    receiver_id: 2,
    name: 'john',
  },
  {
    sender_id: 2,
    text: 'hi, This is text from rec 5',
    receiver_id: 1,
    name: 'doe',
  },
  {
    sender_id: 1,
    text: 'hi, Thsi is text from sender 6',
    receiver_id: 2,
    name: 'john',
  },
  {
    sender_id: 2,
    text: 'hi, This is text from rec 6',
    receiver_id: 1,
    name: 'doe',
  },
];

export const getMessages = (id: string) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  return apolloClient
    .query({ query: GET_MESSAGES, variables: { id } })
    .then((res: any) => {
      const { messages } = res.data;
      dispatch(getMessagesSuccess(messages));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      const messageClone = [...dummyMessages];
      dispatch(getMessagesFailure([...messageClone.reverse()]));
      dispatch(setLoading(false));
    });
};

export const sendMessage = (message: Partial<Message>) => (
  dispatch: ThunkDispatch<any, any, any>,
) => {
  return apolloClient
    .mutate({ mutation: SEND_MESSAGE, variables: { ...message } })
    .then(() => {
      dispatch(sendMessageSuccess(message));
      dispatch(setLoading(false));
    })
    .catch((err) => {
      console.log(err);
      dispatch(sendMessageSuccess(message));
      dispatch(setLoading(false));
    });
};

export const getMessagesSuccess = (
  messages: Message[],
): MessagesActionsType => {
  return {
    type: GET_MESSAGE_SUCCESS,
    payload: messages,
  };
};

export const getMessagesFailure = (
  messages: Message[],
): MessagesActionsType => {
  return {
    type: GET_MESSAGE_FAILURE,
    payload: messages,
  };
};

export const sendMessageSuccess = (
  messages: Partial<Message>,
): MessagesActionsType => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    payload: messages,
  };
};
