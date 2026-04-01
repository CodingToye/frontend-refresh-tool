import type {InterviewScoreMetrics} from "@/utils/InterviewScore";

export type ScoreTrend = "up" | "down";

export type ScoreBoardProps = {
  reviewedCount: number;
  poorCount: number;
  weakCount: number;
  decentCount: number;
  strongCount: number;
  poorTrend?: ScoreTrend;
  weakTrend?: ScoreTrend;
  decentTrend?: ScoreTrend;
  strongTrend?: ScoreTrend;
  subjectScore: number | null;
  subjectMetrics: InterviewScoreMetrics;
  mockQuestionsCount: number;
  totalAvailable: number;
  questionMode: "classic" | "extended";
  mobileScoreboardOpen: boolean;
  toggleMobileScoreboard: () => void;
};

export type MetricProps = {
  metricValue: number | string;
  metricValueSuffix?: string;
  metricIcon: string;
  metricIconStyle?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "info"
    | "success";
  metric: string;
  metricNote?: string;
  extraClasses?: string;
};
