import loginTransformer from 'transformers/login';
import api from 'api/login';

export const GET_LOGIN_ACTION_START = 'GET_LOGIN_ACTION_START';
export const GET_LOGIN_ACTION_ERROR = 'GET_LOGIN_ACTION_ERROR';
export const GET_LOGIN_ACTION_SUCCESS = 'GET_LOGIN_ACTION_SUCCESS';

export const SIGN_IN_ACTION_START = 'SIGN_IN_ACTION_START';
export const SIGN_IN_ACTION_ERROR = 'SIGN_IN_ACTION_ERROR';
export const SIGN_IN_ACTION_SUCCESS = 'SIGN_IN_ACTION_SUCCESS';

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
          dispatch(signInActionError(TRANSFORMATION_ERROR));
        }
      }))
      .catch(error => dispatch(signInActionError(error)));
  };
}