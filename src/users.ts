import { exact, number, string, type } from 'io-ts';
import { Transaction } from 'knex';
import { fromPairs } from 'ramda';
import { v4 as uuidv4 } from 'uuid';
import db from './db';
import * as tables from './tables';
import { decodeOrThrow } from './utils';

export const userC = exact(type({
    name: string,
    balance: number,
}));

export type User = typeof userC._A;

const userQuery = (trx?: Transaction) => (trx || db)<tables.User>(tables.user);

export async function get(id: string): Promise<User | undefined> {
    const userRow = await userQuery().where(tables.userId, id).first();
    if (!userRow) {
        return undefined;
    }

    const user = decodeOrThrow(userC, userRow);
    return user;
}

export async function create(user: User): Promise<string> {
    const id = uuidv4();

    await db.transaction(async (trx) => {
        const userRow = await userQuery(trx).where(tables.userId, id).first();
        if (userRow) {
            throw new Error(`Generated uuid ${id} already exists.`);
        }

        await userQuery(trx).insert({
            ...user,
            [tables.userId]: id,
        });
    });

    return id;
}

export async function list(): Promise<Record<string, User>> {
    const userRows = await userQuery();
    const userEntries: [string, User][] = userRows.map(userRow => {
        const user = decodeOrThrow(userC, userRow);
        return [userRow[tables.userId], user];
    })
    return fromPairs(userEntries);
}
