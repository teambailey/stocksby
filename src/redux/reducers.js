import { combineReducers } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        counter: state.counter + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};

const symbolReducer = (state = { symbol: '' }, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STOCK':
      return {
        ...state,
        symbol: action.payload,
      };
    default:
      return state;
  }
};

const storeReducers = combineReducers({
  counterReducer,
  symbolReducer,
});

export default storeReducers;
