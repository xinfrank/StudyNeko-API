import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("guides", (table) => {
    table.uuid("guide_id").primary();
    table.string("title").notNullable();
    table.string("description").notNullable();
    table.jsonb("content");
    table.string("pic_URL");
    table.timestamps(true, true);
    table
      .uuid("user_id")
      .references("user_id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("guides");
}
