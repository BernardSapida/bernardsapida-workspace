import type { User } from "~/features/auth/types";
import type { PaginatedUsersResponse } from "./user.types";

export interface GetUserResponse {
	user: User;
}

export interface GetUsersResponse {
	users: PaginatedUsersResponse;
}
