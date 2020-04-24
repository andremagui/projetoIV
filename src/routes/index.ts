import { Router } from 'express';
import dataRouter from './users.routes';

const routes = Router();

// toda rota que iniciar com /appointments (independente do método)
routes.use('/data', dataRouter);

export default routes;
