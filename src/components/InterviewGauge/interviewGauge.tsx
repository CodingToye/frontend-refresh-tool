import type {Band, InterviewGaugeProps} from "./types";

const bands: Band[] = [
  {
    label: "Poor",
    min: 0,
    max: 24,
    startAngle: -90,
    endAngle: -45,
    colorClass: {
      default: "text-danger-500",
      dark: "text-danger-600",
    },
  },
  {
    label: "Weak",
    min: 25,
    max: 49,
    startAngle: -45,
    endAngle: 0,
    colorClass: {
      default: "text-warning-500",
      dark: "text-warning-600",
    },
  },
  {
    label: "Decent",
    min: 50,
    max: 74,
    startAngle: 0,
    endAngle: 45,
    colorClass: {
      default: "text-info-500",
      dark: "text-info-600",
    },
  },
  {
    label: "Strong",
    min: 75,
    max: 100,
    startAngle: 45,
    endAngle: 90,
    colorClass: {
      default: "text-success-500",
      dark: "text-success-600",
    },
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
  const outerTrackRadius = 90;
  const outerTrackWidth = 24;
  const bandStrokeWidth = 18;
  const highlightRadius = 88;
  const highlightWidth = 6;
  const labelRadius = 132;
  const tickRadius = 110;
  const needleLength = 70;

  // Maps 0-100 to -90deg to +90deg
  const needleAngle = -90 + (safeScore / 100) * 180;
  const needlePoint = polarToCartesian(cx, cy, needleLength, needleAngle);

  const ticks = [0, 25, 50, 75, 100];

  const activeBand =
    bands.find((band) => safeScore >= band.min && safeScore <= band.max) ??
    bands[0];

  console.log(activeBand);

  const needleColourClass = activeBand.colorClass.default.split(" ")[0];
  const needleCentreColourClass = activeBand.colorClass.dark.split(" ")[0];

  return (
    <div className="flex flex-col items-center gap-2 transition bg-tertiary-600  p-4 rounded shadow-soft">
      <h2 className="text-xxs uppercase text-tertiary-200">Progression Band</h2>

      <div className="flex flex-col items-center">
        <svg
          viewBox="-40 -20 320 175"
          className="w-full pt-4"
          aria-label={`Interview score gauge showing ${safeScore}%`}
          role="img"
        >
          <path
            d={describeArc(cx, cy, outerTrackRadius, -90, 90)}
            fill="none"
            stroke="currentColor"
            strokeWidth={outerTrackWidth}
            className="text-zinc-950/40"
            strokeLinecap="round"
          />

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
              strokeWidth={bandStrokeWidth}
              className={band.colorClass.default}
              strokeLinecap="round"
            />
          ))}

          {bands.map((band) => (
            <path
              key={`${band.label}-highlight`}
              d={describeArc(
                cx,
                cy,
                highlightRadius,
                band.startAngle,
                band.endAngle,
              )}
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth={highlightWidth}
              strokeLinecap="round"
              className={band.colorClass.dark}
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
                  className="text-white"
                  strokeLinecap="round"
                />
                <text
                  x={label.x}
                  y={label.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="fill-white/40 text-xxs font-bold"
                >
                  {tick}
                </text>
              </g>
            );
          })}

          <line
            x1={cx}
            y1={cy}
            x2={needlePoint.x}
            y2={needlePoint.y}
            stroke="currentColor"
            strokeWidth="6"
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
            className={needleCentreColourClass}
          />
        </svg>
      </div>
      <div className="flex flex-col items-center text-2xl">
        <span className={`text-xxs uppercase ${activeBand.colorClass.default}`}>
          {activeBand.label}
        </span>{" "}
        {safeScore}%
      </div>
    </div>
  );
}
