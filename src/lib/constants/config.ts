import { env } from "~/env";

export const APP_CONFIG = {
	API_BASE_URL: `${env.NEXT_PUBLIC_BASE_URL}/api`,
	API_TIMEOUT: 30_000, // 30 seconds
	APP_NAME: "My Workspace",
	QUERY_CLIENT: {
		gcTime: 10 * 60 * 1000, // 10 minutes
		refetchOnWindowFocus: false,
		retry: 1,
		staleTime: 5 * 60 * 1000, // 5 minutes
	},
} as const;
