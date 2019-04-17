import{
    SERVER_GET_CATEGORIES_SUCCESS,
    USER_GET_CATEGORIES
} from '../actionTypes/categoriesActionTypes';
import {
    USER_LOG_OUT
} from '../actionTypes/privateLayoutActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../actionTypes/pendingLogoutActionTypes';

const initialState = {
    byId: {},
    allIds: [],
    isGettingCategories: false
};

export function categories(state = initialState, action) {

    switch(action.type) {
        case USER_GET_CATEGORIES:
            return {
                ...state,
                isGettingCategories: true
            };
        case SERVER_GET_CATEGORIES_SUCCESS:

            let byId = {};

            action.categories.map(category => 
                byId[category.categoryId] = category
            )

            return {
                ...state,
                byId,
                allIds: action.categories.map(category => category.categoryId),
                isGettingCategories: false
            };
            
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState;
        default:
            return state;
    }
}