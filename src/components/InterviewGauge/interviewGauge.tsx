import type {Band, InterviewGaugeProps} from "./types";

const bands: Band[] = [
  {
    label: "Poor",
    min: 0,
    max: 24,
    startAngle: -90,
    endAngle: -45,
    colorClass: "text-danger-500 shadow-soft",
  },
  {
    label: "Weak",
    min: 25,
    max: 49,
    startAngle: -45,
    endAngle: 0,
    colorClass: "text-warning-500 shadow-soft",
  },
  {
    label: "Decent",
    min: 50,
    max: 74,
    startAngle: 0,
    endAngle: 45,
    colorClass: "text-info-500 shadow-soft",
  },
  {
    label: "Strong",
    min: 75,
    max: 100,
    startAngle: 45,
    endAngle: 90,
    colorClass: "text-success-500 shadow-soft",
  },
];

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleInDegrees: number,
) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;

  return {
    x: cx + radius * Math.cos(angleInRadians),
    y: cy + radius * Math.sin(angleInRadians),
  };
}

function describeArc(
  cx: number,
  cy: number,
  radius: number,
  startAngle: number,
  endAngle: number,
) {
  const start = polarToCartesian(cx, cy, radius, endAngle);
  const end = polarToCartesian(cx, cy, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  return [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ].join(" ");
}

export function InterviewGauge({score}: InterviewGaugeProps) {
  const trueScore = score ? score : 0;
  const safeScore = clamp(trueScore, 0, 100);

  const cx = 120;
  const cy = 120;
  const outerRadius = 88;
  const labelRadius = 132;
  const tickRadius = 110;
  const needleLength = 68;

  // Maps 0-100 to -90deg to +90deg
  const needleAngle = -90 + (safeScore / 100) * 180;
  const needlePoint = polarToCartesian(cx, cy, needleLength, needleAngle);

  const ticks = [0, 25, 50, 75, 100];

  const bandLabelRadius = 125;

  const activeBand =
    bands.find((band) => safeScore >= band.min && safeScore <= band.max) ??
    bands[0];

  const needleColourClass = activeBand.colorClass.split(" ")[0];

  return (
    <div className="flex flex-col items-center gap-2 transition bg-tertiary-600 border-b-4 border-primary-500 p-4 rounded shadow-soft">
      <h2 className="text-xxs uppercase text-tertiary-200">
        Overall Interview Score
      </h2>

      <div className="flex flex-col items-center">
        <svg
          viewBox="-40 -20 320 175"
          className="w-full pt-4"
          aria-label={`Interview score gauge showing ${safeScore}%`}
          role="img"
        >
          {bands.map((band) => (
            <path
              key={band.label}
              d={describeArc(
                cx,
                cy,
                outerRadius,
                band.startAngle,
                band.endAngle,
              )}
              fill="none"
              stroke="currentColor"
              strokeWidth="18"
              className={band.colorClass}
              strokeLinecap="round"
            />
          ))}

          {ticks.map((tick) => {
            const angle = -90 + (tick / 100) * 180;
            const start = polarToCartesian(cx, cy, tickRadius - 6, angle);
            const end = polarToCartesian(cx, cy, tickRadius + 4, angle);
            const label = polarToCartesian(cx, cy, labelRadius, angle);

            return (
              <g key={tick}>
                <line
                  x1={start.x}
                  y1={start.y}
                  x2={end.x}
                  y2={end.y}
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-tertiary-300"
                  strokeLinecap="round"
                />
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-primary-500 text-[10px] font-bold"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          {bands.map((band) => {
            const midAngle = (band.startAngle + band.endAngle) / 2;
            const pos = polarToCartesian(cx, cy, bandLabelRadius, midAngle);

            return (
              <text
                key={`${band.label}-text`}
                x={pos.x}
                y={pos.y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-zinc-300 text-[10px] font-medium"
              >
                {band.label}
              </text>
            );
          })}

          <line
            x1={cx}
            y1={cy}
            x2={needlePoint.x}
            y2={needlePoint.y}
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            className={`${needleColourClass} text-shadow-lg`}
          />

          <circle
            cx={cx}
            cy={cy}
            r="8"
            fill="currentColor"
            className={needleColourClass}
          />
          <circle
            cx={cx}
            cy={cy}
            r="4"
            fill="currentColor"
            className="text-zinc-900"
          />
        </svg>
      </div>
      <div className="text-2xl">{safeScore}%</div>
    </div>
  );
}
