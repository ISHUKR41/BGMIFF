/**
 * React Query Client Configuration
 * 
 * Centralized configuration for TanStack Query (React Query).
 * Provides custom query functions and API request utilities
 * for managing server state throughout the application.
 */

import { QueryClient, QueryFunction } from "@tanstack/react-query";

/**
 * Throws an error if the HTTP response is not OK (status 200-299)
 * 
 * @param res - Fetch API response object
 * @throws Error with status code and message
 */
async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

/**
 * Makes an authenticated API request with JSON handling
 * 
 * Used for POST, PATCH, DELETE requests that modify server data.
 * Automatically includes credentials and JSON headers.
 * 
 * @param method - HTTP method (POST, PATCH, DELETE, etc.)
 * @param url - API endpoint URL
 * @param data - Request body data (will be JSON stringified)
 * @returns Fetch response object
 * @throws Error if response is not OK
 */
export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

/**
 * Behavior when encountering 401 Unauthorized responses
 */
type UnauthorizedBehavior = "returnNull" | "throw";

/**
 * Creates a custom query function for React Query
 * 
 * This function handles GET requests and uses the queryKey as the URL.
 * Supports configurable behavior for 401 (Unauthorized) responses.
 * 
 * @param options - Configuration options
 * @param options.on401 - What to do on 401 responses ("returnNull" or "throw")
 * @returns Query function for React Query
 */
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey.join("/") as string, {
      credentials: "include",
    });

    // Handle 401 based on configuration
    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

/**
 * Global React Query Client Instance
 * 
 * Configured with:
 * - Custom query function that uses queryKey as URL
 * - No automatic refetching on window focus
 * - No automatic retries
 * - Infinite stale time (data doesn't auto-refresh)
 * - Throws on 401 errors by default
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
