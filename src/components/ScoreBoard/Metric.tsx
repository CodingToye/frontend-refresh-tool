import type {MetricProps} from "./types";

const metricIconStyles = {
  primary: "text-primary-500",
  secondary: "text-secondary-500",
  tertiary: "text-tertiary-500",
  danger: "text-danger-500",
  warning: "text-warning-500",
  info: "text-info-500",
  success: "text-success-500",
} as const;

export function Metric({
  metricValue,
  metricValueSuffix,
  metric,
  metricIcon,
  metricIconStyle = "primary",
  metricNote,
  extraClasses,
}: MetricProps) {
  const baseClasses =
    "flex flex-col items-center gap-3 justify-between transition bg-tertiary-600 border border-tertiary-800 p-4 rounded shadow-soft";

  const colourClasses = metricIconStyles[metricIconStyle];
  return (
    <div className={`${baseClasses} ${extraClasses}`}>
      <h2 className="text-xxs uppercase text-tertiary-200">{metric}</h2>
      <span
        className={`material-symbols-outlined align-middle mr-1 ${colourClasses}`}
      >
        {metricIcon}
      </span>
      <p className="text-2xl capitalize">
        {metricValue}
        {metricValueSuffix ? metricValueSuffix : ""}
        {metricNote && (
          <span className="text-[10px] text-white/50 block">{metricNote}</span>
        )}
      </p>
    </div>
  );
}
