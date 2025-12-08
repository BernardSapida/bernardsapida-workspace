import { Button, type Selection, useDisclosure } from "@heroui/react";
import type React from "react";
import { FaPlus } from "react-icons/fa6";
import { IoFilterSharp } from "react-icons/io5";
import type { Column } from "~/types/table.types";
import { ColumnVisibilityDropdown } from "./ColumnVisibilityDropdown";
import ModalFilter from "./ModalFilter";
import { RoleFilter } from "./RoleFilter";
import { RowsPerPageSelector } from "./RowsPerPageSelector";
import { StatusFilter } from "./StatusFilter";
import { TableSearchBar } from "./TableSearchBar";

interface TableTopContentProps<T> {
  // Search
  searchValue: string;
  searchPlaceholder?: string;
  onSearchChange: (value: string) => void;
  onSearchClear: () => void;

  // Status Filter
  statusOptions?: Array<{ name: string; uid: string }>;
  roleOptions?: Array<{ name: string; uid: string }>;
  selectedRole?: "all" | Selection;
  selectedStatus?: "all" | Selection;
  onRoleChange?: (keys: Selection) => void;
  onStatusChange?: (keys: Selection) => void;

  // Column Visibility
  columns: Column<T>[];
  visibleColumns: "all" | Selection;
  onVisibleColumnsChange: (keys: Selection) => void;

  // Add New Button
  onAddNew?: () => void;
  addNewLabel?: string;

  // Rows per page
  rowsPerPageOptions?: number[];
  onRowsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;

  // Total count
  totalItems: number;
}

export function TableTopContent<T>({
  searchValue,
  searchPlaceholder,
  onSearchChange,
  onSearchClear,
  roleOptions,
  statusOptions,
  selectedRole,
  selectedStatus,
  onRoleChange,
  onStatusChange,
  columns,
  visibleColumns,
  onVisibleColumnsChange,
  onAddNew,
  addNewLabel = "Add New",
  rowsPerPageOptions,
  onRowsPerPageChange,
  totalItems,
}: TableTopContentProps<T>) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-end justify-between gap-3">
        <TableSearchBar
          onClear={onSearchClear}
          onValueChange={onSearchChange}
          placeholder={searchPlaceholder}
          value={searchValue}
        />
        <div className="flex gap-3">
          <ModalFilter isOpen={isOpen} onOpenChange={onOpenChange}>
            {roleOptions && selectedRole && onRoleChange && (
              <RoleFilter
                onSelectionChange={onRoleChange}
                roleOptions={roleOptions}
                selectedRole={selectedRole}
              />
            )}
            {statusOptions && selectedStatus && onStatusChange && (
              <StatusFilter
                onSelectionChange={onStatusChange}
                selectedStatus={selectedStatus}
                statusOptions={statusOptions}
              />
            )}
            <ColumnVisibilityDropdown
              columns={columns}
              onSelectionChange={onVisibleColumnsChange}
              visibleColumns={visibleColumns}
            />
          </ModalFilter>

          <Button endContent={<IoFilterSharp />} onPress={onOpen}>
            Filter
          </Button>
          {onAddNew && (
            <Button color="primary" endContent={<FaPlus />} onPress={onAddNew}>
              {addNewLabel}
            </Button>
          )}
        </div>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-default-400 text-small">
          Total {totalItems} items
        </span>
        <RowsPerPageSelector
          onChange={onRowsPerPageChange}
          options={rowsPerPageOptions}
        />
      </div>
    </div>
  );
}
