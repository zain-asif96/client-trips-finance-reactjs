import {
  GET_MESSAGE_FAILURE,
  GET_MESSAGE_SUCCESS,
  MessagesActionsType,
  SEND_MESSAGE_SUCCESS,
} from './messagesActionsType';

export interface Message {
  text: string;
  sender_id: number;
  receiver_id: number;
  name: string;
}

export interface State {
  messages: Message[];
}

const initialState: State = {
  messages: [],
};

const messagesReducer = (
  state: State = initialState,
  action: MessagesActionsType,
): any => {
  switch (action.type) {
    case GET_MESSAGE_SUCCESS: {
      return {
        ...state,
        messages: action.payload,
      };
    }
    case GET_MESSAGE_FAILURE: {
      return {
        ...state,
        messages: [...action.payload],
      };
    }
    case SEND_MESSAGE_SUCCESS: {
      return {
        ...state,
        messages: [action.payload, ...state.messages],
      };
    }

    default:
      return state;
  }
};

export default messagesReducer;
