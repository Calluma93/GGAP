import React, { Component } from 'react'

class SearchBox extends Component {
    render() {
        return (
            <form className="row" onSubmit={this.props.onSubmit}>
                <div className="col-lg-10 col-sm-12">
                    <input
                        type="text"
                        value={this.props.searchPhrase}
                        onChange={this.props.handleSearchPhraseChange}
                        placeholder="To search, insert a few keywords from the title here."
                        className="form-box"
                    />
                </div>
                <div className="col-lg-2 col-sm-12">
                    <button className="btn btn-grey">
                        SEARCH
                    </button>
                </div>
            </form>
        );
    }
}

export default SearchBox;