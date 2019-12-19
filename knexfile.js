require("dotenv").config("./");

module.exports = {
  development: {
    client: "pg",
    useNullAsDefault: true,
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./database/migrations"
    },
    seeds: { directory: "./database/seeds" },
    pool: {
      afterCreate: (conn, done) => {
        conn.run("PRAGMA foreign_keys = ON", done);
      }
    },

    testing: {
      client: "pg",
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./database/migrations"
      },
      seeds: { directory: "./database/seeds" }
    },

    production: {
      client: "pg",
      connection: process.env.DATABASE_URL,
      migrations: {
        directory: "./database/migrations"
      },
      seeds: { directory: "./database/seeds" }
    }
  }
};
