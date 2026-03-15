import { relations } from "drizzle-orm/relations";
import { users, blogs, auditRequests, session, account, projects, projectToTag, tags } from "./schema";

export const blogsRelations = relations(blogs, ({one}) => ({
	user: one(users, {
		fields: [blogs.authorId],
		references: [users.id]
	}),
}));

export const usersRelations = relations(users, ({many}) => ({
	blogs: many(blogs),
	auditRequests: many(auditRequests),
	sessions: many(session),
	accounts: many(account),
}));

export const auditRequestsRelations = relations(auditRequests, ({one}) => ({
	user: one(users, {
		fields: [auditRequests.userId],
		references: [users.id]
	}),
}));

export const sessionRelations = relations(session, ({one}) => ({
	user: one(users, {
		fields: [session.userId],
		references: [users.id]
	}),
}));

export const accountRelations = relations(account, ({one}) => ({
	user: one(users, {
		fields: [account.userId],
		references: [users.id]
	}),
}));

export const projectToTagRelations = relations(projectToTag, ({one}) => ({
	project: one(projects, {
		fields: [projectToTag.a],
		references: [projects.id]
	}),
	tag: one(tags, {
		fields: [projectToTag.b],
		references: [tags.id]
	}),
}));

export const projectsRelations = relations(projects, ({many}) => ({
	projectToTags: many(projectToTag),
}));

export const tagsRelations = relations(tags, ({many}) => ({
	projectToTags: many(projectToTag),
}));