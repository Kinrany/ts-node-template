import * as Knex from "knex";

const user = 'user';

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable(user, t => {
        t.uuid('user_id').notNullable().primary();
        t.string('name').notNullable();
        t.integer('balance').notNullable();
        t.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable(user);
}

