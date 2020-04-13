import axios from 'axios';

const API_KEY_QUERY = `?apiKey=${process.env.REACT_APP_API_KEY}`;

// // API caller helper functions
const apiCall_V1_Meta = (stock, meta, callback) => {
  axios
    .get(
      `https://api.polygon.io/v1/meta/symbols/${stock}/${meta}${API_KEY_QUERY}`
    )
    .then((res) => callback(res));
};

const apiCall_V2_Reference = (type, stock = '', callback) => {
  axios
    .get(
      `https://api.polygon.io/v2/reference/${type}/${stock}${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => callback(res));
};

// -------------------
// REFERENCE ENPOINTS
// -------------------

// Tickers
export const getTickers = (data) => {}; // Use to populate a complex search -- too complex to put together for this simple demo
// Ticker Types
export const getTickerTypes = (data) =>
  apiCall_V2_Reference('types', '', console.log); // Use to populate a complex search
// Ticker Details
export const getTickerDetails = (data) =>
  apiCall_V1_Meta(data, 'company', console.log);
// Ticker News
export const getTickerNews = (data) =>
  apiCall_V1_Meta(data, 'news', console.log);
// Markets
export const getMarkets = (data) =>
  apiCall_V2_Reference('markets', '', console.log); // Use to populate a complex search
// Locales
export const getLocales = (data) =>
  apiCall_V2_Reference('locales', '', console.log); // Use to populate a complex search

// -- Endpoint test in docs falled to fetch --
// Stock Splits
// Stock Dividends
// Stock Financials
// Market Status
// Market Holidays
