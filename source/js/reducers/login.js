import { Map } from 'immutable';

import {
  GET_LOGIN_ACTION_START,
  GET_LOGIN_ACTION_ERROR,
  GET_LOGIN_ACTION_SUCCESS,
} from 'actions/login';

const initialState = Map({
  login: {},
});

const actionsMap = {
  [GET_LOGIN_ACTION_START]: (state) => {
    return state.merge({
      login:  {
        asyncLoading: true,
        asyncError: null,  
      }
    });
  },
  [GET_LOGIN_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      login:  {
        asyncLoading: false,
        asyncError: action.error,    
      }
    }));
  },
  [GET_LOGIN_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      login: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
