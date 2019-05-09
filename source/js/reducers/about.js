import { Map } from 'immutable';

import {
  GET_ABOUT_LIFEMILES_ACTION_START,
  GET_ABOUT_LIFEMILES_ACTION_ERROR,
  GET_ABOUT_LIFEMILES_ACTION_SUCCESS,
} from 'actions/about';

const initialState = Map({
  about: {},
});

const actionsMap = {
  [GET_ABOUT_LIFEMILES_ACTION_START]: (state) => {
    return state.merge({
      about:  {
        asyncLoading: true,
        asyncError: null,  
      }
    });
  },
  [GET_ABOUT_LIFEMILES_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      about:  {
        asyncLoading: false,
        asyncError: action.error,    
      }
    }));
  },
  [GET_ABOUT_LIFEMILES_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      about: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
