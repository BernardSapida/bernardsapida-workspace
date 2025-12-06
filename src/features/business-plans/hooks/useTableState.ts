import type { Selection, SortDescriptor } from "@heroui/react";
import { useCallback, useState } from "react";
import { useDebounceCallback } from "~/hooks/useDebounceCallback";

interface UseTableStateProps {
  initialRowsPerPage?: number;
  initialVisibleColumns?: string[];
  searchDebounceMs?: number;
}

export function useTableState({
  initialRowsPerPage = 10,
  initialVisibleColumns = [],
  searchDebounceMs = 500,
}: UseTableStateProps) {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState<Selection>(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState<Selection>(
    new Set(initialVisibleColumns)
  );
  const [debouncedFilterValue, setDebouncedFilterValue] = useState("");
  const [roleFilter, setRoleFilter] = useState<Selection>(
    new Set(["USER", "ADMIN"])
  );
  const [statusFilter, setStatusFilter] = useState<Selection>(
    new Set(["DRAFT", "COMPLETED"])
  );
  const [rowsPerPage, setRowsPerPage] = useState(initialRowsPerPage);
  const [sortDescriptor, setSortDescriptor] = useState<SortDescriptor>();
  const [page, setPage] = useState(1);

  // Debounced search that triggers API call
  const debouncedSetFilter = useDebounceCallback((value: string) => {
    setDebouncedFilterValue(value);
    setPage(1);
  }, searchDebounceMs);

  const onRowsPerPageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = useCallback(
    (value: string) => {
      setFilterValue(value); // Update UI immediately
      debouncedSetFilter(value); // Trigger API call after delay
    },
    [debouncedSetFilter]
  );

  const onClear = useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const handleRoleFilterChange = useCallback((value: Selection) => {
    setRoleFilter(value);
    setPage(1); // Reset to page 1 on filter change
  }, []);

  const handleStatusFilterChange = useCallback((value: Selection) => {
    setStatusFilter(value);
    setPage(1); // Reset to page 1 on filter change
  }, []);

  const onNextPage = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const onPreviousPage = useCallback(() => {
    setPage((prev) => Math.max(1, prev - 1));
  }, []);

  return {
    debouncedFilterValue,
    filterValue,
    onClear,
    onNextPage,
    onPreviousPage,
    onRowsPerPageChange,
    onSearchChange,
    page,
    roleFilter,
    rowsPerPage,
    selectedKeys,
    setPage,
    setRoleFilter: handleRoleFilterChange,
    setSelectedKeys,
    setSortDescriptor,
    setStatusFilter: handleStatusFilterChange,
    setVisibleColumns,
    sortDescriptor,
    statusFilter,
    visibleColumns,
  };
}
