import Fastify from 'fastify';

async function main() {
    const app = Fastify({ logger: true });

    app.get('/', async (_request, _reply) => 'Hello world!');

    try {
        await app.listen(3000);
    } catch (e: unknown) {
        console.error(e);
        process.exit(1);
    }
}

main();
