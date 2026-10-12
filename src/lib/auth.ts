
import { betterAuth } from "better-auth";
import Database from "better-sqlite3";

const db = new Database("bazardor.sqlite");

export const auth = betterAuth({
  database: db,

  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },

  secret: process.env.BETTER_AUTH_SECRET,

  baseURL:
    process.env.BETTER_AUTH_URL || "http://localhost:3000",
});
