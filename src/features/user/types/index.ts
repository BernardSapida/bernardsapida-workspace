import type { User } from "~/features/auth/types";
import type { UserRole } from "../constants";

export type UsersFilters = {
	search?: string;
	role?: UserRole | "all";
	status?: User["status"] | "all";
	sortBy?: "name" | "email" | "createdAt" | "lastLoginAt";
	sortOrder?: "asc" | "desc";
};
