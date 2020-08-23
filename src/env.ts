import { exact, string, type } from 'io-ts';
import { BooleanFromString, NumberFromString, fromNullable } from 'io-ts-types';
import { decodeOrThrow } from './utils';

const envC = exact(type({
    PORT: fromNullable(NumberFromString, 3000),
    LOG_PRETTY: fromNullable(BooleanFromString, false),
    LOG_LEVEL: fromNullable(string, 'info'),
}));

export default decodeOrThrow(envC, process.env);
