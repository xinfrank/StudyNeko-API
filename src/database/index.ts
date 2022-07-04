import knex from "knex";
import dotenv from "dotenv";
dotenv.config({ path: "../../config.env" });

console.log(process.env.PG_CONNECTION_STRING);
const db = knex({
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ["knex", "public"],
});

export default db;
