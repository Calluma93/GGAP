import {
    SERVER_LOG_IN_SUCCESS
} from '../actionTypes/logInActionTypes';
import {
    SERVER_EXPIRES_TOKEN,
    PENDING_LOGOUT_TIMER_STARTS,
    PENDING_LOGOUT_TIMER_EXPIRES
} from '../actionTypes/pendingLogoutActionTypes';
import {
    pendingLogoutTimerStarts,
    pendingLogoutTimerExpires,
    pendingLogoutTimerTicks
} from '../actionCreators/pendingLogoutActionCreators';
import { 
    interval
} from 'rxjs';
import { 
    switchMap,
    map,
    mapTo,
    mergeMap,
    takeUntil,
} from 'rxjs/operators';
import { combineEpics } from 'redux-observable';
import { ofType } from 'redux-observable';

const timerDuration = 30;

const getTimerDurationRemaining = secondIndex =>
    timerDuration - (secondIndex + 1)
;

const expiresTokenEpic = action$ =>
    action$.pipe(
        ofType(SERVER_EXPIRES_TOKEN),
        mapTo(pendingLogoutTimerStarts(timerDuration))
    )
;

const pendingLogoutTimerEpic = action$ => 
    action$.pipe(
        ofType(PENDING_LOGOUT_TIMER_STARTS),
        mergeMap(action => interval(1000).pipe(
            map(secondIndex =>
                getTimerDurationRemaining(secondIndex) <= 0
                    ? pendingLogoutTimerExpires()
                    : pendingLogoutTimerTicks(getTimerDurationRemaining(secondIndex))
            ),
            takeUntil(action$.pipe(
                ofType(SERVER_LOG_IN_SUCCESS, PENDING_LOGOUT_TIMER_EXPIRES)
            ))
        ))
    )
;

const waitForSuccessfulModalLoginEpic = action$ =>
    action$.pipe( 
        ofType(SERVER_EXPIRES_TOKEN),
        mergeMap(action =>
            action$.pipe(
                ofType(SERVER_LOG_IN_SUCCESS),
                mapTo(action.actionToRetry)
            )
        ),
    )
;

export const pendingLogoutEpics = combineEpics(
    expiresTokenEpic,
    waitForSuccessfulModalLoginEpic,
    pendingLogoutTimerEpic
);
