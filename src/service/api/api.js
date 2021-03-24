import axios from 'axios';

const url = axios.create({
  baseURL: 'https://dev.azure.com/',
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${process.env.TOKEN}`,
  },
  Authorization: 'zzp7dtwup2t5roff3galgh5dd2kdipshqgqtjoh5bwr6koxnqliq',
});
export default url;
