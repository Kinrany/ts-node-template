import { RouteHandlerMethod } from 'fastify';
import { exact, number, string, type } from 'io-ts';
import * as Users from '../Users';
import { decodeOrThrow } from '../utils';

const requestC = type({
    body: exact(type({
        name: string,
        balance: number,
    })),
});

export const PostUser: RouteHandlerMethod = async (request, reply): Promise<string> => {
    const parsedRequest = decodeOrThrow(requestC, request, () => reply.status(400));

    return Users.create(parsedRequest.body);
};
