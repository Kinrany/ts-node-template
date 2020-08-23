import { FastifyInstance } from 'fastify';
import * as controllers from '../controllers';
import fastifyBasicAuth, { FastifyBasicAuthOptions } from 'fastify-basic-auth';

const validate: FastifyBasicAuthOptions['validate'] = async (username, password, _request, _reply) => {
    if (username === 'admin' && password === 'password') {
        return;
    }

    throw new Error('Admin access required.');
};

export async function api(app: FastifyInstance): Promise<void> {
    app.register(fastifyBasicAuth, {authenticate: true, validate});

    // Wait for basic auth plugin registration to finish.
    await app.after();

    app.post('/user', {onRequest: app.basicAuth}, controllers.PostUser);
    app.get('/user/create', {onRequest: app.basicAuth}, controllers.GetUserCreate);
    app.get('/user/:id', controllers.GetUser);
    app.get('/users', controllers.GetUsers);
}
