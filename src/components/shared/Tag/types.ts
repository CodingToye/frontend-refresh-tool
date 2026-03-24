export type TagProps = {
  tagLabel: string;
  tagStyle?: "primary" | "secondary" | "poor" | "weak" | "decent" | "strong";
  tagVariant?: boolean;
  tagClose?: boolean;
  onClose?: () => void;
};
