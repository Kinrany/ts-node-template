import { RouteHandlerMethod } from 'fastify';
import { string, type } from 'io-ts';
import * as Users from '../Users';

const requestC = type({
    params: type({
        id: string,
    }),
});

export const GetUser: RouteHandlerMethod = async (request, reply) => {
    if (!requestC.is(request)) {
        reply.code(400);
        throw undefined;
    }

    const user = await Users.get(request.params.id);
    if (user) {
        return user;
    }
    else {
        reply.code(404);
        throw undefined;
    }
};
