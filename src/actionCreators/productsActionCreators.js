import {
    USER_GET_PRODUCTS,
    SERVER_GET_PRODUCTS_SUCCESS,
    SERVER_GET_PRODUCTS_ERROR,
    USER_GET_PRODUCTS_BRANDS,
    SERVER_GET_PRODUCTS_BRANDS_SUCCESS,
    SERVER_GET_PRODUCTS_BRANDS_ERROR,
    USER_GET_PRODUCTS_TAGS,
    SERVER_GET_PRODUCTS_TAGS_SUCCESS,
    SERVER_GET_PRODUCTS_TAGS_ERROR,
    USER_GET_PRODUCTS_LAST_EDITORS,
    SERVER_GET_PRODUCTS_LAST_EDITORS_SUCCESS,
    SERVER_GET_PRODUCTS_LAST_EDITORS_ERROR
} from '../actionTypes/productsActionTypes';


// Get Products

export function userGetProducts(userSettings) {
    return {
        type: USER_GET_PRODUCTS,
        userSettings
    };
}

export function serverGetProductsSuccess(products, userSettings) {
    return {
        type: SERVER_GET_PRODUCTS_SUCCESS,
        products,
        userSettings
    } 
}

export function serverGetProductsError() {
    return {
        type: SERVER_GET_PRODUCTS_ERROR
    } 
}

// Get Products Brands

export function userGetProductsBrands() {
    return {
        type: USER_GET_PRODUCTS_BRANDS
    };
}

export function serverGetProductsBrandsSuccess(brands) {
    return {
        type: SERVER_GET_PRODUCTS_BRANDS_SUCCESS,
        brands
    };
}
export function serverGetProductsBrandsError() {
    return {
        type: SERVER_GET_PRODUCTS_BRANDS_ERROR
    };
}


// Get Products Tags

export function userGetProductsTags() {
    return {
        type: USER_GET_PRODUCTS_TAGS
    };
}

export function serverGetProductsTagsSuccess(tags) {
    return {
        type: SERVER_GET_PRODUCTS_TAGS_SUCCESS,
        tags
    };
}

export function serverGetProductsTagsError() {
    return {
        type: SERVER_GET_PRODUCTS_TAGS_ERROR
    };
}


// Get Products Last Editors

export function userGetProductsLastEditors() {
    return {
        type: USER_GET_PRODUCTS_LAST_EDITORS
    };
}

export function serverGetProductsLastEditorsSuccess(lastEditors) {
    return {
        type: SERVER_GET_PRODUCTS_LAST_EDITORS_SUCCESS,
        lastEditors
    };
}
export function serverGetProductsLastEditorsError() {
    return {
        type: SERVER_GET_PRODUCTS_LAST_EDITORS_ERROR
    };
}