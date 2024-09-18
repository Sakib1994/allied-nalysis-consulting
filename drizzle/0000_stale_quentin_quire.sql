CREATE TABLE `appointments` (
	`id` integer PRIMARY KEY NOT NULL,
	`date` text DEFAULT (CURRENT_DATE),
	`timeslot` text NOT NULL,
	`name` text NOT NULL,
	`email` text(255) NOT NULL,
	`phone` text(30) NOT NULL,
	`address` text(255) NOT NULL,
	`city` text(255) NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE TABLE `contact` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text NOT NULL,
	`last_name` text NOT NULL,
	`email` text(255) NOT NULL,
	`subject` text(255) NOT NULL,
	`comment` text NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `appointments_email_unique` ON `appointments` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `contact_email_unique` ON `contact` (`email`);