import {
    SERVER_GET_PENDING_PRODUCTS_SUCCESS,
    SERVER_GET_PENDING_PRODUCTS_ERROR,
    SERVER_GET_BRANDS_SUCCESS,
    USER_GET_PENDING_PRODUCTS
} from '../../actionTypes/pendingProductsActionTypes';
import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';

const initialPendingProductsState = {
    products: [],
    isGettingPendingProducts: false
},
initialSavedUserSettings = {
    page: '1',
    searchPhrase: '',
    stockLocationId: '',
    brand: '',
    inStock: '',
    onOrder: '',
    minimumPrice: '',
    maximumPrice: '',
    sortById: '1'
},
initialBrandsState = {
    brands: []
},
initialState = {
    ...initialPendingProductsState,
    ...initialBrandsState,
    initialUserSettings: initialSavedUserSettings,
    savedUserSettings: initialSavedUserSettings
};

export function pendingProducts(state = initialState, action){
    switch(action.type) {
        case USER_GET_PENDING_PRODUCTS:
            return {
                ...state,
                ...initialPendingProductsState,
                isGettingPendingProducts: true
            }
        case SERVER_GET_PENDING_PRODUCTS_SUCCESS:
            return {
                ...state,
                ...initialPendingProductsState,
                products: action.products,
                savedUserSettings: action.userSettings
            }
        case SERVER_GET_PENDING_PRODUCTS_ERROR:
            return {
                ...state,
                ...initialPendingProductsState
            }
        case SERVER_GET_BRANDS_SUCCESS:
            return {
                ...state,
                brands: action.brands
            }
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        default:
            return state
    }
}