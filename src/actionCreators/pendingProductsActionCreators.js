import {
    USER_GET_PENDING_PRODUCTS,
    SERVER_GET_PENDING_PRODUCTS_SUCCESS,
    SERVER_GET_PENDING_PRODUCTS_ERROR,
    USER_GET_STORES,
    SERVER_GET_STORES_SUCCESS,
    SERVER_GET_STORES_ERROR,
    USER_GET_BRANDS,
    SERVER_GET_BRANDS_SUCCESS,
    SERVER_GET_BRANDS_ERROR
} from '../actionTypes/pendingProductsActionTypes';

// Get Pending Products

export function userGetPendingProducts(userSettings) {
    return {
        type: USER_GET_PENDING_PRODUCTS,
        userSettings
    };
}

export function serverGetPendingProductsSuccess(
    products, userSettings
) {
    return {
        type: SERVER_GET_PENDING_PRODUCTS_SUCCESS,
        products,
        userSettings
    } 
}

export function serverGetPendingProductsError() {
    return {
        type: SERVER_GET_PENDING_PRODUCTS_ERROR
    } 
}


// Get Stores

export function userGetStores() {
    return {
        type: USER_GET_STORES
    };
}

export function serverGetStoresSuccess(stores) {
    return{
        type: SERVER_GET_STORES_SUCCESS,
        stores
    } 
}
export function serverGetStoresError() {
    return{
        type: SERVER_GET_STORES_ERROR
    } 
}


// Get Brands

export function userGetBrands() {
    return {
        type: USER_GET_BRANDS
    };
}

export function serverGetBrandsSuccess(brands) {
    return{
        type: SERVER_GET_BRANDS_SUCCESS,
        brands
    } 
}
export function serverGetBrandsError() {
    return{
        type: SERVER_GET_BRANDS_ERROR
    } 
}