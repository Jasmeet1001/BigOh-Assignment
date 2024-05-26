ALTER TABLE "forms" ALTER COLUMN "unique_id" SET DEFAULT '6fa46fa2-99e9-4852-817a-bf46b1e4362b';--> statement-breakpoint
ALTER TABLE "forms" ALTER COLUMN "phone_number" SET DATA TYPE bigint;--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "unique_id" SET DEFAULT 'e5f713b1-f3fb-4153-9f51-3b1cdf5962d3';--> statement-breakpoint
ALTER TABLE "form_data" ALTER COLUMN "phone_number" SET DATA TYPE bigint;