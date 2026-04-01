import {InterviewGauge} from "@/components/InterviewGauge";

import {Metric} from "./Metric";
import type {ScoreBoardProps} from "./types";
export function ScoreBoard({
  subjectScore,
  subjectMetrics,
  totalAvailable,
  questionMode,
  mobileScoreboardOpen,
  toggleMobileScoreboard,
}: ScoreBoardProps) {
  return (
    <>
      {mobileScoreboardOpen && (
        <div
          className="z-1 fixed inset-0 bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={toggleMobileScoreboard}
        />
      )}
      <section
        className={`${mobileScoreboardOpen ? "right-0" : "-right-100"} w-full z-2 absolute top-12 transition-all duration-200 lg:flex lg:top-auto lg:right-auto flex-col lg:gap-2 lg:w-auto`}
      >
        <header className="flex justify-center">
          <div className="flex items-center flex-row">
            <span className="material-symbols-outlined text-base! mr-2">
              leaderboard
            </span>
            <h2 className="text-primary-500 mb-0">Scoreboard</h2>
          </div>
        </header>

        <div className="rounded bg-tertiary-600 p-4 shadow-soft">
          <div className="flex flex-col gap-4">
            {subjectScore !== null ? (
              <div>
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
              </div>
            ) : (
              <p>Scores will appear once an interview has taken place</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
