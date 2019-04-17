import {
    SERVER_GET_SORT_BYS_SUCCESS
} from '../../actionTypes/productsSortBysActionTypes';
import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';

const initialSortBysState = {
    sortBys: []
},
initialState = {
    ...initialSortBysState
};

export function productsSortBys(state = initialState, action){
    switch(action.type) {
        case SERVER_GET_SORT_BYS_SUCCESS:
            return {
                ...state,
                sortBys: action.sortBys
            }
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}