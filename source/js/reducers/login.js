import { Map } from 'immutable';

import {
  GET_LOGIN_ACTION_START,
  GET_LOGIN_ACTION_ERROR,
  GET_LOGIN_ACTION_SUCCESS,
  SIGN_IN_ACTION_START,
  SIGN_IN_ACTION_ERROR,
  SIGN_IN_ACTION_SUCCESS,
  ALL_PRODUCTS_ACTION_START,
  ALL_PRODUCTS_ACTION_ERROR,
  ALL_PRODUCTS_ACTION_SUCCESS,
} from 'actions/login';

const initialState = Map({
  login: {},
  signIn:{},
  allProducts:{}
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
  
  [SIGN_IN_ACTION_START]: (state) => {
    return state.merge({
      signIn:  {
        asyncLoading: true,
        asyncError: null,  
      }
    });
  },
  [SIGN_IN_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      signIn:  {
        asyncLoading: false,
        asyncError: action.error,    
      }
    }));
  },
  [SIGN_IN_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      signIn: action.data,
    }));
  },
  
  [ALL_PRODUCTS_ACTION_START]: (state) => {
    return state.merge({
      allProducts:  {
        asyncLoading: true,
        asyncError: null,  
      }
    });
  },
  [ALL_PRODUCTS_ACTION_ERROR]: (state, action) => {
    return state.merge(Map({
      allProducts:  {
        asyncLoading: false,
        asyncError: action.error,    
      }
    }));
  },
  [ALL_PRODUCTS_ACTION_SUCCESS]: (state, action) => {
    return state.merge(Map({
      asyncLoading: false,
      allProducts: action.data,
    }));
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
