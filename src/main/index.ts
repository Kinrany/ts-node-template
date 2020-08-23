import App from './app';
import env from '../env';

async function main() {
    const app = App();

    try {
        await app.listen(env.PORT);
    } catch (e: unknown) {
        console.error(e);
        process.exit(1);
    }
}

main();
