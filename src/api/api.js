import axios from 'axios';

const BASE_URL_V1 = 'https://api.polygon.io/v1';

const getApi = () => {
  axios
    .get(
      `${BASE_URL_V1}/last/stocks/AAPL?apiKey=${process.env.REACT_APP_API_KEY}`
    )
    .then((res) => {
      console.log(res);
    });
  console.log('sup');
};

export default getApi;
