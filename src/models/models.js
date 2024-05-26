import { pgTable, uuid, varchar, boolean, bigint } from "drizzle-orm/pg-core";
import { v4 as uuidv4 } from "uuid";

export const Form = pgTable("forms", {
  uniqueId: uuid("unique_id").default(uuidv4()).primaryKey(),
  title: varchar("title").notNull(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  phoneNumber: bigint("phone_number", { mode: "number" }).notNull(),
  isGraduate: boolean("is_graduate").notNull(),
});

export const FormData = pgTable("form_data", {
  uniqueId: uuid("unique_id").default(uuidv4()).primaryKey(),
  formTitle: varchar("form_title").notNull(),
  name: varchar("name").notNull(),
  email: varchar("email").notNull(),
  phoneNumber: bigint("phone_number", { mode: "number" }).notNull(),
  isGraduate: boolean("is_graduate").notNull(),
});
