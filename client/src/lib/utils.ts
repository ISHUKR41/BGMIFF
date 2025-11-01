/**
 * Utility Functions
 * 
 * Collection of utility functions for the application.
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names intelligently using clsx and tailwind-merge
 * 
 * This function:
 * 1. Uses clsx to conditionally combine class names
 * 2. Uses tailwind-merge to resolve Tailwind class conflicts
 * 
 * Example:
 * ```
 * cn("px-2 py-1", condition && "bg-red-500", "px-4")
 * // Result: "py-1 bg-red-500 px-4" (px-4 overrides px-2)
 * ```
 * 
 * @param inputs - Class values to combine (strings, objects, arrays)
 * @returns Merged class name string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
