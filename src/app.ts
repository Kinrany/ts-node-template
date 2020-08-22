import Fastify, {FastifyInstance} from 'fastify';
import api from './api';
import fastifyCors from 'fastify-cors';

export default function App(): FastifyInstance {
    const app = Fastify({ logger: true });

    app.register(fastifyCors, {origin: '*'});

    app.get('/', async (_request, _reply) => 'Hello world!');
    app.register(api, {prefix: '/api'});

    return app;
}
