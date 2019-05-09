const Login ={
    label:{
        type:'object',
        optional: false,
        isArray:true,
        properties:{
            type:{
                type:'string',
                optional: true,
            },
            id:{
                type:'string',
                optional: true,
            },
            value:{
                type:'string',
                optional: true,
            },
        },
    },
    errorMessages:{
        type: 'object',
        optional:false,
        properties:{
            invalidCredentials:{
                type:'string',
                optional: true,
            },
            invalidPassword:{
                type:'string',
                optional: true,
            },
        },
    },

}

export default Login;