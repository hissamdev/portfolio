CREATE TABLE "blogs" (
	"title" text,
	"slug" text,
	"content" text,
	"creation_date" date DEFAULT now(),
	"last_edited" date DEFAULT now()
);
