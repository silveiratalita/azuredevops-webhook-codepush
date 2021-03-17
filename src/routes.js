import { Router } from 'express';
import cors from 'cors';
// eslint-disable-next-line import/no-named-as-default
import CodePushController from './app/controllers/CodePushController/CodePushController';

const routes = new Router();
routes.use(cors());
routes.post('/create', CodePushController.store);
// routes.patch('/auth',);
// routes.get('/codepush', CodePushController.getTasks);

export default routes;
