import { type DefaultOptions, QueryClient } from "@tanstack/react-query";
import { APP_CONFIG } from "../constants/config";

const queryConfig: DefaultOptions = {
	mutations: {
		retry: APP_CONFIG.QUERY_CLIENT.retry,
	},
	queries: { ...APP_CONFIG.QUERY_CLIENT },
};

export const queryClient = new QueryClient({
	defaultOptions: queryConfig,
});

export function getQueryClient() {
	return queryClient;
}
