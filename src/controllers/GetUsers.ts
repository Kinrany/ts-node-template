import {RouteHandlerMethod} from 'fastify';
import * as Users from '../Users';

export const GetUsers: RouteHandlerMethod = async (_request, _reply): Promise<Record<string, Users.User>> => {
    return Users.list();
};
