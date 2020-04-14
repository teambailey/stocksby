import { combineReducers } from 'redux';

const validateSymbol = (state = { isValidSymbol: true }, action) => {
  switch (action.type) {
    case 'SET_VALID_ACTIVE_STOCK':
      console.log('here', action.payload);

      return {
        ...state,
        isValidSymbol: action.payload,
      };
    default:
      return state;
  }
};

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

const lastTrade = (state = { last: {} }, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STOCK_LAST_TRADE':
      return {
        ...state,
        last: action.payload,
      };
    default:
      return state;
  }
};

const lastQuote = (state = { quote: {} }, action) => {
  switch (action.type) {
    case 'SET_ACTIVE_STOCK_LAST_QUOTE':
      return {
        ...state,
        quote: action.payload,
      };
    default:
      return state;
  }
};

const storeReducers = combineReducers({
  validateSymbol,
  searchReducer,
  tickerDetails,
  tickerNews,
  lastTrade,
  lastQuote,
});

export default storeReducers;
