
import CookiesConfiguration from 'functions/CookiesConfiguration';
import { routeCodes } from 'common/routeConfig';

export const menuItems = [
    {
        item: {
            title: 'Productos',  link: routeCodes.PRODUCTS,
        }
    },
    { 
        item: {
            title: 'Transferencia',  link: routeCodes.TRANSFER,
        },
        subMenuItems:[
            { title: 'Transferencia entre cuentas propias',  link: routeCodes.TRANSFER_OWN},
            { title: 'Transferencia a terceros',  link: routeCodes.TRANSFER_THIRD}
        ]
    },{ 
        item: {
            title: 'Pago', 
            link: '/payment',
        },
        subMenuItems:[
            { title: 'Tarjeta de crédito Propia',  link: '/paymentOwn'},
            { title: 'Tarjeta de crédito a terceros',  link: '/paymentThird'},
            { title: 'Préstamo bancario',  link: '/paymentLoan'},
            { title: 'Préstamo bancario a terceros',  link: '/paymentLoanThird'}
        ]
    },{ 
        item: {
            title: 'Administrar Beneficiarios', 
            link: '/adminBenefits',
        },
    },{ 
        item: {
            title: CookiesConfiguration.getCookie('clientInfo') ? 'Cerrar Sesión' : 'Iniciar Sesión', 
            link: CookiesConfiguration.getCookie('clientInfo') ? '/' : '/login',
        },
    }
];