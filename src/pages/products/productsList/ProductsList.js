import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Select from '../../../components/customDefaultSelect/CustomDefaultSelect';

import { convertToQueryString } from '../../../helpers/urlEncodingHelper';
import ProductsListItem from '../ProductsListItem';
import Loader from '../../../components/loader/Loader';
import Navs from '../../../components/navs/Navs';
import SearchBox from '../../../components/searchBox/SearchBox';
import { 
  boolValuesWithDefault,
  arrayOfValuesWithDefault
} from '../../../helpers/selectHelper';
import { 
	getUserSettingsWithDefault, 
	specifiedUserSettingsAreEqual,
	getSanitisedUserSettings,
	specifiedUserSettingsAreSet
} from '../../../helpers/userSettingsHelper';

class ProductsList extends Component {

  constructor(props) {
    super(props);
    
    this.userSettingKeys = Object.keys(props.initialUserSettings);
    this.pageUrl = "/products/products-list/";

    this.state = {
			userSettings: getUserSettingsWithDefault(
				this.userSettingKeys, 
				props.userSettings, 
				props.savedUserSettings
			)
		};
  }

  componentDidMount() {
    if (specifiedUserSettingsAreSet(this.userSettingKeys, this.props.userSettings)) {
      this.props.userGetProducts(this.props.userSettings);
    }

    this.props.userGetCategories();
    this.props.userGetProductsBrands();
    this.props.userGetProductsTags();
    this.props.userGetProductsLastEditors();

    if (this.props.sortBys.length === 0) {
			this.props.userGetSortBys();
		}
  }

  componentDidUpdate(prevProps) {
    if (specifiedUserSettingsAreSet(this.userSettingKeys, this.props.userSettings)) {
      if (!specifiedUserSettingsAreEqual(this.userSettingKeys, prevProps.userSettings, this.props.userSettings)) {
        this.setState({ 
					userSettings: getSanitisedUserSettings(this.userSettingKeys, this.props.userSettings) 
				});
        this.props.userGetProducts(this.props.userSettings);
      }
    }
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(
			this.pageUrl + convertToQueryString({ ...this.state.userSettings, page: 1 })
		);
  };
  
  setUserSetting = (userSettingKey, userSettingValue) => {
    this.setState({
      userSettings: {
        ...this.state.userSettings,
        [userSettingKey]: userSettingValue
      }
    });
  };

  handleReset = (event) => {
    event.preventDefault();

    if (specifiedUserSettingsAreEqual(this.userSettingKeys, this.props.initialUserSettings, this.props.userSettings)) {
      this.setState({
        userSettings: this.props.initialUserSettings
      }); 
    }
    else {
      this.props.history.push(
        this.pageUrl + convertToQueryString(this.props.initialUserSettings)
      );
    }
  }

