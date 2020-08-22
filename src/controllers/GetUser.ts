import { RouteHandlerMethod } from 'fastify';
import { string, type } from 'io-ts';
import * as Users from '../Users';
import { decodeOrThrow } from '../utils';

const requestC = type({
    params: type({
        id: string,
    }),
});

export const GetUser: RouteHandlerMethod = async (request, reply): Promise<Users.User> => {
    const parsedRequest = decodeOrThrow(requestC, request, () => reply.status(400));

    const user = await Users.get(parsedRequest.params.id);
    if (user) {
        return user;
    }
    else {
        reply.code(404);
        throw undefined;
    }
};
