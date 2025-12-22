import type { QueryKey } from "@tanstack/react-query";
import { queryClient } from "./query-client";

export const baseQueryUtils = {
	cancel: (queryKey: QueryKey) => {
		return queryClient.cancelQueries({ queryKey });
	},

	getData: <T>(queryKey: QueryKey): T | undefined => {
		return queryClient.getQueryData<T>(queryKey);
	},

	invalidate: (queryKey: QueryKey) => {
		return queryClient.invalidateQueries({ queryKey });
	},

	refetch: (queryKey: QueryKey) => {
		return queryClient.refetchQueries({ queryKey });
	},

	remove: (queryKey: QueryKey) => {
		return queryClient.removeQueries({ queryKey });
	},

	setData: <T>(queryKey: QueryKey, data: T | ((old: T | undefined) => T)) => {
		return queryClient.setQueryData(queryKey, data);
	},
};
