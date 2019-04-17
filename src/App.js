import React, { Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import solid from '@fortawesome/fontawesome-free-solid'

import MainRouting from './containers/MainRoutingContainer';

fontawesome.library.add(brands, solid);
window.FontAwesomeConfig = {
  searchPseudoElements: true
}

class App extends Component {
  render() {
    return (
      <MainRouting />
    );
  }
}

export default App;
