import React from 'react';

//import Search from '../containers/Search';
//import Prefixes from '../containers/Prefixes';
//import NextPage from '../containers/NextPage';
//import PreviousPage from '../components/PreviousPageLink';
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
