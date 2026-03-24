import type {ScoreProps} from "./types";

const colourMap = {
  poor: {
    border: "border-danger-500",
    indicator: "text-danger-500",
  },
  weak: {
    border: "border-warning-500",
    indicator: "text-warning-500",
  },
  decent: {
    border: "border-info-500",
    indicator: "text-info-500",
  },
  strong: {
    border: "border-success-500",
    indicator: "text-success-500",
  },
} as const;

const trendMap = {
  up: "trending_up",
  down: "trending_down",
  same: "horizontal_rule",
} as const;

export function Score({
  count,
  scoreStyle,
  trend,
  contentNoun,
  contentVerb,
}: ScoreProps) {
  const baseClasses =
    "flex flex-col items-center gap-3 transition bg-tertiary-600 border-b-4 p-4 rounded";
  const label = `${count === 1 ? contentNoun : `${contentNoun}s`} ${contentVerb}`;

  return (
    <div className={`${baseClasses} ${colourMap[scoreStyle].border}`}>
      <h2 className="text-xxs uppercase">{label}</h2>
      <p className="text-2xl">{count}</p>
      {trend && (
        <span
          aria-label={`Trend: ${trend}`}
          className={`material-symbols-outlined ${colourMap[scoreStyle].indicator}`}
        >
          {trendMap[trend]}
        </span>
      )}
    </div>
  );
}
