import LoginValidator from 'validators/login';

const LoginValidator = new LoginValidator();

const LoginTransformer = {
    transformLoginResponse: (data) => {
        const response = data;
        return LoginValidator.validateLoginResponse(response) ?
        response : null;
    },
};

export default LoginTransformer;
