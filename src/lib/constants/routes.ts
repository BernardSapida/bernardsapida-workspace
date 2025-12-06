import type { UserRole } from "~/features/user/constants";

export const ROLES = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

// ============================================================================
// ROUTES OBJECT - Autocomplete-friendly approach (NO TYPOS!)
// ============================================================================
export const ROUTES = {
  // Admin routes
  ADMIN: {
    USER_VIEW: (id: string) => `/users/${id}`,
  },

  // Auth routes
  AUTH: {
    SIGNIN: "/sign-in",
    SIGNUP: "/sign-up",
  },

  // Public routes
  HOME: "/",

  // Admin routes
  SHARED: {
    USERS: "/users",
    DASHBOARD: "/dashboard",
  },

  // Special routes
  SPECIAL: {
    NOT_FOUND: "/404",
    SERVER_ERROR: "/500",
    UNAUTHORIZED: "/unauthorized",
  },

  // User routes
  USER: {
    BUSINESS_PLANS: "/business-plans",
    BUSINESS_PLAN: (id: number) => `/business-plans/${id}`,
    PROFILE: "/profile",
  },
} as const;

// ============================================================================
// ROUTE ARRAYS - For middleware and access control
// ============================================================================

// Public routes - accessible to everyone
export const publicRoutes = [ROUTES.HOME] as const;

// Authentication routes - only accessible when NOT logged in
export const authRoutes = [ROUTES.AUTH.SIGNIN, ROUTES.AUTH.SIGNUP] as const;

// Shared routes accessible by all authenticated users
export const sharedRoutes = [...Object.values(ROUTES.SHARED)] as const;

// USER role routes
export const userRoutes = [
  ...sharedRoutes,
  ...Object.values(ROUTES.USER),
] as const;

// ADMIN role routes
export const adminRoutes = [
  ...sharedRoutes,
  ...Object.values(ROUTES.ADMIN),
  // Note: USER_VIEW is a function, so it's checked via startsWith in helpers
] as const;

// Static/asset routes that should bypass middleware
export const bypassRoutes = [
  "/api",
  "/_next/static",
  "/_next/image",
  "/favicon.ico",
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.json",
] as const;

// ============================================================================
// ROLE-BASED CONFIGURATIONS
// ============================================================================

// Combine all role-based routes
export const roleRoutes = {
  [ROLES.ADMIN]: adminRoutes,
  [ROLES.USER]: userRoutes,
} as const;

// Get all protected routes (combination of all role routes)
export const protectedRoutes = [
  ...userRoutes,
  ...adminRoutes,
  ...sharedRoutes,
] as const;

// Default redirect after login based on role
export const defaultRoleRedirect: Record<UserRole, string> = {
  [ROLES.ADMIN]: ROUTES.SHARED.DASHBOARD,
  [ROLES.USER]: ROUTES.USER.BUSINESS_PLANS,
};

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

export const routeHelpers = {
  /**
   * Get the default redirect URL for a role
   */
  getDefaultRedirect: (role: UserRole): string => {
    return defaultRoleRedirect[role] || ROUTES.HOME;
  },

  /**
   * Get all routes for a specific role, excluding function routes
   */
  getRoutesByRole: (role: UserRole): readonly string[] => {
    if (!roleRoutes[role]) return [];

    // Filter out any function values from the routes array
    return roleRoutes[role].filter(
      (route) => typeof route === "string"
    ) as readonly string[];
  },

  /**
   * Check if user has access to a route based on their role
   */
  hasAccess: (pathname: string, role: UserRole): boolean => {
    // Public routes are always accessible
    if (routeHelpers.isPublicRoute(pathname)) return true;

    // Check role-specific routes
    const allowedRoutes = roleRoutes[role];

    if (!allowedRoutes) return false;

    return allowedRoutes.some((route) => {
      if (typeof route === "string") {
        return pathname.startsWith(route);
      }

      return false;
    });
  },

  /**
   * Check if a pathname is an ADMIN route
   */
  isAdminRoute: (pathname: string): boolean => {
    return pathname.startsWith("/admin");
  },

  /**
   * Check if a pathname is an auth route
   */
  isAuthRoute: (pathname: string): boolean => {
    return authRoutes.some((route) => pathname.startsWith(route));
  },

  /**
   * Check if a pathname is a protected route
   */
  isProtectedRoute: (pathname: string): boolean => {
    return protectedRoutes.some((route) => {
      if (typeof route === "string") {
        return pathname.startsWith(route);
      }
      return false;
    });
  },

  /**
   * Check if a pathname is a public route
   */
  isPublicRoute: (pathname: string): boolean => {
    return publicRoutes.some(
      (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
  },

  /**
   * Check if a pathname is a shared route
   */
  isSharedRoute: (pathname: string): boolean => {
    return sharedRoutes.some((route) => pathname.startsWith(route));
  },

  /**
   * Check if a pathname is a USER route
   */
  isUserRoute: (pathname: string): boolean => {
    return pathname.startsWith("/user");
  },

  /**
   * Check if a pathname should bypass middleware
   */
  shouldBypass: (pathname: string): boolean => {
    return bypassRoutes.some((route) => pathname.startsWith(route));
  },
};

// ============================================================================
// TYPE EXPORTS
// ============================================================================

export type PublicRoute = (typeof publicRoutes)[number];
export type AuthRoute = (typeof authRoutes)[number];
export type UserRoute = (typeof userRoutes)[number];
export type AdminRoute = (typeof adminRoutes)[number];
export type ProtectedRoute = (typeof protectedRoutes)[number];
export type BypassRoute = (typeof bypassRoutes)[number];
export type SpecialRoute = (typeof ROUTES.SPECIAL)[keyof typeof ROUTES.SPECIAL];
