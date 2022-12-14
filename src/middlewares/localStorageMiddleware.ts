import { Middleware } from 'redux';

export const LCMidleware: Middleware = (store: any) => (next: any) => (action: any) => {

    if (action.type === 'products/getAllAsync/fulfilled') {
        if (localStorage.getItem('products') === null) {
            console.log('hi');

            localStorage.setItem('products', action.payload);
        }
    }
    return next(action);
}