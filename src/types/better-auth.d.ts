declare module "better-auth/types" {
	interface User {
		firstname: string;
		lastname: string;
		fullname?: string;
		// Add any other custom fields
	}

	interface Session {
		user: User;
	}
}
