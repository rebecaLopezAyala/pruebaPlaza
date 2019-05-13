import BaseValidator from 'validators/base';

import TransferModel from 'models/TransferModel';

class TransferValidator extends BaseValidator {

    validateTransferResponse(data) {
    return this.validate(TransferModel, data);
  }
}

export default TransferValidator;
