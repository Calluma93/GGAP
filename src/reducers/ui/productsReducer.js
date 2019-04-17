import{
    USER_GET_PRODUCTS,
    SERVER_GET_PRODUCTS_SUCCESS,
    SERVER_GET_PRODUCTS_ERROR,
    SERVER_GET_PRODUCTS_BRANDS_SUCCESS,
    SERVER_GET_PRODUCTS_TAGS_SUCCESS,
    SERVER_GET_PRODUCTS_LAST_EDITORS_SUCCESS
} from '../../actionTypes/productsActionTypes';
import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes';
import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';

const initialProductsState = {
    productsList: [],
    isGettingProducts: false
}, 
initialSavedUserSettings = {
    searchPhrase: '',
    page: '1',
    online: '',
    inStock: '',
    onOrder: '',
    onClearance: '',
    hasCarrier: '',
    hasUniqueContent: '',
    maxPhotos: '',
    canonicalSku: '',
    categoryId: '',
    brand: '',
    tag: '',
    lastEditor: '',
    sortById: '1'
},
initialBrandsState = {
    brands: []
},
initialTagsState = {
    tags: []
},
initialLastEditorsState = {
    lastEditors: []
},
initialState = {
    ...initialProductsState,
    ...initialBrandsState,
    ...initialTagsState,
    ...initialLastEditorsState,
    initialUserSettings: initialSavedUserSettings,
    savedUserSettings: initialSavedUserSettings
};

export function products(state = initialState, action){
    switch(action.type) {
        case USER_GET_PRODUCTS:
            return {
                ...state,
                productsList: [],
                isGettingProducts: true,
            };
        case SERVER_GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isGettingProducts: false,
                productsList: action.products,
                savedUserSettings: action.userSettings
            };
        case SERVER_GET_PRODUCTS_ERROR:
            return {
                ...state,
                ...initialProductsState
            };
        
        case SERVER_GET_PRODUCTS_BRANDS_SUCCESS:
            return {
                ...state,
                brands: action.brands
            };
        case SERVER_GET_PRODUCTS_TAGS_SUCCESS:
            return {
                ...state,
                tags: action.tags
            };
        case SERVER_GET_PRODUCTS_LAST_EDITORS_SUCCESS:
            return {
                ...state,
                lastEditors: action.lastEditors
            };
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState;
        default:
            return state;
    }
}