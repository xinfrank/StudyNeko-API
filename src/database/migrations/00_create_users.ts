import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.uuid("user_id").primary();
    table.string("username").notNullable().unique();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
