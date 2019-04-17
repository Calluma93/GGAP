import {
    USER_GET_CATEGORIES,
    SERVER_GET_CATEGORIES_SUCCESS,
    SERVER_GET_CATEGORIES_ERROR,
} from '../actionTypes/categoriesActionTypes';

export function userGetCategories() {
    return {
        type: USER_GET_CATEGORIES
    };
}
export function serverGetCategoriesSuccess(categories) {
    return {
        type: SERVER_GET_CATEGORIES_SUCCESS,
        categories
    };
}
export function serverGetCategoriesError() {
    return {
        type: SERVER_GET_CATEGORIES_ERROR
    };
}