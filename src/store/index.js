import {createStore} from 'redux';
import {getToken, setToken} from '../api/token';

const initialSatate = {
  comment: 'Comment123',
  token: getToken()
};

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const UPDATE_TOKEN = 'UPDATE_TOKEN';
const DELETE_TOKEN = 'DELETE_TOKEN';

export const updateComment = comment => ({
  type: UPDATE_COMMENT,
  comment
});

export const updateToken = token => ({
  type: UPDATE_TOKEN,
  token
});

export const deleteToken = token => ({
  type: DELETE_TOKEN,
  token
});

const rootReducer = (state = initialSatate, action) => {
  switch (action.type) {
    case UPDATE_COMMENT:
      return {
        ...state,
        comment: action.comment
      };

    case UPDATE_TOKEN:
      setToken(action.token);

      return {
        ...state,
        token: action.token
      };

    case DELETE_TOKEN:
      setToken('');

      return {
        ...state,
        token: ''
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer);
