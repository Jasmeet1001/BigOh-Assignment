CREATE TABLE IF NOT EXISTS "forms" (
	"unique_id" uuid PRIMARY KEY DEFAULT '138f9977-489f-49e8-acf9-7756e3b3bb79' NOT NULL,
	"title" varchar NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone_number" integer NOT NULL,
	"is_graduate" boolean NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "form_data" (
	"unique_id" uuid PRIMARY KEY DEFAULT 'ffa4621c-ab12-425d-a45e-32057aeb298b' NOT NULL,
	"form_title" varchar NOT NULL,
	"name" varchar NOT NULL,
	"email" varchar NOT NULL,
	"phone_number" integer NOT NULL,
	"is_graduate" boolean NOT NULL
);
