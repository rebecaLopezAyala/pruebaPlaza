import TransferValidator from 'validators/transfer';

const transferValidator = new TransferValidator();

const transferTransformer = {
    transformTransferResponse: (data) => {
        const response = data;
        return transferValidator.validateTransferResponse(response) ?
        response : null;
    },
};

export default transferTransformer;
