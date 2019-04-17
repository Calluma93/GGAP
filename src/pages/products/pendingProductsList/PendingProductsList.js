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

class PendingProductsList extends Component {

	constructor(props) {
		super(props);

		this.userSettingKeys = Object.keys(props.initialUserSettings);
		this.pageUrl = "/products/pending-products-list/";

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
			this.props.userGetPendingProducts(this.props.userSettings);
		}

		this.props.userGetBrands();

		if (this.props.stores.length === 0) {
			this.props.userGetStores();
		}

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
				this.props.userGetPendingProducts(this.props.userSettings);
			}
		}
	}

	setUserSetting = (userSettingKey, userSettingValue) => {
		this.setState({
			userSettings: {
				...this.state.userSettings,
				[userSettingKey]: userSettingValue
			}
		});
	};

	handleSearchSubmit = (event) => {
		event.preventDefault();
		this.props.history.push(
			this.pageUrl + convertToQueryString({ ...this.state.userSettings, page: 1 })
		);
	}

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
		let pendingProducts;

		if (this.props.isGettingPendingProducts) {
			pendingProducts = <Loader height="60px" width="60px" top="60px" right="50%" />;
		}
		else {
			pendingProducts = this.props.pendingProducts.map((pendingProduct, index) => (
				<ProductsListItem
					key={index} sku={pendingProduct.sku} title={pendingProduct.title}
					price={pendingProduct.price} quantityInStock={pendingProduct.quantityInStock}
					quantityOnOrder={pendingProduct.quantityOnOrder} quantityAllocated={pendingProduct.quantityAllocated}
				/>
			));
		}

		return (
			!specifiedUserSettingsAreSet(this.userSettingKeys, this.props.userSettings) ?
			<Redirect to={this.pageUrl + convertToQueryString(this.props.savedUserSettings)} /> :
			<div className="products-list">
				<h4 className="page-main-heading">
					Pending Products List
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
						<Select 
							value={this.state.userSettings.stockLocationId}
							userSettingsKey='stockLocationId'
							onChange={this.setUserSetting}
							options={[
								{ value: '', label: 'All Stores' },
								...this.props.stores.map(store => ({ value: store.id, label: store.name }))
							]}
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
							value={this.state.userSettings.inStock}
							userSettingsKey='inStock'
							onChange={this.setUserSetting}
							options={boolValuesWithDefault('In Stock: All', 'In Stock', 'Not In Stock')}
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
						<input
							type="number"
							placeholder="£ Min Price"
							value={this.state.userSettings.minimumPrice}
							onChange={e => this.setUserSetting('minimumPrice', e.target.value)}
						/>
					</li>
					<li>
						<input
							type="number"
							placeholder="£ Max Price"
							value={this.state.userSettings.maximumPrice}
							onChange={e => this.setUserSetting('maximumPrice', e.target.value)}
						/>
					</li>
					<li>
						<Select
							value={this.state.userSettings.sortById}
							defaultValue={this.props.initialUserSettings.sortById}
							userSettingsKey='sortById'
							onChange={this.setUserSetting}
							options={this.props.sortBys.map(sortBy => ({ value: sortBy.id, label: sortBy.label })) }
						/>
					</li>
					<li className="filter-buttons">
						<button className="btn btn-grey reset" type="button" onClick={this.handleReset}>
							RESET
						</button>
					</li>
					<li>
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

					{pendingProducts}

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

export default PendingProductsList;