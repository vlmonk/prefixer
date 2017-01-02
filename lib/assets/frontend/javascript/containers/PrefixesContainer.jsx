import React from 'react';

import { connect } from 'react-redux';
import PrefixList from '../components/PrefixList';

import { sort } from '../actions';
const mapStateToProps = (state) => {
  return {
    prefixes: state.prefixesReducer.prefixes,
    page: state.prefixesReducer.page,
    sort_order: state.prefixesReducer.sort_order
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (field, order, prefixes) => {
      dispatch(sort(field, order, prefixes))
    }
  }
}
let PrefixesContainer = connect(mapStateToProps, mapDispatchToProps)(PrefixList);

export default PrefixesContainer;
