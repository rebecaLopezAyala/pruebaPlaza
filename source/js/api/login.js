import 'es6-promise';
import 'whatwg-fetch';

function getLoginAsync() {
  const url = `http://private-f9edf2-rebeca1.apiary-mock.com/renderLogin`;

  return fetch(url)
    .then((response) => {
      return response;
    });
}


function signInAsync(request) {
  const url = `http://private-f9edf2-rebeca1.apiary-mock.com/signIn`;

  return fetch(url, request)
    .then((response) => {
      return response;
    });
}


function allProductsAsync(request) {
  const url = `http://private-f9edf2-rebeca1.apiary-mock.com/allProducts`;

  return fetch(url, request)
    .then((response) => {
      return response;
    });
}

export default {
  getLoginAsync,
  signInAsync,
  allProductsAsync
};
