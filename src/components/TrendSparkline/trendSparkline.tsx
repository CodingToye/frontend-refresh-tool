import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  LinearScale,
  LineElement,
  PointElement,
  Tooltip,
} from "chart.js";
import {Line} from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Filler,
);

import type {TrendSparklineProps} from "./types";

export function TrendSparkline({values, lineColour}: TrendSparklineProps) {
  const data = {
    labels: values.map((_, index) => index + 1),
    datasets: [
      {
        data: values,
        borderColor: lineColour,
        borderWidth: 2,
        pointRadius: 0,
        pointHoverRadius: 3,
        tension: 0.35,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
        displayColors: false,
      },
    },
    scales: {
      x: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        display: false,
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
    },
    elements: {
      line: {
        capBezierPoints: true,
      },
    },
  } as const;
  return (
    <div className="h-6 w-full">
      <Line data={data} options={options} />
    </div>
  );
}
