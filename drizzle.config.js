/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./src/models.js",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  },
};
