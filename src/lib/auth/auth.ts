import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { env } from "~/env";
import { db } from "~/server/db";

export const auth = betterAuth({
	database: prismaAdapter(db, {
		provider: "postgresql",
	}),
	emailAndPassword: {
		enabled: true,
	},
	secret: env.BETTER_AUTH_SECRET,
	session: {
		cookieCache: {
			enabled: true,
			maxAge: 60 * 60, // 1 hour
		},
		expiresIn: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24, // 1 day (refresh session)
	},
	user: {
		additionalFields: {
			firstname: {
				required: true,
				type: "string",
			},
			lastname: {
				required: true,
				type: "string",
			},
			role: {
				defaultValue: "USER",
				required: true,
				type: "string",
			},
		},
		fields: {
			name: "fullname",
		},
	},
});
