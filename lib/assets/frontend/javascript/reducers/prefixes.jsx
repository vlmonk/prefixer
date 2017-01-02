import SEARCH_PREFIX from '../actions';

const initialState = {
  prefixes: [],
  total: 0,
  page: 1,
  rows_per_page: 1,
  sort_order: {prefix: "asc"}
}
export default function prefixesReducer(state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_PREFIXES':
      return Object.assign({}, state, {prefixes: action.prefixes, text: action.text, page: action.page, total: action.total, sort_order: {prefix: "asc"}})

    case 'SORT':
      let l = {}
      let key = Object.keys(action.sort_order)[0];
      l[key] = action.sort_order[key];

      return Object.assign({}, state, {prefixes: action.prefixes, 
        sort_order: l})
    default:
      return state
  }
}
