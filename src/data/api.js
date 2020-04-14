import axios from 'axios';
const API_KEY_QUERY = `apiKey=${process.env.REACT_APP_API_KEY}`;
const BASE_URL_V1 = `https://api.polygon.io/v1/`;

// Ticker Details
export const getTickerDetails = (stock, callback) => {
  axios
    .get(`${BASE_URL_V1}meta/symbols/${stock}/company?${API_KEY_QUERY}`)
    .then(callback);
};
// Ticker News
export const getTickerNews = (stock, callback) => {
  axios
    .get(
      `${BASE_URL_V1}meta/symbols/${stock}/news?perpage=10&page=1&${API_KEY_QUERY}`
    )
    // .then((res) => console.log(res));
    .then(callback);
};
