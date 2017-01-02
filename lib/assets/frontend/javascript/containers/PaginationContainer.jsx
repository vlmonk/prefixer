import React from 'react';

import { connect } from 'react-redux';
import { searchPrefix } from '../actions';

import Pagination from '../components/Pagination';

const mapStateToProps = (state) => {
  return {
    page: state.prefixesReducer.page,
    total: state.prefixesReducer.total,
    text: state.prefixesReducer.text,
    prefixes: state.prefixesReducer.prefixes
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (text, page) => {
      dispatch(searchPrefix(text, page));
    }
  }
}

let PaginationContainer = connect(mapStateToProps, mapDispatchToProps)(Pagination);
export default PaginationContainer;
