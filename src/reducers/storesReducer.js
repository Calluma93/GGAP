
import {
    SERVER_GET_STORES_SUCCESS,
    SERVER_GET_STORES_ERROR
    } from '../actionTypes/pendingProductsActionTypes'
import {
    USER_LOG_OUT
} from '../actionTypes/privateLayoutActionTypes'
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';

const initialState = []

export function stores(state = initialState, action) {
    switch(action.type) { 
        case SERVER_GET_STORES_ERROR:
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        case SERVER_GET_STORES_SUCCESS:
            return action.stores
        default:
            return state
    }
}