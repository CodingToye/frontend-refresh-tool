import type {MetricProps} from "./types";

export function Metric({
  metricValue,
  metricValueSuffix,
  metric,
  metricIcon,
}: MetricProps) {
  const baseClasses =
    "flex flex-col items-center gap-3 transition bg-tertiary-600 border-b-4 border-primary-500 p-4 rounded shadow-soft";

  return (
    <div className={`${baseClasses} `}>
      <h2 className="text-xxs uppercase text-tertiary-200">{metric}</h2>
      <span className="material-symbols-outlined align-middle mr-1 text-primary-400">
        {metricIcon}
      </span>
      <p className="text-2xl capitalize">
        {metricValue}
        {metricValueSuffix ? metricValueSuffix : ""}
      </p>
    </div>
  );
}
