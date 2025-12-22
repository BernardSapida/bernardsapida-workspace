import type { UserRole, UserStatus } from "~/features/user/constants";

export type User = {
	id: string;
	role: UserRole;
	status: UserStatus;
	fullname: string;
	firstname: string;
	lastname: string;
	image?: null | string;
	email: string;
	emailVerified: boolean;
	createdAt: Date;
	updatedAt: Date;
};

export type SigninCredentials = {
	email: string;
	password: string;
};

export type SignupCredentials = {
	email: string;
	password: string;
	firstname: string;
	lastname: string;
};
