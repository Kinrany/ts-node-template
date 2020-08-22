import { FastifyPluginAsync } from 'fastify';
import * as Users from './Users';

export const UsersController: FastifyPluginAsync = async (app) => {
    app.get('/', async (_request, _reply): Promise<Record<string, Users.User>> => {
        return Users.list();
    });

    app.get('/:id', async (request, reply) => {
        const {id} = request.params as {id: string};
        const user = await Users.get(id);
        if (user) {
            return user;
        }
        else {
            reply.code(400);
            throw undefined;
        }
    });
};
