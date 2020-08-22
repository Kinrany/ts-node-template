import Fastify, {FastifyInstance} from 'fastify';
import {UsersController} from './UsersController';

export default function App(): FastifyInstance {
    const app = Fastify({ logger: true });

    app.get('/', async (_request, _reply) => 'Hello world!');
    app.register(UsersController, { prefix: '/api/users'});

    return app;
}
