import {
    USER_GET_CONTENT_PARENT_TYPES,
    SERVER_GET_CONTENT_PARENT_TYPES_SUCCESS
} from '../actionTypes/newsActionTypes';
import { USER_LOG_OUT } from '../actionTypes/privateLayoutActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';

const initialState = {
    byId: {},
    allIds: [],
    isGettingContentParentTypes: false
};

export function contentParentTypes(state = initialState, action) {

    switch(action.type) {
        case USER_GET_CONTENT_PARENT_TYPES:
            return {
                ...state,
                isGettingContentParentTypes: true
            };
        case SERVER_GET_CONTENT_PARENT_TYPES_SUCCESS:

            let byId = {};

            action.contentParentTypes.map(contentParentType =>
                byId[contentParentType.type] = contentParentType 
            );

            return {
                ...state,
                byId,
                allIds: action.contentParentTypes.map(contentParentType => contentParentType.type),
                isGettingContentParentTypes: false
            };
            
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState;
        default:
            return state;
    }
}