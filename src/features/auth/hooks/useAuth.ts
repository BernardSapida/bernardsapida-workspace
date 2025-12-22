import { addToast } from "@heroui/react";
import { useTopLoader } from "nextjs-toploader";
import { authClient, useSession } from "~/features/auth/api/auth.api";
import type { UserRole } from "~/features/user/constants";
import type { User } from "../types";
import type { SigninSchema, SignupSchema } from "../utils/validation";

export function useAuth() {
	const loader = useTopLoader();
	const { data: session, isPending, refetch } = useSession();
	const user =
		session?.user &&
		({
			...session?.user,
			fullname: `${session?.user?.firstname} ${session?.user?.lastname}`,
		} as User);

	const signIn = async (credentials: SigninSchema) => {
		loader.start();
		try {
			await authClient.signIn.email(credentials as any, {
				onError: (ctx) => {
					addToast({
						color: "danger",
						description: ctx.error.message,
						title: "Sign in failed",
						variant: "flat",
					});
				},
				onSuccess: async (ctx) => {
					addToast({
						color: "success",
						description: "You've successfully signed in to your account",
						title: `Welcome back, ${ctx.data.user?.name}! 👋`,
						variant: "flat",
					});
				},
			});
		} catch (_error) {
			addToast({
				color: "danger",
				description: "Please check your credentials",
				title: "Sign in failed",
				variant: "flat",
			});
		} finally {
			loader.done();
		}
	};

	const signUp = async (credentials: SignupSchema) => {
		loader.start();
		try {
			await authClient.signUp.email(
				{
					name: `${credentials.firstname} ${credentials.lastname}`,
					...credentials,
				} as any,
				{
					onError: (ctx) => {
						addToast({
							color: "danger",
							description: ctx.error.message,
							title: "Sign up failed",
							variant: "flat",
						});
					},
					onSuccess: (ctx) => {
						addToast({
							color: "success",
							description:
								"Your account has been created successfully. Let's get started!",
							title: `Welcome aboard, ${ctx.data.user?.name}! 🎉`,
							variant: "flat",
						});
					},
				},
			);
		} catch (_error) {
			addToast({
				color: "danger",
				description: "Please check your credentials",
				title: "Sign up failed",
				variant: "flat",
			});
		} finally {
			loader.done();
		}
	};

	const signOut = async () => {
		loader.start();
		try {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						addToast({
							color: "success",
							description: "You've safely signed out. Come back soon!",
							title: `Goodbye, ${session?.user?.name}! 👋`,
							variant: "flat",
						});
					},
				},
			});
		} catch (error) {
			console.error("Sign out error:", error);
		} finally {
			loader.done();
		}
	};

	return {
		isAuthenticated: !!session?.user,
		isLoading: isPending,
		refetch,
		role: session?.user.role as UserRole,
		signIn,
		signOut,
		signUp,
		user: user ?? null,
	};
}
