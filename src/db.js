import "dotenv/config";
import pkg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

const { Client } = pkg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

await client.connect();

const db = drizzle(client);

export default db;
