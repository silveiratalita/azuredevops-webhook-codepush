import express from 'express';
import './database';
import routes from './routes';
// import session from 'express-session';
// import dotenv from 'dotenv';
// import envalid from 'envalid';
// import * as oauth2 from 'oauth2-api-azure';
// import { IAuthSettings, SecurityStrategies } from 'oauth2-api-azure';

// dotenv.config();

// const env = envalid.cleanEnv(process.env, {
//   TENANT_ID: envalid.str({
//     example: 'd197a05e-...',
//     desc: 'Azure AD tenant name or ID. e.g. contoso.onmicrosoft.com',
//   }),
//   CLIENT_ID: envalid.str({
//     example: 'd197a05e-...',
//     desc:
//       'The APP ID of the client app that was registered and configured to have access to the Azure resource',
//   }),
//   CLIENT_SECRET: envalid.str({
//     example: 'd197a05e-...',
//     desc: 'The Client Secret of the Client App above',
//   }),
//   RESOURCE_ID: envalid.str({
//     example: 'd197a05e-...',
//     desc: 'The unique APP ID of the Azure Web API to obtain access to',
//   }),
//   RBAC_GROUP: envalid.str({
//     example: 'API Group',
//     desc:
//       'The name of the group of users for whom access to this API is granted',
//   }),
//   // PORT: envalid.port({
//   //   example: '3000',
//   //   default: 3000,
//   //   desc: 'The localhost port on which this sample would run',
//   // }),
// });

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
    // this.server.use(express.urlencoded());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
