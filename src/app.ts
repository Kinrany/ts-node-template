import Fastify, {FastifyInstance} from 'fastify';
import api from './api';

export default function App(): FastifyInstance {
    const app = Fastify({ logger: true });

    app.get('/', async (_request, _reply) => 'Hello world!');
    app.register(api, {prefix: '/api'});

    return app;
}
