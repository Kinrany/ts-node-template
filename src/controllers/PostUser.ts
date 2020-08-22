import { RouteHandlerMethod } from 'fastify';
import { exact, number, string, type } from 'io-ts';
import { isLeft} from 'fp-ts/lib/Either';
import * as Users from '../Users';
import reporter from 'io-ts-reporters';

const requestC = type({
    body: exact(type({
        name: string,
        balance: number,
    })),
});

export const PostUser: RouteHandlerMethod = async (request, reply): Promise<string | Error> => {
    const result = requestC.decode(request);
    if (isLeft(result)) {
        reply.code(400);
        return new Error(reporter.report(result).join('\n'));
    }

    const parsedRequest = result.right;

    return Users.create(parsedRequest.body);
};
