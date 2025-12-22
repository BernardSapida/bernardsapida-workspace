import { z } from "zod";

export const signinSchema = z.object({
	email: z.email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export const signupSchema = z.object({
	email: z.email("Invalid email address"),
	firstname: z.string().min(2, "Firstname must be at least 2 characters"),
	lastname: z.string().min(2, "Lastname must be at least 2 characters"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SigninSchema = z.infer<typeof signinSchema>;
export type SignupSchema = z.infer<typeof signupSchema>;
