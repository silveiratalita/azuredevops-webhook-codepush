import axios from 'axios';

const url = axios.create({
  baseURL: 'https://dev.azure.com/',
  // timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Basic Onp6cDdkdHd1cDJ0NXJv===ZmYzZ2FsZ2g1ZGQUDHYDNa2RpcHNocWdxdGpvaDVid3I2a294bnFsaXE=',
  },
});
export default url;
