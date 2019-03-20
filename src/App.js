import React, { Component } from 'react';

import './search/search'
import Search from './search/search';

class App extends Component {
  render() {
    return (
      <Search fetch={q=>q}></Search>
    );
  }
}

export default App;
