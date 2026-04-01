import {InterviewGauge} from "@/components/InterviewGauge";

import {Metric} from "./Metric";
import type {ScoreBoardProps} from "./types";
export function ScoreBoard({
  subjectScore,
  subjectMetrics,
  totalAvailable,
  questionMode,
}: ScoreBoardProps) {
  return (
    <section className="flex flex-col gap-2">
      <header className="flex justify-center">
        <div className="flex items-center flex-row">
          <span className="material-symbols-outlined text-base! mr-2">
            leaderboard
          </span>
          <h2 className="text-primary-500 mb-0">Scoreboard</h2>
        </div>
      </header>

      <div className="flex flex-col gap-4">
        {subjectScore !== null ? (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
              <Metric
                metricValue={`${totalAvailable}`}
                metricValueSuffix=""
                metricIcon="shield_question"
                metric="Interview Questions"
                metricNote={
                  questionMode === "extended"
                    ? "extended questions used"
                    : "classic questions used"
                }
                extraClasses="col-span-2"
              />
              <Metric
                metricValue={subjectScore}
                metricValueSuffix="%"
                metricIcon="workspace_premium"
                metric="Interview Score"
              />
              <Metric
                metricValue={Math.round(subjectMetrics.coverage * 100)}
                metricValueSuffix="%"
                metricIcon="full_coverage"
                metric="Subject Coverage"
              />
              <Metric
                metricValue={Math.round(subjectMetrics.accuracy * 100)}
                metricValueSuffix="%"
                metricIcon="my_location"
                metric="Total Accuracy"
              />
              <Metric
                metricValue={subjectMetrics.confidence}
                metricIcon="star_shine"
                metric="Subject Confidence"
              />
            </div>
            <InterviewGauge score={subjectScore} />
          </>
        ) : (
          <p>Scores will appear once an interview has taken place</p>
        )}
      </div>
    </section>
  );
}
