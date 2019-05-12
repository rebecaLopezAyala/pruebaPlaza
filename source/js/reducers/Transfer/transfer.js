import { Map } from 'immutable';

import {
  GET_TRANSFER_RENDER_ACTION_START,
  GET_TRANSFER_RENDER_ACTION_ERROR,
  GET_TRANSFER_RENDER_ACTION_SUCCESS,
} from 'actions/transfer';

const initialState = Map({
  transfer: {},
});

const actionsMap = {
  [GET_TRANSFER_RENDER_ACTION_START]: (state) => {
    return state.merge({
      transfer:  {
        asyncLoading: true,
        asyncError: null,  
      }
    });
  },
  [GET_TRANSFER_RENDER_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      transfer:  {
        asyncLoading: false,
        asyncError: action.error,    
      }
    }));
  },
  [GET_TRANSFER_RENDER_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      transfer: action.data,
    }));
  },
  
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
