import LoginValidator from 'validators/login';

const loginValidator = new LoginValidator();

const LoginTransformer = {
    transformLoginResponse: (data) => {
        const response = data;
        return loginValidator.validateLoginResponse(response) ?
        response : null;
    },
};

export default LoginTransformer;
