export type TagProps = {
  tagLabel: string | number;
  tagStyle?: "primary" | "secondary" | "poor" | "weak" | "decent" | "strong";
  tagVariant?: boolean;
  tagClose?: boolean;
  onClose?: () => void;
  extraClasses?: string;
};
