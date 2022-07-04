import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("saves", (table) => {
    table.uuid("id").primary();
    table.uuid("user_id").notNullable().unique();
    table.uuid("guide_id").notNullable().unique();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("saves");
}
