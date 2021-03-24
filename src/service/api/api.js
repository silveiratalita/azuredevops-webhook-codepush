import axios from 'axios';

const url = axios.create({
  baseURL: 'https://dev.azure.com/',
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${process.env.TOKEN}`,
  },
});
export default url;
