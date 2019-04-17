import { connect } from 'react-redux';
import {
    userGetProducts,
    userGetProductsBrands,
    userGetProductsTags,
    userGetProductsLastEditors
} from '../actionCreators/productsActionCreators';
import{
    userGetCategories,
} from '../actionCreators/categoriesActionCreators';
import {
    userGetSortBys
} from '../actionCreators/productsSortBysActionCreators';
import ProductsList from '../pages/products/productsList/ProductsList';

function mapStateToProps(state){
    return{
        productsList: state.ui.products.productsList,
        isGettingProducts: state.ui.products.isGettingProducts,
        categories: state.categories,
        brands: state.ui.products.brands,
        tags: state.ui.products.tags,
        sortBys: state.ui.productsSortBys.sortBys,
        lastEditors: state.ui.products.lastEditors,
        savedUserSettings: state.ui.products.savedUserSettings,
        initialUserSettings: state.ui.products.initialUserSettings
    }
}

function mapDispatchToProps(dispatch){
    return{
        userGetProducts(userSettings){
            dispatch(userGetProducts(userSettings));
        },
        userGetCategories() {
            dispatch(userGetCategories());
        },
        userGetProductsBrands() {
            dispatch(userGetProductsBrands());
        },
        userGetProductsTags() {
            dispatch(userGetProductsTags());
        },
        userGetProductsLastEditors() {
            dispatch(userGetProductsLastEditors());
        },
        userGetSortBys() {
            dispatch(userGetSortBys());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);