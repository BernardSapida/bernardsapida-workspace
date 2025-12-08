import { useCallback, useState } from "react";
import { USER_CONSTANTS } from "../constants";

export function useUsersPagination(initialPage = 1) {
	const [page, setPage] = useState(initialPage);
	const [pageSize, setPageSize] = useState<number>(
		USER_CONSTANTS.USERS_PER_PAGE,
	);

	const nextPage = useCallback(() => {
		setPage((prev) => prev + 1);
	}, []);

	const previousPage = useCallback(() => {
		setPage((prev) => Math.max(1, prev - 1));
	}, []);

	const goToPage = useCallback((newPage: number) => {
		setPage(Math.max(1, newPage));
	}, []);

	const changePageSize = useCallback((newSize: number) => {
		setPageSize(newSize);
		setPage(1); // Reset to first page when changing page size
	}, []);

	const reset = useCallback(() => {
		setPage(1);
		setPageSize(USER_CONSTANTS.USERS_PER_PAGE);
	}, []);

	return {
		changePageSize,
		goToPage,
		nextPage,
		page,
		pageSize,
		previousPage,
		reset,
	};
}
