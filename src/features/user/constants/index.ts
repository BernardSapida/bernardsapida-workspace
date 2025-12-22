import type { ValueOf } from "~/types/common.types";

export const USER_CONSTANTS = {
	MAX_USERS_PER_PAGE: 100,
	USERS_PER_PAGE: 10,
} as const;

export const USER_ROLES = {
	ADMIN: "ADMIN",
	USER: "USER",
} as const;

export const USER_STATUS = {
	ACTIVE: "ACTIVE",
	INACTIVE: "INACTIVE",
	SUSPENDED: "SUSPENDED",
} as const;

export type UserRole = ValueOf<typeof USER_ROLES>;
export type UserStatus = ValueOf<typeof USER_STATUS>;
