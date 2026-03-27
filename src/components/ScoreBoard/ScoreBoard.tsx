import {InterviewGauge} from "@/components/InterviewGauge";

import {Metric} from "./Metric";
// import {Score} from "./Score";
import type {ScoreBoardProps} from "./types";
export function ScoreBoard({
  // poorCount,
  // weakCount,
  // decentCount,
  // strongCount,
  // poorTrend,
  // weakTrend,
  // decentTrend,
  // strongTrend,
  subjectScore,
  subjectMetrics,
}: ScoreBoardProps) {
  // const scores = [
  //   {
  //     count: poorCount,
  //     scoreStyle: "poor" as const,
  //     contentNoun: "Topic",
  //     contentVerb: "poor",
  //     trend: poorTrend,
  //   },
  //   {
  //     count: weakCount,
  //     scoreStyle: "weak" as const,
  //     contentNoun: "Topic",
  //     contentVerb: "weak",
  //     trend: weakTrend,
  //   },
  //   {
  //     count: decentCount,
  //     scoreStyle: "decent" as const,
  //     contentNoun: "Topic",
  //     contentVerb: "decent",
  //     trend: decentTrend,
  //   },
  //   {
  //     count: strongCount,
  //     scoreStyle: "strong" as const,
  //     contentNoun: "Topic",
  //     contentVerb: "strong",
  //     trend: strongTrend,
  //   },
  // ];

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
        {subjectScore !== null && (
          <>
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4">
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
        )}
        {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {scores.map(
            ({count, scoreStyle, contentNoun, contentVerb, trend}, i) => (
              <Score
                key={i}
                count={count}
                scoreIcon="flag"
                scoreStyle={scoreStyle}
                contentNoun={contentNoun}
                contentVerb={contentVerb}
                trend={trend}
              />
            ),
          )}
        </div> */}
      </div>
    </section>
  );
}
