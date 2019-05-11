
import CookiesConfiguration from 'functions/CookiesConfiguration';

export const menuItems = [
    {
        item: {
            title: 'Productos',  link: '/products',
        }
    },
    { 
        item: {
            title: 'Transferencia',  link: '/transfer',
        },
        subMenuItems:[
            { title: 'Transferencia entre cuentas propias',  link: '/transfer'},
            { title: 'Transferencia a terceros',  link: '/transferThird'}
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