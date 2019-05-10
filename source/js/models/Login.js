const Login ={
    title:{
        type:'string',
        optional: true,
    },
    bankLogo:{
        type:'string',
        optional: true,
    },
    subtitle:{
        type:'string',
        optional: true,
    },
    label:{
        type:'object',
        optional: false,
        isArray:true,
        item:{
            type:'object',
            optional: false,
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
        }
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