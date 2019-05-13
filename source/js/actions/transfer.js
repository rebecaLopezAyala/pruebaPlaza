import transferTransformer from 'transformers/transfer';
import api from 'api/transfer';

import { browserHistory } from 'react-router';
import { routeCodes } from 'common/routeConfig';

export const GET_TRANSFER_RENDER_ACTION_START = 'GET_TRANSFER_RENDER_ACTION_START';
export const GET_TRANSFER_RENDER_ACTION_ERROR = 'GET_TRANSFER_RENDER_ACTION_ERROR';
export const GET_TRANSFER_RENDER_ACTION_SUCCESS = 'GET_TRANSFER_RENDER_ACTION_SUCCESS';


export const TRANSFORMATION_ERROR = {
  message: 'Data transformation failed - data does not conform to validators.',
};


function getTransferStart() {
  return {
    type: GET_TRANSFER_RENDER_ACTION_START,
  };
}

function getTransferActionError(error) {
  return {
    type: GET_TRANSFER_RENDER_ACTION_ERROR,
    error,
  };
}

function getTransferActionSuccess(data) {
  return {
    type: GET_TRANSFER_RENDER_ACTION_SUCCESS,
    data,
  };
}

export function getTransfer() {
  return function (dispatch) {
    dispatch(getTransferStart());
    let statusReq;
    api.getTransfer()
    .then(response => {
        statusReq = response.status;
        if(statusReq != 400){
          return response.json();
        }else {
          browserHistory.push(routeCodes.LANDING);
        }
      })
      .then(data => dispatch(() => {
        const trasformedData = transferTransformer.transformTransferResponse(data);
        if (trasformedData) {
          trasformedData.status = statusReq;
          dispatch(getTransferActionSuccess(trasformedData));
        } else {
          dispatch(getTransferActionError(TRANSFORMATION_ERROR));
        }
      }))
      .catch(error => dispatch(getTransferActionError(error)));
  };
}