export const GET_MESSAGE_SUCCESS = '[Message] GET_MESSAGE_SUCCESS';
export const GET_MESSAGE_FAILURE = '[Message] GET_MESSAGE_FAILURE';

export const SEND_MESSAGE_SUCCESS = '[Message] SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAILURE = '[Message] SEND_MESSAGE_FAILURE';

interface GetMessageSucccess {
  type: typeof GET_MESSAGE_SUCCESS;
  payload: any;
}

interface GetMessageFailure {
  type: typeof GET_MESSAGE_FAILURE;
  payload: any;
}

interface SendMessageSucccess {
  type: typeof SEND_MESSAGE_SUCCESS;
  payload: any;
}

interface SendMessageFailure {
  type: typeof SEND_MESSAGE_SUCCESS;
  payload: any;
}

export type MessagesActionsType =
  | GetMessageSucccess
  | SendMessageSucccess
  | GetMessageFailure
  | SendMessageFailure;
