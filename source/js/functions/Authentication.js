import {  
  getOAuth2Object
} from 'common/util';

class Authentication {

  delayLogin = 2000;
  
  constructor(params) {
    const {
      loginType,
      state,
      redirectURI
    } = params;

    this.loginType = loginType;
    this.state = state ? state : { };
    this.redirectURI = redirectURI ? redirectURI : '';
  }

  goToLogin = (params) => {
    const {
      headers
    } = params;

    const ehrResponse = this.extractHeaderRequest(headers);
    
    const stateObject = {
      ...this.state,
      ['Redirect-Uri']: '', // should be this.redirectURI
      ...ehrResponse
    };

    const stateString = this.getPlainState(stateObject);
    const loginUri = this.getOAuth2URI({ state: stateString });

    setTimeout(() => {
      window.location.assign(loginUri);
    }, this.delayLogin);
  }

  extractHeaderRequest = (headers) => {
    let response = {};
    
    if (headers) {
      headers.has('Access-Level') ? response['Access-Level'] = headers.get('Access-Level') : response['Access-Level'] = 2;
    }

    return response;
  }

  getPlainState = (state) => {
    let string = '{';

    const array = Object.keys(state);

    array.forEach((item, index) => {
      string += `"${ item }":"${ state[item] }"`;
      
      if (index !== array.length - 1) {
        string += ',';
      } else {
        string += '}';
      }
    });

    return string;
  }

  getOAuth2URI = (params) => {
    const {
      state
    } = params;

    const oauthObject = getOAuth2Object(this.loginType, state);    
    return oauthObject.token.getUri();
  }
}

export default Authentication;
