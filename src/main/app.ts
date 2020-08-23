import Fastify, { FastifyInstance } from 'fastify';
import fastifyCors from 'fastify-cors';
import pino from 'pino';
import env from '../env';
import { api } from './api';

export default function App(): FastifyInstance {
    const app = Fastify({
        logger: pino({
            prettyPrint: env.LOG_PRETTY,
            level: env.LOG_LEVEL
        })
    });

    app.register(fastifyCors, {origin: '*'});

    app.get('/', async (_request, _reply) => 'Hello world!');
    app.register(api, {prefix: '/api'});

    return app;
}
