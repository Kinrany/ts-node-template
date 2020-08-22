import Fastify, { FastifyInstance } from 'fastify';

export default function App(): FastifyInstance {
    const app = Fastify({ logger: true });

    app.get('/', async (_request, _reply) => 'Hello world!');

    return app;
}
