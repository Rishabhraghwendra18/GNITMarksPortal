const { Client } = require("pg");
const connectionString =
  process.env.DATABASE_URL || "postgressql://gnituser:test@localhost:5432/gnitdb";
const client = new Client({
  connectionString,
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports=client;