export type InterviewGaugeProps = {
  score: number | null; // 0 - 100
  title?: string;
};

export type Band = {
  label: string;
  min: number;
  max: number;
  startAngle: number;
  endAngle: number;
  colorClass: string;
};
