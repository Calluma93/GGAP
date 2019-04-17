import { 
    PENDING_LOGOUT_TIMER_TICKS,
    PENDING_LOGOUT_TIMER_STARTS
} from '../../actionTypes/pendingLogoutActionTypes';
import { 
    SERVER_LOG_IN_SUCCESS
} from '../../actionTypes/logInActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';
import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes';

const initialState = {
    active: false,
    timer: 0
};

export function pendingLogout(state = initialState, action) {

    switch (action.type) {
        case SERVER_LOG_IN_SUCCESS:
            return {
                ...state,
                ...initialState
            };
        case PENDING_LOGOUT_TIMER_STARTS:
            return {
                ...state,
                active: true,
                timer: action.timerDuration
            };
        case PENDING_LOGOUT_TIMER_TICKS:
            return {
                ...state,
                timer: action.timerDurationRemaining
            };
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState;
        default:
            return state;
    }
}