import { combineReducers } from 'redux';
import { user } from './userReducer';
import { serverError } from './ui/serverErrorReducer';
import { logInAttempt } from './logInAttemptReducer';
import { employeeDetails } from './ui/employeeDetailsReducer';
import { employeesUi } from './ui/employeesUiReducer';
import { employees } from './employeesReducer';
import { employeeRoles } from './employeeRolesReducer';
import { htmlPages} from './ui/htmlPagesReducer';
import { htmlPageTypes } from './htmlPageTypesReducer';
import { news } from './ui/newsReducer';
import { products } from './ui/productsReducer';
import { pendingProducts } from './ui/pendingProductsReducer';
import { productsSortBys } from './ui/productsSortBysReducer';
import { stores } from './storesReducer';
import { categories } from './categoriesReducer';
import { pendingLogout } from './ui/pendingLogoutReducer';
import { contentParentTypes } from './contentParentTypesReducer';

const app = combineReducers({
    user,
    employees,
    employeeRoles,
    htmlPageTypes,
    stores,
    categories,
    logInAttempt,
    contentParentTypes,
    ui: combineReducers({
        pendingLogout,
        serverError,
        employeeDetails,
        employeesUi,
        news,
        htmlPages,
        products,
        pendingProducts,
        productsSortBys
    })
})

export default app