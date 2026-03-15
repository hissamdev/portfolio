CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image_path" text NOT NULL,
	"image_alt" text NOT NULL,
	"heading" text NOT NULL,
	"description" text NOT NULL,
	"link_url" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "users_table" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "users_table" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "password" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "display_name" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "username" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "slug" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "company_name" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "birthday" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "website" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "bio" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "instagram" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "facebook" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "youtube" text;--> statement-breakpoint
ALTER TABLE "users_table" ADD COLUMN "twitter" text;--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "users_table" DROP COLUMN "age";--> statement-breakpoint
ALTER TABLE "users_table" ADD CONSTRAINT "users_table_username_unique" UNIQUE("username");