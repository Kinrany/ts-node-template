import { RouteHandlerMethod } from 'fastify';
import { exact, string, type } from 'io-ts';
import { NumberFromString } from 'io-ts-types';
import * as Users from '../Users';
import { decodeOrThrow } from '../utils';

const requestC = type({
    query: exact(type({
        name: string,
        balance: NumberFromString,
    })),
});

export const GetUserCreate: RouteHandlerMethod = async (request, reply): Promise<string> => {
    const parsedRequest = decodeOrThrow(requestC, request, () => reply.status(400));

    return Users.create(parsedRequest.query);
};
