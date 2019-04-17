
import {
    SERVER_GET_HTML_PAGE_TYPES_SUCCESS,
    SERVER_GET_HTML_PAGE_TYPES_ERROR
    } from '../actionTypes/htmlPageActionTypes'
import {
    USER_LOG_OUT
} from '../actionTypes/privateLayoutActionTypes'
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';

const initialState = []

export function htmlPageTypes(state = initialState, action) {
    switch(action.type) { 
        case SERVER_GET_HTML_PAGE_TYPES_ERROR:
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        case SERVER_GET_HTML_PAGE_TYPES_SUCCESS:
            return action.pageTypes
        default:
            return state
    }
}