import { combineReducers } from 'redux';
import { HomeActionTypes, SET_ACTION_CIP, SET_LOADING } from './actionsType';
import authReducer from './auth/authReducer';
import messagesReducer from './messages/messagesReducer';
import propertiesReducer from './properties/propertiesReducer';
import profileReducer from './profile/profileReducer';

type State = {
  isLoading: boolean;
  actionCIP: boolean;
};

const initialState: State = {
  isLoading: false,
  actionCIP: false,
};

function root(state: State = initialState, action: HomeActionTypes) {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case SET_ACTION_CIP: {
      return {
        ...state,
        actionCIP: action.payload,
      };
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  root,
  propertiesReducer,
  authReducer,
  messagesReducer,
  profileReducer,
});

export default rootReducer;

export type IRootState = ReturnType<typeof rootReducer>;
