
import { date, pgTable, serial, text, uuid } from "drizzle-orm/pg-core";

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