import axios from 'axios';

const url = axios.create({
  baseURL: 'https://dev.azure.com/',
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Basic Onp6cDdkdHd1cDJ0NXJvZmYzZ2FsZ2g1ZGQya2RpcHNocWdxdGpvaDVid3I2a294bnFsaXE=',
  },
  Authorization: 'zzp7dtwup2t5roff3galgh5dd2kdipshqgqtjoh5bwr6koxnqliq',
});
export default url;
