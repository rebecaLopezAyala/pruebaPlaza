import BaseValidator from 'validators/base';

import LoginModel from 'models/Login';

class LoginValidator extends BaseValidator {

    validateLoginResponse(data) {
    return this.validate(LoginModel, data);
  }
}

export default LoginValidator;
