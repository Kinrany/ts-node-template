import { FastifyInstance } from 'fastify';
import * as controllers from './controllers';

export default async function api(app: FastifyInstance): Promise<void> {
    app.get('/user/:id', controllers.GetUser);
    app.get('/users', controllers.GetUsers);
}
