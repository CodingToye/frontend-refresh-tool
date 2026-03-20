import {useCallback, useEffect, useRef, useState} from "react";

import type {ToastProps} from "./types";

export function Toast({
  title,
  message,
  toastStyle = "success",
  extraClasses,
  toastIconDisabled = false,
  duration = 4000,
  onDismiss,
}: ToastProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const closeTimeoutRef = useRef<number | null>(null);
  const removeTimeoutRef = useRef<number | null>(null);
  const baseClasses = `flex flex-col items-start relative overflow-hidden transition-all duration-300   px-3 py-1 ${extraClasses ?? ""}`;
  const colourMap = {
    success: "bg-success-200 border-success-700 text-success-700",
    warning: "bg-warning-200 border-warning-700 text-warning-700",
    danger: "bg-danger-200 border-danger-700 text-danger-700",
    info: "bg-info-200 border-info-700 text-info-700",
  };
  const progressColourMap = {
    success: "bg-success-700",
    warning: "bg-warning-700",
    danger: "bg-danger-700",
    info: "bg-info-700",
  };
  const colourClasses = colourMap[toastStyle];
  const toastIcon = {
    success: "check_circle",
    warning: "warning",
    danger: "error",
    info: "info",
  };

  const startClosing = useCallback(() => {
    setIsClosing((prev) => {
      if (prev) return prev;

      removeTimeoutRef.current = window.setTimeout(() => {
        setIsVisible(false);
        onDismiss?.();
      }, 300);

      return true;
    });
  }, [onDismiss]);

  function dismissToast() {
    startClosing();
  }

  useEffect(() => {
    closeTimeoutRef.current = window.setTimeout(() => {
      startClosing();
    }, duration);

    return () => {
      if (closeTimeoutRef.current) window.clearTimeout(closeTimeoutRef.current);
      if (removeTimeoutRef.current)
        window.clearTimeout(removeTimeoutRef.current);
    };
  }, [duration, startClosing]);

  if (!isVisible) return null;
  return (
    <div
      className={`${baseClasses} ${colourClasses} ${isClosing ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}
    >
      <header className="flex flex-row items-center justify-between w-full">
        <div className="flex">
          {!toastIconDisabled && (
            <span className="material-symbols-outlined material-filled text-sm! mr-1">
              {toastIcon[toastStyle]}
            </span>
          )}
          <h1 className="text-sm tracking-normal">{title}</h1>
        </div>
        <button
          type="button"
          className="material-symbols-outlined cursor-pointer"
          style={{fontSize: "16px"}}
          onClick={dismissToast}
          aria-label="Dismiss notification"
        >
          close
        </button>
      </header>
      <p className="text-xxs">{message}</p>

      {!isClosing && (
        <div className="absolute bottom-0 left-0 h-1 w-full">
          <div
            className={`h-full ${progressColourMap[toastStyle]}`}
            style={{
              width: "100%",
              animation: `toast-progress ${duration}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
}
