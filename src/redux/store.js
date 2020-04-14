import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import storeReducers from './reducers';

const store = createStore(
  storeReducers,
  applyMiddleware(thunk),
  // Needed for the chrome redux extention
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
