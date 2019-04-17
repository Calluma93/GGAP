import {
    SERVER_LOG_IN_ERROR
} from '../../actionTypes/logInActionTypes';

import {
    SERVER_UPDATE_PASSWORD_ERROR,
    SERVER_UPDATE_EMPLOYEE_DETAILS_ERROR,
    SERVER_GET_EMPLOYEE_DETAILS_ERROR
} from '../../actionTypes/employeeDetailsActionTypes';

import {
    SERVER_GET_EMPLOYEES_ERROR,
    SERVER_ADD_EMPLOYEE_ERROR,
    SERVER_UPDATE_EMPLOYEE_ERROR,
    SERVER_UPDATE_EMPLOYEE_IS_DISABLED_ERROR,
    SERVER_GET_ROLES_ERROR
} from '../../actionTypes/employeesActionTypes';

import {
    USER_CLEAR_SERVER_ERROR
} from '../../actionTypes/serverErrorActionTypes';

import {
    SERVER_GET_HTML_PAGES_ERROR,
    SERVER_UPDATE_HTML_PAGE_ERROR,
    SERVER_ADD_HTML_PAGE_ERROR,
    SERVER_UPDATE_HTML_PAGE_PUBLISHED_ERROR,
    SERVER_DELETE_HTML_PAGE_ERROR,
    SERVER_GET_HTML_PAGE_TYPES_ERROR
} from '../../actionTypes/htmlPageActionTypes';

import {
    SERVER_GET_ARTICLES_ERROR,
    SERVER_GET_ARTICLE_ERROR,
    SERVER_UPDATE_ARTICLE_ERROR,
    SERVER_UPDATE_ARTICLE_IS_DISABLED_ERROR,
    SERVER_ADD_ARTICLE_ERROR,
    SERVER_UPDATE_ARTICLE_IMAGE_ERROR,
    SERVER_UPDATE_ARTICLE_BODY_IMAGE_ERROR,
    SERVER_GET_CONTENT_PARENTS_ERROR
} from '../../actionTypes/newsActionTypes';

import {
    SERVER_GET_PENDING_PRODUCTS_ERROR,
    SERVER_GET_STORES_ERROR,
    SERVER_GET_BRANDS_ERROR
} from '../../actionTypes/pendingProductsActionTypes';

import {
    SERVER_GET_SORT_BYS_ERROR
} from '../../actionTypes/productsSortBysActionTypes';

import {
    SERVER_GET_PRODUCTS_ERROR,
    SERVER_GET_PRODUCTS_BRANDS_ERROR,
    SERVER_GET_PRODUCTS_TAGS_ERROR,
    SERVER_GET_PRODUCTS_LAST_EDITORS_ERROR
} from '../../actionTypes/productsActionTypes';

import {
    SERVER_GET_CATEGORIES_ERROR,
} from '../../actionTypes/categoriesActionTypes';

import {
    USER_LOG_OUT
} from '../../actionTypes/privateLayoutActionTypes';

import { PENDING_LOGOUT_TIMER_EXPIRES } from '../../actionTypes/pendingLogoutActionTypes';

const initialState = false;

export function serverError(state = initialState, action) {
    switch(action.type) {
        case USER_CLEAR_SERVER_ERROR:
        case USER_LOG_OUT:
        case PENDING_LOGOUT_TIMER_EXPIRES:
            return initialState
        case SERVER_LOG_IN_ERROR:
        case SERVER_UPDATE_PASSWORD_ERROR:
        case SERVER_UPDATE_EMPLOYEE_DETAILS_ERROR:
        case SERVER_GET_EMPLOYEES_ERROR:
        case SERVER_ADD_EMPLOYEE_ERROR:
        case SERVER_UPDATE_EMPLOYEE_ERROR:
        case SERVER_UPDATE_EMPLOYEE_IS_DISABLED_ERROR:
        case SERVER_GET_ROLES_ERROR:
        case SERVER_GET_HTML_PAGES_ERROR:
        case SERVER_UPDATE_HTML_PAGE_ERROR:
        case SERVER_ADD_HTML_PAGE_ERROR:
        case SERVER_UPDATE_HTML_PAGE_PUBLISHED_ERROR:
        case SERVER_DELETE_HTML_PAGE_ERROR:
        case SERVER_GET_HTML_PAGE_TYPES_ERROR:
        case SERVER_GET_EMPLOYEE_DETAILS_ERROR:
        case SERVER_GET_ARTICLES_ERROR:
        case SERVER_GET_ARTICLE_ERROR:
        case SERVER_UPDATE_ARTICLE_ERROR:
        case SERVER_UPDATE_ARTICLE_IS_DISABLED_ERROR:
        case SERVER_ADD_ARTICLE_ERROR:
        case SERVER_UPDATE_ARTICLE_IMAGE_ERROR:
        case SERVER_UPDATE_ARTICLE_BODY_IMAGE_ERROR:
        case SERVER_GET_CONTENT_PARENTS_ERROR:
        case SERVER_GET_PENDING_PRODUCTS_ERROR:
        case SERVER_GET_PRODUCTS_ERROR:
        case SERVER_GET_STORES_ERROR:
        case SERVER_GET_BRANDS_ERROR:
        case SERVER_GET_SORT_BYS_ERROR:
        case SERVER_GET_CATEGORIES_ERROR:
        case SERVER_GET_PRODUCTS_BRANDS_ERROR:
        case SERVER_GET_PRODUCTS_TAGS_ERROR:
        case SERVER_GET_PRODUCTS_LAST_EDITORS_ERROR:
            return true
        default:
            return state
    }
}
