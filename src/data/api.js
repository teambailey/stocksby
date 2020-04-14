import axios from 'axios';
import { setValidActiveStock } from '../redux/actions';
import store from '../redux/store';

const API_KEY_QUERY = `apiKey=${process.env.REACT_APP_API_KEY}`;
const BASE_URL_V1 = `https://api.polygon.io/v1/`;
const BASE_URL_V2 = `https://api.polygon.io/v2/`;

// Ticker Details
export const getTickerDetails = (stock, callback) => {
  store.dispatch(setValidActiveStock(true));
  axios
    .get(`${BASE_URL_V1}meta/symbols/${stock}/company?${API_KEY_QUERY}`)
    .then(callback)
    .catch((err) => {
      store.dispatch(setValidActiveStock(false));
      console.log(err);
    });
};

// Ticker News
export const getTickerNews = (stock, callback) => {
  axios
    .get(
      `${BASE_URL_V1}meta/symbols/${stock}/news?perpage=10&page=1&${API_KEY_QUERY}`
    )
    .then(callback)
    .catch((err) => console.log(err));
};

// Last trade for symbol
export const getLastTrade = (stock, callback) => {
  axios
    .get(`${BASE_URL_V1}last/stocks/${stock}?${API_KEY_QUERY}`)
    .then(callback)
    .catch((err) => console.log(err));
};

// Previous Close
export const getPreviousClose = (stock, callback) => {
  axios
    .get(`${BASE_URL_V2}aggs/ticker/${stock}/prev?${API_KEY_QUERY}`)
    .then(callback)
    .catch((err) => console.log(err));
};

// Last quote for symbol
export const getLastQuote = (stock, callback) => {
  axios
    .get(`${BASE_URL_V1}last_quote/stocks/${stock}?${API_KEY_QUERY}`)
    .then(callback)
    .catch((err) => console.log(err));
};

// Daily Open / Close
// *** Endpoint failed to return when testing at https://polygon.io/docs#get_v1_open-close__symbol___date__anchor
export const getOpenClose = (stock, callback) => {
  axios
    .get(`${BASE_URL_V1}open-close/${stock}/2020-4-15?${API_KEY_QUERY}`)
    .then(callback)
    .catch((err) => console.log(err));
};
