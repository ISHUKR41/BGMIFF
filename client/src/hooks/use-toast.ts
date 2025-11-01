/**
 * useToast Hook
 * 
 * Toast notification system using React state management.
 * 
 * Features:
 * - Global toast state management
 * - Support for multiple toasts (limited to 1 by default)
 * - Auto-dismiss after delay
 * - Imperative toast API (toast(), dismiss())
 * - Action buttons support
 * - Custom titles and descriptions
 * 
 * Based on Shadcn UI toast component system.
 * 
 * Usage:
 * ```
 * const { toast } = useToast()
 * toast({ title: "Success!", description: "Action completed" })
 * ```
 */

import * as React from "react"

import type {
  ToastActionElement,
  ToastProps,
} from "@/components/ui/toast"

/** Maximum number of toasts displayed at once */
const TOAST_LIMIT = 1

/** Delay before removing toast from DOM (ms) */
const TOAST_REMOVE_DELAY = 1000000

/**
 * Toast data structure with metadata
 */
type ToasterToast = ToastProps & {
  id: string                        // Unique toast identifier
  title?: React.ReactNode           // Toast title/heading
  description?: React.ReactNode     // Toast description/body
  action?: ToastActionElement       // Optional action button
}

/**
 * Redux-style action types for toast state management
 */
const actionTypes = {
  ADD_TOAST: "ADD_TOAST",           // Add new toast to queue
  UPDATE_TOAST: "UPDATE_TOAST",     // Update existing toast
  DISMISS_TOAST: "DISMISS_TOAST",   // Begin dismissing toast
  REMOVE_TOAST: "REMOVE_TOAST",     // Remove toast from DOM
} as const

/** Counter for generating unique toast IDs */
let count = 0

/**
 * Generate a unique ID for a toast
 * @returns Unique string ID
 */
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

/**
 * Union type of all possible toast actions
 */
type Action =
  | {
      type: ActionType["ADD_TOAST"]
      toast: ToasterToast
    }
  | {
      type: ActionType["UPDATE_TOAST"]
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType["DISMISS_TOAST"]
      toastId?: ToasterToast["id"]
    }
  | {
      type: ActionType["REMOVE_TOAST"]
      toastId?: ToasterToast["id"]
    }

/**
 * Toast state interface
 */
interface State {
  toasts: ToasterToast[]            // Array of active toasts
}

/** Map of toast IDs to their removal timeout handles */
const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

/**
 * Schedule a toast for removal from DOM after delay
 * 
 * @param toastId - ID of toast to remove
 */
const addToRemoveQueue = (toastId: string) => {
  // Don't schedule if already queued
  if (toastTimeouts.has(toastId)) {
    return
  }

  // Schedule removal after delay
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: "REMOVE_TOAST",
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

/**
 * Redux-style reducer for toast state management
 * 
 * @param state - Current toast state
 * @param action - Action to perform
 * @returns New toast state
 */
export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_TOAST":
      // Add new toast, limit to TOAST_LIMIT
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case "UPDATE_TOAST":
      // Update existing toast by ID
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      }

    case "DISMISS_TOAST": {
      const { toastId } = action

      // Schedule toast(s) for removal
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        // Dismiss all toasts
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      // Mark toast(s) as closed
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      }
    }
    case "REMOVE_TOAST":
      // Remove all toasts if no ID specified
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      // Remove specific toast by ID
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

/** Array of listener functions subscribed to toast state changes */
const listeners: Array<(state: State) => void> = []

/** Global toast state stored in memory */
let memoryState: State = { toasts: [] }

/**
 * Dispatch a toast action and notify all listeners
 * 
 * @param action - Action to dispatch
 */
function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

/** Toast configuration without ID (ID is auto-generated) */
type Toast = Omit<ToasterToast, "id">

/**
 * Imperatively show a toast notification
 * 
 * @param props - Toast configuration
 * @returns Toast control object with id, dismiss, and update functions
 */
function toast({ ...props }: Toast) {
  const id = genId()

  /** Update this toast's properties */
  const update = (props: ToasterToast) =>
    dispatch({
      type: "UPDATE_TOAST",
      toast: { ...props, id },
    })
  
  /** Dismiss this toast */
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id })

  // Add toast to state
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

/**
 * React hook for toast notifications
 * 
 * @returns Toast state and control functions
 */
function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  // Subscribe to toast state changes
  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: "DISMISS_TOAST", toastId }),
  }
}

export { useToast, toast }
