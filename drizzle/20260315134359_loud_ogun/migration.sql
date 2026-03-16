CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"image_path" text NOT NULL,
	"image_alt" text NOT NULL,
	"heading" text NOT NULL,
	"description" text NOT NULL,
	"link_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"email" text NOT NULL,
	"password" text,
	"display_name" text,
	"username" text,
	"slug" text,
	"company_name" text,
	"birthday" text,
	"website" text,
	"bio" text,
	"instagram" text,
	"facebook" text,
	"youtube" text,
	"twitter" text,
	CONSTRAINT "users_table_email_unique" UNIQUE("email"),
	CONSTRAINT "users_table_username_unique" UNIQUE("username")
);
