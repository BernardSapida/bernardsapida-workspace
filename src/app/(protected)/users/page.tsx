"use client";

import {
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import { type Key, useMemo } from "react";
import CustomChip from "~/app/_components/ui/CustomChip";
import { ActionsDropdown } from "~/app/_components/ui/table/ActionsDropdown";
import { TableBottomContent } from "~/app/_components/ui/table/TableBottomContent";
import { TableTopContent } from "~/app/_components/ui/table/TableTopContent";
import type { UserRole, UserStatus } from "~/features/user/constants";
import { useTableState } from "~/features/user/hooks/useTableState";
import { ROUTES } from "~/lib/constants/routes";
import { api } from "~/trpc/react";
import type { Column } from "~/types/table.types";

export default function UsersTable() {
  const router = useRouter();
  const {
    debouncedFilterValue,
    filterValue,
    statusFilter,
    roleFilter,
    visibleColumns,
    page,
    rowsPerPage,
    sortDescriptor,
    selectedKeys,
    setRoleFilter,
    setStatusFilter,
    setVisibleColumns,
    setSelectedKeys,
    onSearchChange,
    onClear,
    onRowsPerPageChange,
    onNextPage,
    onPreviousPage,
    setPage,
    setSortDescriptor,
  } = useTableState({
    initialVisibleColumns: [
      "firstname",
      "lastname",
      "email",
      "role",
      "status",
      "actions",
    ],
  });

  // Fetch data from API with current filters
  const { data, isLoading } = api.user.getUsers.useQuery({
    filters: {
      roles: roleFilter === "all" ? [] : (Array.from(roleFilter) as UserRole[]),
      statuses:
        statusFilter === "all"
          ? []
          : (Array.from(statusFilter) as UserStatus[]),
      search: debouncedFilterValue,
    },
    pagination: {
      page,
      pageSize: rowsPerPage,
      sortBy: (sortDescriptor?.column as string) || "createdAt",
      sortOrder: sortDescriptor?.direction === "ascending" ? "asc" : "desc",
    },
  });

  const users = data?.users || [];
  const totalPages = data?.totalPages || 1;
  const totalItems = data?.total || 0;

  // Define table columns
  const columns: Column<(typeof users)[0]>[] = [
    { name: "Firstname", sortable: true, uid: "firstname" },
    { name: "Lastname", sortable: true, uid: "lastname" },
    { name: "Email", sortable: true, uid: "email" },
    { name: "Role", uid: "role" },
    { name: "Status", uid: "status" },
    { name: "Actions", uid: "actions" },
  ];

  const roleOptions = [
    { name: "Admin", uid: "ADMIN" },
    { name: "User", uid: "USER" },
  ];

  const statusOptions = [
    { name: "Active", uid: "ACTIVE" },
    { name: "Inactive", uid: "INACTIVE" },
    { name: "Suspended", uid: "SUSPENDED" },
  ];

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;
    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  return (
    <div className="p-6">
      <TableTopContent
        columns={columns}
        onAddNew={() => alert("Add new user clicked!")}
        onRoleChange={setRoleFilter}
        onRowsPerPageChange={onRowsPerPageChange}
        onSearchChange={onSearchChange}
        onSearchClear={onClear}
        onStatusChange={setStatusFilter}
        onVisibleColumnsChange={setVisibleColumns}
        roleOptions={roleOptions}
        rowsPerPageOptions={[5, 10, 15, 20, 50]}
        searchValue={filterValue}
        selectedRole={roleFilter}
        selectedStatus={statusFilter}
        statusOptions={statusOptions}
        totalItems={totalItems}
        visibleColumns={visibleColumns}
      />

      <Table
        aria-label="Users Table"
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
        selectedKeys={selectedKeys}
        sortDescriptor={sortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn allowsSorting={column.sortable} key={column.uid}>
              {column.name}
            </TableColumn>
          )}
        </TableHeader>

        <TableBody
          isLoading={isLoading}
          items={users}
          loadingContent={<Spinner label="Loading..." size="sm" />}
        >
          {(user) => (
            <TableRow
              key={user.id}
              onClick={() => router.push(ROUTES.ADMIN.USER_VIEW(user.id))}
            >
              {(columnKey: Key) => {
                const key = columnKey as keyof typeof user;

                switch (key) {
                  case "role":
                    return (
                      <TableCell>
                        <CustomChip type={user.role} />
                      </TableCell>
                    );
                  case "status":
                    return (
                      <TableCell>
                        <CustomChip
                          styles="border-none"
                          type={user.status}
                          variant="dot"
                        />
                      </TableCell>
                    );
                  case "actions" as unknown:
                    return (
                      <TableCell>
                        <ActionsDropdown
                          actions={[
                            { key: "edit", label: "Edit" },
                            { key: "delete", label: "Delete" },
                          ]}
                          onActionSelect={(key) =>
                            alert(`${key} clicked for ${user.id}`)
                          }
                        />
                      </TableCell>
                    );
                  default:
                    return <TableCell>{String(user[key])}</TableCell>;
                }
              }}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <TableBottomContent
        currentPage={page}
        isAllSelected={selectedKeys === "all"}
        onNextPage={onNextPage}
        onPageChange={setPage}
        onPreviousPage={onPreviousPage}
        selectedCount={
          selectedKeys === "all" ? users.length : selectedKeys.size
        }
        totalFilteredItems={totalItems}
        totalPages={totalPages}
      />
    </div>
  );
}
