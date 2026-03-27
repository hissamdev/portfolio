import { pgTable, uuid, text, date, foreignKey, primaryKey, unique } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const blogs = pgTable("blogs", {
	id: uuid().defaultRandom().primaryKey(),
	title: text(),
	slug: text().notNull(),
	content: text(),
	creationDate: date("creation_date").default(sql`now()`),
	lastEdited: date("last_edited").default(sql`now()`),
}, (table) => [
	unique("blogs_slug_key").on(table.slug),]);

export const projectTags = pgTable("project_tags", {
	projectId: uuid("project_id").notNull().references(() => projects.id),
	tagId: uuid("tag_id").notNull().references(() => tags.id),
}, (table) => [
	primaryKey({ columns: [table.projectId, table.tagId], name: "project_tags_pkey"}),
]);

export const projects = pgTable("projects", {
	id: uuid().defaultRandom().primaryKey(),
	imagePath: text("image_path").notNull(),
	imageAlt: text("image_alt").notNull(),
	heading: text().notNull(),
	description: text().notNull(),
	linkUrl: text("link_url").notNull(),
});

export const tags = pgTable("tags", {
	id: uuid().defaultRandom().primaryKey(),
	name: text().notNull(),
});

export const usersTable = pgTable("users_table", {
	id: uuid().defaultRandom().primaryKey(),
	email: text().notNull(),
	password: text(),
	displayName: text("display_name"),
	username: text(),
	slug: text(),
	companyName: text("company_name"),
	birthday: text(),
	website: text(),
	bio: text(),
	instagram: text(),
	facebook: text(),
	youtube: text(),
	twitter: text(),
}, (table) => [
	unique("users_table_email_key").on(table.email),	unique("users_table_username_key").on(table.username),]);
