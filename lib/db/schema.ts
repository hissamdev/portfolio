import { date, pgTable, serial, text, uuid, primaryKey } from "drizzle-orm/pg-core";
import { defineRelations } from "drizzle-orm";


export const usersTable = pgTable('users_table', {
  // Essentials
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  email: text('email').unique().notNull(),
  password: text('password'),
  displayName: text('display_name'),
  username: text('username').unique(),
  slug: text('slug'),

  // Personal info
  companyName: text('company_name'),
  birthday: text('birthday'),
  website: text('website'),
  bio: text('bio'),

  // User socials
  instagram: text('instagram'),
  facebook: text('facebook'),
  youtube: text('youtube'),
  twitter: text('twitter'),

  
})

export const projectTable = pgTable('projects', {
  id: uuid('id').defaultRandom().primaryKey().notNull(),
  imagePath: text('image_path').notNull(),
  imageAlt: text('image_alt').notNull(),
  heading: text('heading').notNull(),
  description: text('description').notNull(),
  linkUrl: text('link_url').notNull(),
})

export const tagsTable = pgTable('tags', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
})

export const projectTags = pgTable('project_tags', {
  projectId: uuid('project_id').notNull().references(() => projectTable.id),
  tagId: uuid('tag_id').notNull().references(() => tagsTable.id)
},
  (table) => ({
    pk: primaryKey({ columns: [table.projectId, table.tagId] })
  })
)

export const projectRelations = defineRelations({ projectTable, tagsTable, projectTags }, (r) => ({
  projectTable: {
    tags: r.many.tagsTable({
      from: r.projectTable.id.through(r.projectTags.projectId),
      to: r.tagsTable.id.through(r.projectTags.tagId),
    })
  }
}))