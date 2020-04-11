import axios from 'axios';

const API_KEY_QUERY = '?apiKey=toL8QYguX3mVMAttkRL4f_qVF2zNhd11FL_wcV';

const BASE_URL_V1 = 'https://api.polygon.io/v1';

const getApi = () => {
  axios.get(`${BASE_URL_V1}/last/stocks/AAPL${API_KEY_QUERY}`).then((res) => {
    console.log(res);
  });
  console.log('sup');
};

export default getApi;
