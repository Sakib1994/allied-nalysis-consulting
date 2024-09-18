import { sql, type InferInsertModel, type InferSelectModel } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contacts = sqliteTable("contact", {
    id: integer("id").primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    email: text("email", { length: 255 }).unique().notNull(),
    subject: text("subject", { length: 255 }).notNull(),
    comment: text("comment").notNull(),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export type SelectContact = InferSelectModel<typeof contacts>;
export type InsertContact = InferInsertModel<typeof contacts>;

export const appointments = sqliteTable("appointments", {
    id: integer("id").primaryKey(),
    date: text("date").default(sql`(CURRENT_DATE)`),
    timeSlot: text("timeslot").notNull(),
    name: text("name").notNull(),
    email: text("email", { length: 255 }).unique().notNull(),
    phone: text("phone", { length: 30 }).notNull(),
    address: text("address", { length: 255 }).notNull(),
    city: text("city", { length: 255 }).notNull(),
    createdAt: text("created_at").default(sql`CURRENT_TIMESTAMP`),
});

export type SelectAppointment = InferSelectModel<typeof appointments>;
export type InsertAppointment = InferInsertModel<typeof appointments>;