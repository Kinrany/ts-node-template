import App from './app';

async function main() {
    const app = App();

    try {
        await app.listen(3000);
    } catch (e: unknown) {
        console.error(e);
        process.exit(1);
    }
}

main();
