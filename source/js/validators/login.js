import BaseValidator from 'validators/base';

import LoginModel from 'models/Login';
import SignInModel from 'models/SignInModel';
import AllProductsModel from 'models/AllProductsModel';

class LoginValidator extends BaseValidator {

  validateLoginResponse(data) {
    return this.validate(LoginModel, data);
  }

  validateSignInResponse(data) {
    return this.validate(SignInModel, data);
  }

  validateAllProductsResponse(data){
    return this.validate(AllProductsModel, data);
  }
}

export default LoginValidator;
