import {useState} from "react";

import type {ToastItem} from "@/components/shared/Toast/types";

type NewToast = Omit<ToastItem, "id">;

export function useToasts() {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  function addToast(toast: NewToast) {
    setToasts((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...toast,
      },
    ]);
  }

  function removeToast(id: string) {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }

  function clearToasts() {
    setToasts([]);
  }

  return {
    toasts,
    addToast,
    removeToast,
    clearToasts,
  };
}
