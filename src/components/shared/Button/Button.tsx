import type {ButtonProps} from "./types";
export function Button({
  buttonLabel,
  buttonIcon,
  buttonStyle = "primary",
  handleClick,
  extraClasses,
}: ButtonProps) {
  const baseClasses = `flex items-center rounded-xl px-4 h-8 text-xxs transition shadow-sm ${extraClasses}`;
  const colourMap = {
    primary:
      "bg-primary-500 text-black hover:bg-primary-600 shadow-primary-400",
    secondary:
      "bg-secondary-500 text-black hover-bg-secondary-600 shadow-secondary-400",
    tertiary:
      "bg-tertiary-500 text-text hover:bg-tertiary-700 shadow-tertiary-700",
  };
  const colourClasses = colourMap[buttonStyle];
  return (
    <button onClick={handleClick} className={`${baseClasses} ${colourClasses}`}>
      {buttonIcon && (
        <span className="material-symbols-outlined text-base! mr-2">
          {buttonIcon}
        </span>
      )}
      {buttonLabel}
    </button>
  );
}
