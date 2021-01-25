import { Router } from 'express';

import CharacterController from './app/controllers/CharacterController';
import ComicController from './app/controllers/ComicController';

import logRequestsMiddleware from './app/middlewares/logRequests';

const routes = new Router();

routes.use(logRequestsMiddleware);

routes.get('/characters', CharacterController.index);
routes.get('/characters/:id', CharacterController.show);

routes.get('/comics/:id', ComicController.show);

export default routes;
