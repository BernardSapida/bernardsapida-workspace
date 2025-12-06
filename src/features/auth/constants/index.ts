export const AUTH_CONSTANTS = {
	SESSION_TIMEOUT: 24 * 60 * 60 * 1000, // 24 hours
	TOKEN_KEY: "auth_token",
	USER_KEY: "auth_user",
} as const;

export const AUTH_ERRORS = {
	EMAIL_ALREADY_EXISTS: "Email already exists",
	INVALID_CREDENTIALS: "Invalid email or password",
	SESSION_EXPIRED: "Your session has expired",
	UNAUTHORIZED: "You are not authorized",
	USER_NOT_FOUND: "User not found",
} as const;
