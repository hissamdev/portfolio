import { pgTable, varchar, timestamp, text, integer, index, jsonb, uniqueIndex, boolean, foreignKey, serial, unique, primaryKey } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"



export const prismaMigrations = pgTable("_prisma_migrations", {
	id: varchar({ length: 36 }).primaryKey().notNull(),
	checksum: varchar({ length: 64 }).notNull(),
	finishedAt: timestamp("finished_at", { withTimezone: true, mode: 'string' }),
	migrationName: varchar("migration_name", { length: 255 }).notNull(),
	logs: text(),
	rolledBackAt: timestamp("rolled_back_at", { withTimezone: true, mode: 'string' }),
	startedAt: timestamp("started_at", { withTimezone: true, mode: 'string' }).defaultNow().notNull(),
	appliedStepsCount: integer("applied_steps_count").default(0).notNull(),
});

export const verification = pgTable("verification", {
	id: text().primaryKey().notNull(),
	identifier: text().notNull(),
	value: jsonb().notNull(),
	otpCode: text(),
	expiresAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	index("verification_identifier_idx").using("btree", table.identifier.asc().nullsLast().op("text_ops")),
]);

export const users = pgTable("users", {
	id: text().primaryKey().notNull(),
	verifiedEmail: boolean().default(false).notNull(),
	email: text().notNull(),
	password: text(),
	displayName: text(),
	username: text(),
	slug: text(),
	companyName: text(),
	birthday: text(),
	website: text(),
	otherLinks: text(),
	bio: text(),
	instagram: text(),
	facebook: text(),
	youtube: text(),
	twitter: text(),
	lastOnline: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`),
	creationDate: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	detailsLastUpdated: timestamp({ precision: 3, mode: 'string' }).notNull(),
	emailLastUpdated: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	passwordLastUpdated: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	name: text().notNull(),
	emailVerified: boolean().default(false).notNull(),
	image: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	uniqueIndex("users_email_key").using("btree", table.email.asc().nullsLast().op("text_ops")),
	uniqueIndex("users_username_key").using("btree", table.username.asc().nullsLast().op("text_ops")),
]);

export const blogs = pgTable("blogs", {
	id: serial().primaryKey().notNull(),
	authorId: text().notNull(),
	title: text().notNull(),
	content: text().notNull(),
	slug: text().notNull(),
	isPublished: boolean().default(false).notNull(),
	status: text("Status").default('Unpublished').notNull(),
	allowIndexing: boolean(),
	publishDate: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	lastUpdated: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	uniqueIndex("blogs_slug_key").using("btree", table.slug.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.authorId],
			foreignColumns: [users.id],
			name: "blogs_authorId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const auditRequests = pgTable("audit_requests", {
	id: serial().primaryKey().notNull(),
	userId: text().notNull(),
	url: text().notNull(),
	message: text(),
	creationDate: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	lastUpdated: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
}, (table) => [
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "audit_requests_userId_fkey"
		}).onUpdate("cascade").onDelete("restrict"),
]);

export const session = pgTable("session", {
	id: text().primaryKey().notNull(),
	expiresAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	token: text().notNull(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
	ipAddress: text(),
	userAgent: text(),
	userId: text().notNull(),
}, (table) => [
	uniqueIndex("session_token_key").using("btree", table.token.asc().nullsLast().op("text_ops")),
	index("session_userId_idx").using("btree", table.userId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "session_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const account = pgTable("account", {
	id: text().primaryKey().notNull(),
	accountId: text().notNull(),
	providerId: text().notNull(),
	userId: text().notNull(),
	accessToken: text(),
	refreshToken: text(),
	idToken: text(),
	accessTokenExpiresAt: timestamp({ precision: 3, mode: 'string' }),
	refreshTokenExpiresAt: timestamp({ precision: 3, mode: 'string' }),
	scope: text(),
	password: text(),
	createdAt: timestamp({ precision: 3, mode: 'string' }).default(sql`CURRENT_TIMESTAMP`).notNull(),
	updatedAt: timestamp({ precision: 3, mode: 'string' }).notNull(),
}, (table) => [
	index("account_userId_idx").using("btree", table.userId.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.userId],
			foreignColumns: [users.id],
			name: "account_userId_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const projects = pgTable("projects", {
	imagePath: text().notNull(),
	imageAlt: text().notNull(),
	heading: text().notNull(),
	description: text().notNull(),
	link: text(),
	id: text().primaryKey().notNull(),
});

export const tags = pgTable("tags", {
	name: text().notNull(),
	color: text(),
	id: text().primaryKey().notNull(),
}, (table) => [
	uniqueIndex("tags_name_key").using("btree", table.name.asc().nullsLast().op("text_ops")),
]);

export const usersTable = pgTable("users_table", {
	id: serial().primaryKey().notNull(),
	name: text().notNull(),
	age: text().notNull(),
	email: text().notNull(),
}, (table) => [
	unique("users_table_email_unique").on(table.email),
]);

export const projectToTag = pgTable("_ProjectToTag", {
	a: text("A").notNull(),
	b: text("B").notNull(),
}, (table) => [
	index().using("btree", table.b.asc().nullsLast().op("text_ops")),
	foreignKey({
			columns: [table.a],
			foreignColumns: [projects.id],
			name: "_ProjectToTag_A_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	foreignKey({
			columns: [table.b],
			foreignColumns: [tags.id],
			name: "_ProjectToTag_B_fkey"
		}).onUpdate("cascade").onDelete("cascade"),
	primaryKey({ columns: [table.b, table.a], name: "_ProjectToTag_AB_pkey"}),
]);
