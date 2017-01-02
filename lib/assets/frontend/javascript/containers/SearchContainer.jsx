import React from 'react';
import SearchForm from '../components/SearchForm';

import { connect } from 'react-redux';

import { searchPrefix } from '../actions';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (text, page) => {
      dispatch(searchPrefix(text, page));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    page: state.prefixesReducer.page
  }
}

let SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchForm);

export default SearchContainer;


