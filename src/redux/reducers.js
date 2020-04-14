import { combineReducers } from 'redux';

// Sets the validation for the ticker symbol
const validateSymbol = (state = { isValidSymbol: true }, action) => {
  switch (action.type) {
    case 'SET_VALID_ACTIVE_STOCK':
      return {
        ...state,
        isValidSymbol: action.payload,
      };
    default:
      return state;
  }
};

// Sets the ticker symbol and includes a default of Apple inc.
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

// Sets the company details and used to validate the symbol
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

// Sets the company news
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

// Sets the last trade value
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

// Sets the last quote
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

// Combine all reducers
const storeReducers = combineReducers({
  validateSymbol,
  searchReducer,
  tickerDetails,
  tickerNews,
  lastTrade,
  lastQuote,
});

export default storeReducers;
