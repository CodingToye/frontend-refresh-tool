export type ToastStyle = "success" | "warning" | "danger" | "info";

export type ToastProps = {
  title: string;
  message: string;
  extraClasses?: string;
  toastStyle?: ToastStyle;
  toastIconDisabled?: boolean | null;
  duration?: number;
  onDismiss?: () => void;
};

export type ToastItem = Omit<ToastProps, "onDismiss"> & {
  id: string;
};
