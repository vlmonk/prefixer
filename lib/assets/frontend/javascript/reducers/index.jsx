import { combineReducers } from 'redux';

import prefixesReducer from './prefixes';

const appReducer = combineReducers({
  prefixesReducer
})

export default appReducer
