/**
 * ThemeProvider Component
 * 
 * Wrapper component for next-themes to provide dark/light theme support.
 * 
 * This is a simple re-export that makes theme management available
 * throughout the application via React context.
 */

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ThemeProviderProps } from "next-themes";

/**
 * ThemeProvider Component
 * Provides theme context to the entire application
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
