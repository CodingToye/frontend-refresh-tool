import type {BadgeProps} from "./types";

export function Badge({badgeLabel, badgeStyle = "primary"}: BadgeProps) {
  const baseClasses =
    "rounded-full inline-flex items-center justify-center w-4 h-4 border text-xxs font-bold ml-2";
  const colourMap = {
    primary: "bg-primary-500 border-black/50 text-black/70",
    secondary: "bg-secondary-500 border-black/50 text-black/70",
  };
  const colourClasses = colourMap[badgeStyle];
  return (
    <span className={`${baseClasses} ${colourClasses}`}>{badgeLabel}</span>
  );
}
