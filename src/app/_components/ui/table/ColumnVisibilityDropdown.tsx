import { Select, SelectItem, type Selection } from "@heroui/react";
import type { Column } from "~/types/table.types";

interface ColumnVisibilityDropdownProps<T> {
  columns: Column<T>[];
  visibleColumns: Selection;
  onSelectionChange: (keys: Selection) => void;
}

export function ColumnVisibilityDropdown<T>({
  columns,
  visibleColumns,
  onSelectionChange,
}: ColumnVisibilityDropdownProps<T>) {
  return (
    <Select
      disallowEmptySelection
      label="Columns"
      onSelectionChange={onSelectionChange}
      placeholder="Select columns"
      selectedKeys={visibleColumns}
      selectionMode="multiple"
    >
      {columns.map((column) => (
        <SelectItem key={column.uid as string}>{column.name}</SelectItem>
      ))}
    </Select>
  );
}
