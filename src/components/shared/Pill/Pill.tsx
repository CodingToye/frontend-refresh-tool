import type {PillProps} from "./types";

const pillStyles = {
  primary: "bg-primary-500 border-black/50 text-black/70",
  secondary: "bg-secondary-500 border-black/50 text-black/70",
  poor: "bg-danger-300 border-black/50 text-black/70",
  weak: "bg-warning-500 border-warning/50 text-black/70",
  decent: "bg-info-300 border-black/50 text-black/70",
  strong: "bg-success-300 border-warning/50 text-black/70",
} as const;

export function Pill({pillLabel, pillStyle = "primary"}: PillProps) {
  const baseClasses = "px-1 rounded min-w-[50px] text-center";
  const colourClasses = pillStyles[pillStyle];
  return <span className={`${baseClasses} ${colourClasses}`}>{pillLabel}</span>;
}
