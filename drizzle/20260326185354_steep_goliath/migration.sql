CREATE TABLE "blogs" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"title" text,
	"slug" text NOT NULL UNIQUE,
	"content" text,
	"creation_date" date DEFAULT now(),
	"last_edited" date DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"image_path" text NOT NULL,
	"image_alt" text NOT NULL,
	"heading" text NOT NULL,
	"description" text NOT NULL,
	"link_url" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "project_tags" (
	"project_id" uuid,
	"tag_id" uuid,
	CONSTRAINT "project_tags_pkey" PRIMARY KEY("project_id","tag_id")
);
--> statement-breakpoint
CREATE TABLE "tags" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users_table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid(),
	"email" text NOT NULL UNIQUE,
	"password" text,
	"display_name" text,
	"username" text UNIQUE,
	"slug" text,
	"company_name" text,
	"birthday" text,
	"website" text,
	"bio" text,
	"instagram" text,
	"facebook" text,
	"youtube" text,
	"twitter" text
);
--> statement-breakpoint
ALTER TABLE "project_tags" ADD CONSTRAINT "project_tags_project_id_projects_id_fkey" FOREIGN KEY ("project_id") REFERENCES "projects"("id");--> statement-breakpoint
ALTER TABLE "project_tags" ADD CONSTRAINT "project_tags_tag_id_tags_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tags"("id");