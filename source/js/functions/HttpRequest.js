const METHODS = {
  get: 'GET',
  post: 'POST',
  delete: 'DELETE'
};

export default class HttpRequest {

  static getHeadersMap() {
    return {
      commonPost: (request) => {
        request.method = METHODS.post,
        request.headers = this.getCommonHeaders()
      },
      commonGet: (request) => {
        request.method = METHODS.get,
        request.headers = this.getCommonHeaders()
      }
    }
  }

  static getCommonHeaders() {
    return {
      ['Content-Type']: 'application/json'
    }
  }

  static request(type, otherHeaders, body) {
    const request = {};
    const headersMap = this.getHeadersMap();

    if (headersMap[type]) {
      headersMap[type](request);
      
      // append request specific headers
      if (otherHeaders) {
        request.headers = {
          ...request.headers,
          ...otherHeaders
        }
      }

      (body) ? (
        request.body = JSON.stringify(body) 
      ) : ({});
      
      return request;
    } else {
      return false;
    }    
  }
}