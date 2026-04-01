import type {TagProps} from "./types";

const tagStyles = {
  primary: {
    default: "bg-primary-300 border-black/50 text-black/70 text-primary-950",
    variant: "bg-primary-500 border-black/50 text-black/70",
  },
  secondary: {
    default:
      "bg-secondary-500 border-black/50 text-black/70 text-secondary-950",
    variant: "bg-secondary-500 border-black/50 text-black/70",
  },
  poor: {
    default: "bg-danger-200 border-black/50 text-black/70",
    variant: "bg-danger-500 border-black/50 text-black/70",
  },
  weak: {
    default: "bg-warning-200 border-warning/50 text-black/70",
    variant: "bg-warning-500 border-warning/50 text-black/70",
  },
  decent: {
    default: "bg-info-200 border-black/50 text-black/70",
    variant: "bg-info-500 border-black/50 text-black/70",
  },
  strong: {
    default: "bg-success-200 border-warning/50 text-black/70",
    variant: "bg-success-500 border-warning/50 text-black/70",
  },
} as const;

export function Tag({
  tagLabel,
  tagStyle = "primary",
  tagVariant = false,
  onClose,
  tagClose = false,
  extraClasses,
}: TagProps) {
  const baseClasses =
    "flex items-center w-fit h-4 rounded px-1 lg:px-2 text-micro uppercase   text-shadow text-shadow-white text-center font-bold shadow-lg shadow-white/10";
  const colourClasses = tagVariant
    ? tagStyles[tagStyle].variant
    : tagStyles[tagStyle].default;
  const handleCloseClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onClose?.();
  };
  return (
    <span className={`${baseClasses} ${colourClasses} ${extraClasses}`}>
      {tagLabel}{" "}
      {tagClose && (
        <button
          type="button"
          className="material-symbols-outlined pl-1 leading-none! text-sm!"
          onClick={handleCloseClick}
        >
          close
        </button>
      )}
    </span>
  );
}
