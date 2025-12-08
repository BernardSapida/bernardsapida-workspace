import { useCallback, useState } from "react";
import type { UsersFilters } from "../types";

const DEFAULT_FILTERS: UsersFilters = {
	role: "all",
	search: "",
	sortBy: "createdAt",
	sortOrder: "desc",
	status: "all",
};

export function useUsersFilters(initialFilters?: Partial<UsersFilters>) {
	const [filters, setFilters] = useState<UsersFilters>({
		...DEFAULT_FILTERS,
		...initialFilters,
	});

	const updateFilter = useCallback(
		<K extends keyof UsersFilters>(key: K, value: UsersFilters[K]) => {
			setFilters((prev) => ({ ...prev, [key]: value }));
		},
		[],
	);

	const resetFilters = useCallback(() => {
		setFilters(DEFAULT_FILTERS);
	}, []);

	const hasActiveFilters = useCallback(() => {
		return (
			filters.search !== "" ||
			filters.role !== "all" ||
			filters.status !== "all"
		);
	}, [filters]);

	return {
		filters,
		hasActiveFilters: hasActiveFilters(),
		resetFilters,
		setFilters,
		updateFilter,
	};
}
