import {
    SERVER_GET_SORT_BYS_SUCCESS,
    SERVER_GET_SORT_BYS_ERROR,
    USER_GET_SORT_BYS
} from '../actionTypes/productsSortBysActionTypes';

// Get Sort Bys

export function userGetSortBys() {
    return{
        type: USER_GET_SORT_BYS
    } 
}

export function serverGetSortBysSuccess(sortBys) {
    return{
        type: SERVER_GET_SORT_BYS_SUCCESS,
        sortBys
    } 
}

export function serverGetSortBysError() {
    return{
        type: SERVER_GET_SORT_BYS_ERROR
    } 
}