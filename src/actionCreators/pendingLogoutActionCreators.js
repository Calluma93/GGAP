import {
    SERVER_EXPIRES_TOKEN,
    PENDING_LOGOUT_TIMER_STARTS,
    PENDING_LOGOUT_TIMER_EXPIRES,
    PENDING_LOGOUT_TIMER_TICKS
} from '../actionTypes/pendingLogoutActionTypes';

export function serverExpiresToken(actionToRetry) {
    return {
        type: SERVER_EXPIRES_TOKEN,
        actionToRetry
    };
}

export function pendingLogoutTimerStarts(timerDuration) {
    return {
        type: PENDING_LOGOUT_TIMER_STARTS,
        timerDuration
    };
}

export function pendingLogoutTimerTicks(timerDurationRemaining) {
    return {
        type: PENDING_LOGOUT_TIMER_TICKS, 
        timerDurationRemaining
    }
}

export function pendingLogoutTimerExpires() {
    return {
        type: PENDING_LOGOUT_TIMER_EXPIRES
    };
}