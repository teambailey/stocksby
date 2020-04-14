// Action creation helper function
const action = (type, payload) => {
  return { type, payload };
};

// Actions
const SET_VALID_ACTIVE_STOCK = 'SET_VALID_ACTIVE_STOCK';
const SET_ACTIVE_STOCK = 'SET_ACTIVE_STOCK';
const SET_ACTIVE_STOCK_DETAILS = 'SET_ACTIVE_STOCK_DETAILS';
const SET_ACTIVE_STOCK_NEWS = 'SET_ACTIVE_STOCK_NEWS';
const SET_ACTIVE_STOCK_LAST_TRADE = 'SET_ACTIVE_STOCK_LAST_TRADE';
const SET_ACTIVE_STOCK_LAST_QUOTE = 'SET_ACTIVE_STOCK_LAST_QUOTE';

// Export functions
export const setValidActiveStock = (symbol) =>
  action(SET_VALID_ACTIVE_STOCK, symbol);
export const setActiveStock = (symbol) => action(SET_ACTIVE_STOCK, symbol);
export const setActiveStockDetails = (symbol) =>
  action(SET_ACTIVE_STOCK_DETAILS, symbol);
export const setActiveStockNews = (symbol) =>
  action(SET_ACTIVE_STOCK_NEWS, symbol);
export const setActiveLastTrade = (symbol) =>
  action(SET_ACTIVE_STOCK_LAST_TRADE, symbol);
export const setActiveLastQuote = (symbol) =>
  action(SET_ACTIVE_STOCK_LAST_QUOTE, symbol);
