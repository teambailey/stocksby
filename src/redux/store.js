import { createStore } from 'redux';
import storeReducers from './reducers';

const store = createStore(
  storeReducers,
  // Needed for the chrome redux extention
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
