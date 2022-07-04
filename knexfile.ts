import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

module.exports = {
  client: "pg",
  connection: process.env.PG_CONNECTION_STRING,
  searchPath: ["knex", "public"],
  migrations: {
    directory: path.resolve(__dirname, "src/database", "migrations"),
  },
};
