import type {SlidingToggleProps} from "./types";

export function SwitchToggle<T extends string>({
  leftLabel,
  rightLabel,
  leftValue,
  rightValue,
  value,
  onChange,
}: SlidingToggleProps<T>) {
  const isRight = value === rightValue;

  return (
    <div className="relative grid grid-cols-2 items-center  gap-2 rounded-full h-8 bg-black/20 inner-shadow-soft">
      {/* Left label */}
      <button
        className={`relative pl-1 text-xxs font-medium transition z-2 ${
          !isRight ? "text-secondary-950" : "text-white/40"
        }`}
        onClick={() => onChange(isRight ? leftValue : rightValue)}
      >
        {leftLabel}
      </button>

      {/* Toggle */}

      {/* Sliding knob */}
      <span
        className={`absolute top-1/2 -translate-y-1/2 translate z-1 left-0 h-5 w-1/2 rounded-full bg-secondary-500  transition-all duration-200 ${
          isRight ? "left-1/2" : "left-0"
        }`}
      />

      {/* Right label */}
      <button
        className={`relative pr-1 text-xxs font-medium transition z-2 ${
          isRight ? "text-secondary-950" : "text-white/40"
        }`}
        onClick={() => onChange(!isRight ? rightValue : leftValue)}
      >
        {rightLabel}
      </button>
    </div>
  );
}
