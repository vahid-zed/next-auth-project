/**
 * An array og routes which are accessible in public.
 * These routes do not require authentication.
 * @type {string[]}
 */

export const publicRoutes = [
  "/",
  "/auth/new-verification",
  "/auth/new-password",
];

/**
 * An array of routes that are use after authentication.
 * These routes will redirect users to /settings.
 * @type {string[]}
 */

export const authRoutes = [
  "/auth/login",
  "/auth/register",
  "/auth/error",
  "/auth/reset",
];

/**
 * The prefix for API authentication routes.
 * Routes that started with this prefix will used for API authentication purposes.
 * @type {string}
 */

export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after logging in.
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";
