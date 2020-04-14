import { combineReducers } from 'redux';

const searchReducer = (state = { symbol: 'AAPL' }, action) => {
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

const tickerDetails = (state = { details: {} }, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STOCK_DETAILS':
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

const tickerNews = (state = { news: {} }, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STOCK_NEWS':
      return {
        ...state,
        details: action.payload,
      };
    default:
      return state;
  }
};

const storeReducers = combineReducers({
  searchReducer,
  tickerDetails,
  tickerNews,
});

export default storeReducers;
