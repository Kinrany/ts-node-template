import { exact, string, type } from 'io-ts';
import { BooleanFromString, NumberFromString, fromNullable, NonEmptyString } from 'io-ts-types';
import { decodeOrThrow } from './utils';

const envC = exact(type({
    PORT: fromNullable(NumberFromString, 3000),
    LOG_PRETTY: fromNullable(BooleanFromString, false),
    LOG_LEVEL: fromNullable(string, 'info'),
    DB_HOST: fromNullable(string, '127.0.0.1'),
    DB_PORT: fromNullable(NumberFromString, 5432),
    DB_USER: fromNullable(string, 'postgres'),
    DB_PASSWORD: NonEmptyString,
    DB_DATABASE_NAME: fromNullable(string, 'postgres'),
}));

export default decodeOrThrow(envC, process.env);
