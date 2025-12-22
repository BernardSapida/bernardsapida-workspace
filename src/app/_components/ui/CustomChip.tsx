"use client";

import { Chip } from "@heroui/react";
import type { BusinessPlanStatus } from "~/app/(protected)/business-plans/page";
import type { UserRole, UserStatus } from "~/features/user/constants";

interface CustomChipProps {
  type: UserRole | UserStatus | BusinessPlanStatus;
  variant?:
    | "dot"
    | "solid"
    | "flat"
    | "shadow"
    | "bordered"
    | "faded"
    | "light";
  size?: "sm" | "md" | "lg";
  styles?: string;
}

const typeColors: Record<
  UserRole | UserStatus | BusinessPlanStatus,
  "default" | "primary" | "secondary" | "success" | "warning" | "danger"
> = {
  USER: "primary",
  ADMIN: "danger",

  ACTIVE: "success",
  INACTIVE: "warning",
  SUSPENDED: "danger",

  COMPLETED: "success",
  DRAFT: "warning",
};

export default function CustomChip({
  type,
  variant = "solid",
  size = "md",
  styles,
}: CustomChipProps) {
  return (
    <Chip
      className={`${styles} text-sm capitalize`}
      color={typeColors[type]}
      size={size}
      variant={variant}
    >
      {type?.toLowerCase()}
    </Chip>
  );
}
