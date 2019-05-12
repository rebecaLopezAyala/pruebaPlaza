const TransferModel = {
    title:{
        type:'string',
        optional: false,
    },
    terms:{
        type:'string',
        optional: false,
    },
    button:{
        type:'string',
        optional: false,
    },
    link:{
        type:'string',
        optional: false,
    },
    labels:{
        type:'object',
        optional: false,
        isArray:true,
        item:{
            type:'object',
            optional: false,
            properties:{
                type:{
                    type:'string',
                    optional: false,
                },
                id:{
                    type:'string',
                    optional: false,
                },
                value:{
                    type:'string',
                    optional: false,
                },
            },
        },
    },
    typeOfTransaction:{
        type:'object',
        optional: false,
        isArray:true,
        item:{
            type:'object',
            optional: false,
            properties:{
                value:{
                    type:'string',
                    optional: false,
                },
                id:{
                    type:'string',
                    optional: false,
                },
            },
        },
    },
    aditionalDetails:{
        type:'object',
        optional: false,
        isArray:true,
        item:{
            type:'object',
            optional: false,
            properties:{
                title:{
                    type:'string',
                    optional: false,
                },
                id:{
                    type:'string',
                    optional: false,
                },
                isThird:{
                    type:'boolean',
                    optional: false,
                },
                isPersonal:{
                    type:'boolean',
                    optional: false,
                },
            },
        },
    },
}

export default TransferModel;