  render() {
    let products;

    if(this.props.isGettingProducts){
      products = <Loader height="60px" width="60px" top="60px" right="50%" />;
    }
    else{
      products = this.props.productsList.map((product, index) => (
        <ProductsListItem
          key={index} sku={product.sku} title={product.title}
          price={product.price} quantityInStock={product.quantityInStock} 
          quantityOnOrder={product.quantityOnOrder} quantityAllocated={product.quantityAllocated}
        />
      ));
    }

    return (
      !specifiedUserSettingsAreSet(this.userSettingKeys, this.props.userSettings) ?
      <Redirect to={this.pageUrl + convertToQueryString(this.props.savedUserSettings)}/> :
      <div className="products-list">

        <h4 className="page-main-heading">
          Products List
        </h4>

        <div className="searchbox">
          <SearchBox 
            onSubmit={this.handleSearchSubmit}
            searchPhrase={this.state.userSettings.searchPhrase}
            handleSearchPhraseChange={e => this.setUserSetting('searchPhrase', e.target.value)}
          />
        </div>

        <div className="filter-heading">
          <h5>Filter Pending Products</h5>
        </div> 

        <ul className="filters">
          <li>
            <input
              type="number"
              placeholder="Canonical SKU"
              value={this.state.userSettings.canonicalSku}
              onChange={(e) => this.setUserSetting('canonicalSku', e.target.value)}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.categoryId}
              userSettingsKey='categoryId'
              onChange={this.setUserSetting}
              options={[
                { 
                  value: '', 
                  label: 'All Categories' 
                },
                ...this.props.categories.allIds.map(categoryId => ({
                  value: categoryId, 
                  label: this.props.categories.byId[categoryId].adminName
                }))
              ]}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.tag}
              userSettingsKey='tag'
              onChange={this.setUserSetting}
              options={arrayOfValuesWithDefault('All Tags', this.props.tags)}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.brand}
              userSettingsKey='brand'
              onChange={this.setUserSetting}
              options={arrayOfValuesWithDefault('All Brands', this.props.brands)}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.lastEditor}
              userSettingsKey='lastEditor'
              onChange={this.setUserSetting}
              options={arrayOfValuesWithDefault('All Last Editors', this.props.lastEditors)}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.online}
              userSettingsKey='online'
              onChange={this.setUserSetting}
              options={boolValuesWithDefault('Online: All', 'Online', 'Not Online')}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.onClearance}
              userSettingsKey='onClearance'
              onChange={this.setUserSetting}
              options={boolValuesWithDefault('On Clearance: All', 'On Clearance', 'Not On Clearance')}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.hasCarrier}
              userSettingsKey='hasCarrier'
              onChange={this.setUserSetting}
              options={boolValuesWithDefault('Carrier: All', 'Has Carrier', 'Doesn\'t Have Carrier')}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.hasUniqueContent}
              userSettingsKey='hasUniqueContent'
              onChange={this.setUserSetting}
              options={boolValuesWithDefault('Unique Content: All', 'Has Unique Content', 'Doesn\'t Have Unique Content')}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.inStock}
              userSettingsKey='inStock'
              onChange={this.setUserSetting}
              options={boolValuesWithDefault('In Stock: All ', 'In Stock', 'Not In Stock')}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.onOrder}
              userSettingsKey='onOrder'
              onChange={this.setUserSetting}
              options={boolValuesWithDefault('Ordered: All', 'Ordered', 'Not Ordered')}
            />
          </li>
          <li>
            <Select
              value={this.state.userSettings.sortById}
              defaultValue={this.props.initialUserSettings.sortById}
              userSettingsKey='sortById'
              onChange={this.setUserSetting}
              options={[...this.props.sortBys.map(option => ({ value: option.id, label: option.label }))]}
            />
          </li>
          <li>
            <input
              type="number"
              placeholder="Max Number of Photos"
              value={this.state.userSettings.maxPhotos}
              onChange={(e) => this.setUserSetting('maxPhotos', e.target.value)}
            />
          </li>
          <li>
            <button className="btn btn-grey reset" type="button" onClick={this.handleReset}>
                RESET
            </button> 
          </li>
          <li className="filter-buttons">
            <Link className="btn btn-grey" to={
              this.pageUrl +
              convertToQueryString({ ...this.state.userSettings, page: 1 })
            }>
              Filter Results
            </Link>
          </li>
        </ul>

        <div className="product-table">

          <ul className="products-table__title-bar">
            <li className="sku">
              <p>Sku</p>
            </li>
            <li className="title">
              <p>Item</p>
            </li>
            <li className="price">
              <p>Price</p>
            </li>
            <li className="in-stock">
              <p>Stock</p>
            </li>
            <li className="on-order">
              <p>Ordered</p>
            </li>
            <li className="allocated">
              <p>Allocated</p>
            </li>
          </ul>

          {products}
            
          <Navs 
            prev={
              this.pageUrl +
              convertToQueryString({
                ...this.props.userSettings,
                page: Number(this.state.userSettings.page) - 1  
              })
            }
            next={
              this.pageUrl +
              convertToQueryString({
                ...this.props.userSettings,
                page: Number(this.state.userSettings.page) + 1
              })
            }
            page={this.state.userSettings.page}
          /> 

        </div>
      </div>
    )
  }
}

export default ProductsList;