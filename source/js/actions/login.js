import loginTransformer from 'transformers/login';

export const GET_LOGIN_TRANSFORMER_ACTION_START = 'GET_LOGIN_TRANSFORMER_ACTION_START';
export const GET_LOGIN_TRANSFORMER_ACTION_ERROR = 'GET_LOGIN_TRANSFORMER_ACTION_ERROR';
export const GET_LOGIN_TRANSFORMER_ACTION_SUCCESS = 'GET_LOGIN_TRANSFORMER_ACTION_SUCCESS';

export const TRANSFORMATION_ERROR = {
  message: 'Data transformation failed - data does not conform to validators.',
};

function getLoginAsync() {
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
    dispatch(getLoginAsync());
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
