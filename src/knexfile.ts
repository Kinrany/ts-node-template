import { Config } from 'knex';
import env from './env';

const config: Config = {
    client: 'pg',
    connection: {
        host: env.DB_HOST,
        port: env.DB_PORT,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        database: env.DB_DATABASE_NAME,
    },
    migrations: {
        extension: 'ts',
    },
};

export default config;
