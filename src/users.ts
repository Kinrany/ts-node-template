import { v4 as uuidv4 } from 'uuid';
import { fromPairs } from 'ramda';

export type User = {
    name: string;
    balance: number;
}

const users = new Map<string, User>();

export async function get(id: string): Promise<User | undefined> {
    return users.get(id);
}

export async function create(user: User): Promise<string> {
    const id = uuidv4();
    if (users.has(id)) {
        throw new Error(`Generated uuid ${id} already exists.`);
    }
    users.set(id, user);
    return id;
}

export async function list(): Promise<Record<string, User>> {
    return fromPairs([...users.entries()]);
}
