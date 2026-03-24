import type {BadgeProps} from "./types";

const badgeStyles = {
  primary: "bg-primary-500 border-black/50 text-black/70",
  secondary: "bg-secondary-500 border-black/50 text-black/70",
  poor: "bg-danger-300 border-black/50 text-black/70",
  weak: "bg-warning-300 border-warning/50 text-black/70",
  decent: "bg-info-300 border-black/50 text-black/70",
  strong: "bg-success-300 border-warning/50 text-black/70",
} as const;

export function Badge({badgeLabel, badgeStyle = "primary"}: BadgeProps) {
  const baseClasses =
    "rounded-full inline-flex items-center justify-center w-4 h-4 border text-xxs font-bold ml-2";

  const colourClasses = badgeStyles[badgeStyle];
  return (
    <span className={`${baseClasses} ${colourClasses}`}>{badgeLabel}</span>
  );
}
