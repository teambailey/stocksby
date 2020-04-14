// Action creation helper function
const action = (type, payload) => {
  return { type, payload };
};

// Actions
const SET_ACTIVE_STOCK = 'SET_ACTIVE_STOCK';
const SET_ACTIVE_STOCK_DETAILS = 'SET_ACTIVE_STOCK_DETAILS';
const SET_ACTIVE_STOCK_NEWS = 'SET_ACTIVE_STOCK_NEWS';

export const setActiveStock = (symbol) => action(SET_ACTIVE_STOCK, symbol);
export const setActiveStockDetails = (symbol) =>
  action(SET_ACTIVE_STOCK_DETAILS, symbol);
export const setActiveStockNews = (symbol) =>
  action(SET_ACTIVE_STOCK_NEWS, symbol);
