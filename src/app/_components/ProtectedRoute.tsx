"use client";

import { Spinner } from "@heroui/react";
import { usePathname, useRouter } from "next/navigation";
import { type FunctionComponent, useEffect, useState } from "react";

import { useAuth } from "~/features/auth/hooks/useAuth";
import { routeHelpers } from "~/lib/constants/routes";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: FunctionComponent<ProtectedRouteProps> = ({
  children,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const { isAuthenticated, isLoading, role } = useAuth();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Wait for auth to load
    if (isLoading) return;

    const isProtectedRoute = routeHelpers.isProtectedRoute(pathname);
    const isAuthRoute = routeHelpers.isAuthRoute(pathname);

    // Case 1: Authenticated user on auth page (sign-in, sign-up)
    if (isAuthenticated && isAuthRoute) {
      const redirectUrl = routeHelpers.getDefaultRedirect(role);

      router.replace(redirectUrl);

      return;
    }

    // Case 2: Unauthenticated user on protected route
    if (!isAuthenticated && isProtectedRoute) {
      router.replace(`/sign-in`);

      return;
    }

    // Case 3: Authenticated user on protected route - check role access
    if (isAuthenticated && isProtectedRoute) {
      const hasAccess = routeHelpers.hasAccess(pathname, role);

      if (!hasAccess) {
        // router.replace(ROUTES.SPECIAL.UNAUTHORIZED);
        // return;
      }
    }

    // User is authorized to view this page
    setIsAuthorized(true);
  }, [isAuthenticated, isLoading, role, router, pathname]);

  // Show loading spinner while checking auth
  if (isLoading || !isAuthorized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute;
