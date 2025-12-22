import type { PrismaClient } from "generated/prisma/client";

export type ApiResponse<T> = {
  data: T;
  message: string;
  statusCode: number;
  success: boolean;
  timestamp: string;
};

export type ApiError = {
  message: string;
  code: string;
  field?: string;
  statusCode: number;
};

export type PaginatedResponse<T, K extends string = "items"> = {
  [P in K]: T[];
} & {
  pagination: {
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
  };
};

export type PaginationParams = {
  page?: number;
  pageSize?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export type TRPCContext = {
  headers: Headers;
  session: {
    user: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      email: string;
      emailVerified: boolean;
      name: string;
      image?: string | null | undefined;
      firstname: string;
      lastname: string;
      role: string;
    };
    session: {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      userId: string;
      expiresAt: Date;
      token: string;
      ipAddress?: string | null | undefined;
      userAgent?: string | null | undefined;
    };
  };
  db: PrismaClient;
};
