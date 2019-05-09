import 'es6-promise';
import 'whatwg-fetch';

function getLoginAsync() {
  const url = `${ endpoints['login'] }`;

  return fetch(url)
    .then((response) => {
      return response;
    });
}

export default {
  getLoginAsync,
};
