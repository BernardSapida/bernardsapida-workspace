import type { User } from "~/features/auth/types";
import type { UserRole, UserStatus } from "../constants";

export interface UserFilters {
  statuses?: UserStatus[];
  roles?: UserRole[];
  search?: string;
}

export interface PaginatedUsersResponse {
  users: User[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
