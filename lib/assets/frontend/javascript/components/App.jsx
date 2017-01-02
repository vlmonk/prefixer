import React from 'react';

import PaginationContainer from '../containers/PaginationContainer';
import PrefixesContainer from '../containers/PrefixesContainer';
import SearchContainer from '../containers/SearchContainer';



class App extends React.Component {
  render() {
    return (<div>
      <SearchContainer />
      <PrefixesContainer />
      <PaginationContainer />
    </div>);
  }
}

export default App;
