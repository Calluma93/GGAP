import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import Loader from '../../../../components/loader/Loader';
import NewsListItem from '../newsListItem/NewsListItem';

import { convertToQueryString } from '../../../../helpers/urlEncodingHelper';
import Navs from '../../../../components/navs/Navs';
import SearchBox from '../../../../components/searchBox/SearchBox';
import { 
	getUserSettingsWithDefault, 
	specifiedUserSettingsAreEqual,
	getSanitisedUserSettings,
	specifiedUserSettingsAreSet
} from '../../../../helpers/userSettingsHelper';

class NewsList extends Component {

  constructor(props) {
    super(props);
    
    this.userSettingKeys = Object.keys(props.initialUserSettings);
    this.pageUrl = "/content/news/";

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
      this.props.onUserLoadsNewsArticles(this.props.userSettings);
    }
  }

  componentDidUpdate(prevProps) {
    if (specifiedUserSettingsAreSet(this.userSettingKeys, this.props.userSettings)) {
      if (!specifiedUserSettingsAreEqual(this.userSettingKeys, prevProps.userSettings, this.props.userSettings)) {
        this.setState({ 
					userSettings: getSanitisedUserSettings(this.userSettingKeys, this.props.userSettings) 
				});
        this.props.onUserLoadsNewsArticles(this.props.userSettings);
      }
    }
  }

  handleSearchPhraseChange = (event) => {
    this.setState({
			userSettings: {
				...this.state.userSettings,
				searchPhrase: event.target.value
			}
		});
  }

  handleSearchSubmit = (event) => {
    event.preventDefault();
    this.props.history.push(
      this.pageUrl + convertToQueryString({ ...this.state.userSettings, page: 1 })
    );
  }

  render(){
    let newsArticles;

    if(this.props.isGettingNewsArticles){
      newsArticles = <Loader height="60px" width="60px" top="-60px" right="48%" />;
    }
    else{
      newsArticles = this.props.articles.map((article, index) => (
        <NewsListItem
          title={article.title} status={article.status} lastPublished={article.lastPublished}
          lastEdited={article.lastEdited} articleId={article.articleId} key={index}
        />
      ));
    } 
    
    return(
      !specifiedUserSettingsAreSet(this.userSettingKeys, this.props.userSettings) ?
        <Redirect to={this.pageUrl + convertToQueryString(this.props.savedUserSettings)}/> :
        <div className="news-article-list">        
          <div className="row">
            <div className="col-sm-12">
              <h4 className="page-main-heading">
                News
              </h4>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12 searchbox">
              <SearchBox 
                onSubmit={this.handleSearchSubmit}
                searchPhrase={this.state.userSettings.searchPhrase}
                handleSearchPhraseChange={this.handleSearchPhraseChange}
              />
            </div>
          </div>
          
          <div className="row hr"/>

          <div className="row">
            <div className="col-sm-12 news-articles-container">
              <div className="row m-t-30">
                <div className="col-xl-10 col-lg-10 col-sm-12"><h6>New News Article</h6></div>
                <div className="col-xl-2 col-lg-2 col-sm-12"><Link to="/content/news/create/" className="btn btn-green">ADD</Link></div>
              </div>
            </div> 
          </div>

          <div className="row">
            <div className="col-sm-12 news-articles-container">
              {newsArticles}
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
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
        </div>
    )
  }
}

export default NewsList;