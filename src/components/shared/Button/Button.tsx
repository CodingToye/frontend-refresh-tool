import type {ButtonProps} from "./types";

const buttonStyles = {
  primary: "bg-primary-500 text-black hover:bg-primary-600 shadow-black/50",
  secondary:
    "bg-secondary-500 text-black hover:bg-secondary-600 shadow-black/50",
  tertiary: "bg-tertiary-500 text-text hover:bg-tertiary-700 shadow-black/50",
  danger: "bg-danger-500 text-text hover:bg-danger-700 shadow-black/50",
  warning: "bg-warning-500 text-text hover:bg-warning-700 shadow-black/50",
  info: "bg-info-500 text-text hover:bg-info-700 shadow-black/50",
  success: "bg-success-500 text-text hover:bg-success-700 shadow-black/50",
} as const;
export function Button({
  buttonLabel,
  buttonIcon,
  buttonIconColour = "primary-500",
  buttonStyle = "primary",
  handleClick,
  extraClasses,
  iconOnly = false,
}: ButtonProps) {
  const baseClasses = `flex items-center rounded-xl px-4 h-8 text-xxs transition shadow-sm ${extraClasses}`;

  const colourClasses = buttonStyles[buttonStyle];
  return (
    <button onClick={handleClick} className={`${baseClasses} ${colourClasses}`}>
      {buttonIcon && (
        <span
          className={`material-symbols-outlined text-base! text-${buttonIconColour} ${!iconOnly ? "mr-2" : ""}`}
        >
          {buttonIcon}
        </span>
      )}
      {!iconOnly && buttonLabel}
    </button>
  );
}
