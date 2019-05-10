import BaseValidator from 'validators/base';

import LoginModel from 'models/Login';
import SignInModel from 'models/SignInModel';

class LoginValidator extends BaseValidator {

  validateLoginResponse(data) {
    return this.validate(LoginModel, data);
  }

  validateSignInResponse(data) {
    return this.validate(SignInModel, data);
  }
}

export default LoginValidator;
