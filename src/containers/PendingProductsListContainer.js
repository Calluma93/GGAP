import { connect } from 'react-redux';
import PendingProductsList from '../pages/products/pendingProductsList/PendingProductsList';
import {
    userGetPendingProducts,
    userGetStores,
    userGetBrands,
} from '../actionCreators/pendingProductsActionCreators';
import {
    userGetSortBys
} from '../actionCreators/productsSortBysActionCreators';

function mapStateToProps(state) {
    return {
        pendingProducts: state.ui.pendingProducts.products,
        isGettingPendingProducts: state.ui.pendingProducts.isGettingPendingProducts,
        stores: state.stores,
        brands: state.ui.pendingProducts.brands,
        sortBys: state.ui.productsSortBys.sortBys,
        initialUserSettings: state.ui.pendingProducts.initialUserSettings,
        savedUserSettings: state.ui.pendingProducts.savedUserSettings
    };
}

function mapDispatchToProps(dispatch) {
    return{
        userGetPendingProducts(userSettings) {
            dispatch(userGetPendingProducts(userSettings));
        },
        userGetStores(){
            dispatch(userGetStores());
        },
        userGetBrands(){
            dispatch(userGetBrands());
        },
        userGetSortBys() {
            dispatch(userGetSortBys());
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingProductsList); 