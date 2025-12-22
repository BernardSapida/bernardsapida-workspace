import { z } from "zod";

export const updateUserSchema = z.object({
	firstname: z.string().min(2, "Firstname must be at least 2 characters"),
	lastname: z.string().min(2, "Lastname must be at least 2 characters"),
	email: z.email("Invalid email address"),
	role: z.enum(["USER", "ADMIN"], {
		error: "Role should be User or Admin",
	}),
});

export type UpdateUserSchema = z.infer<typeof updateUserSchema>;
