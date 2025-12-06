import { inferAdditionalFields } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
	baseURL: process.env.NEXT_PUBLIC_BASE_URL,
	plugins: [
		inferAdditionalFields({
			user: {
				firstname: {
					type: "string",
				},
				lastname: {
					type: "string",
				},
				role: {
					type: "string",
				},
				status: {
					type: "string",
				},
			},
		}),
	],
});

export const { signIn, signOut, signUp, useSession, getSession } = authClient;
