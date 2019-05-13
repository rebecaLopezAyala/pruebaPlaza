import 'es6-promise';
import 'whatwg-fetch';

function getTransfer() {
  const url = `http://private-f9edf2-rebeca1.apiary-mock.com/transfer`;

  return fetch(url)
    .then((response) => {
      return response;
    });
}


export default {
    getTransfer
};