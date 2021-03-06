import loginTransformer from 'transformers/login';
import api from 'api/login';

import { browserHistory } from 'react-router';
import { routeCodes } from 'common/routeConfig';

export const GET_LOGIN_ACTION_START = 'GET_LOGIN_ACTION_START';
export const GET_LOGIN_ACTION_ERROR = 'GET_LOGIN_ACTION_ERROR';
export const GET_LOGIN_ACTION_SUCCESS = 'GET_LOGIN_ACTION_SUCCESS';

export const SIGN_IN_ACTION_START = 'SIGN_IN_ACTION_START';
export const SIGN_IN_ACTION_ERROR = 'SIGN_IN_ACTION_ERROR';
export const SIGN_IN_ACTION_SUCCESS = 'SIGN_IN_ACTION_SUCCESS';

export const ALL_PRODUCTS_ACTION_START = 'ALL_PRODUCTS_ACTION_START';
export const ALL_PRODUCTS_ACTION_ERROR = 'ALL_PRODUCTS_ACTION_ERROR';
export const ALL_PRODUCTS_ACTION_SUCCESS = 'ALL_PRODUCTS_ACTION_SUCCESS';

export const TRANSFORMATION_ERROR = {
  message: 'Data transformation failed - data does not conform to validators.',
};

function getLoginAsyncStart() {
  return {
    type: GET_LOGIN_ACTION_START,
  };
}

function getLoginActionError(error) {
  return {
    type: GET_LOGIN_ACTION_ERROR,
    error,
  };
}

function getLoginActionSuccess(data) {
  return {
    type: GET_LOGIN_ACTION_SUCCESS,
    data,
  };
}

export function getLoginAsync() {
  return function (dispatch) {
    dispatch(getLoginAsyncStart());
    api.getLoginAsync()
    .then(response => {
      const statusReq = response.status;
      return response.json();
    })
      .then(data => dispatch(() => {
        const trasformedData = loginTransformer.transformLoginResponse(data);
        if (trasformedData) {
          dispatch(getLoginActionSuccess(trasformedData));
        } else {
          dispatch(getLoginActionError(TRANSFORMATION_ERROR));
        }
      }))
      .catch(error => dispatch(getLoginActionError(error)));
  };
}
            





function signInAsyncStart() {
  return {
    type: SIGN_IN_ACTION_START,
  };
}

function signInActionError(error) {
  return {
    type: SIGN_IN_ACTION_ERROR,
    error,
  };
}

function signInActionSuccess(data) {
  return {
    type: SIGN_IN_ACTION_SUCCESS,
    data,
  };
}

export function signInAsync(data) {
  return function (dispatch) {
    dispatch(signInAsyncStart());
    
    let statusReq;
    const request = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json'
      },
      body: JSON.stringify(data)
    };
    api.signInAsync(request)
    .then(response => {
        statusReq = response.status;
        return response.json();
      })
      .then(data => dispatch(() => {
        const trasformedData = loginTransformer.transformSignInResponse(data);
        if (trasformedData) {
          trasformedData.status = statusReq;
          dispatch(signInActionSuccess(trasformedData));
        } else {
          TRANSFORMATION_ERROR.status = statusReq;
          dispatch(signInActionError(TRANSFORMATION_ERROR));
        }
      }))
      .catch(error => dispatch(signInActionError(error)));
  };
}





function allProductsAsyncStart() {
  return {
    type: ALL_PRODUCTS_ACTION_START,
  };
}

function allProductsAsyncActionError(error) {
  return {
    type: ALL_PRODUCTS_ACTION_ERROR,
    error,
  };
}

function allProductsAsyncActionSuccess(data) {
  return {
    type: ALL_PRODUCTS_ACTION_SUCCESS,
    data,
  };
}

export function allProductsAsync(data) {
  return function (dispatch) {
    dispatch(allProductsAsyncStart());
    
    let statusReq;
    const request = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        ['Content-Type']: 'application/json',
        Authorization:'jwt'
      },
      body: JSON.stringify(data)
    };
    api.allProductsAsync(request)
    .then(response => {
        statusReq = response.status;
        if(statusReq != 400){
          return response.json();
        }else {
          browserHistory.push(routeCodes.LANDING);
        }
      })
      .then(data => dispatch(() => {
        const trasformedData = loginTransformer.transformAllProductsResponse(data);
        if (trasformedData) {
          trasformedData.status = statusReq;
          dispatch(allProductsAsyncActionSuccess(trasformedData));
        } else {
          dispatch(allProductsAsyncActionError(TRANSFORMATION_ERROR));
        }
      }))
      .catch(error => dispatch(allProductsAsyncActionError(error)));
  };
}