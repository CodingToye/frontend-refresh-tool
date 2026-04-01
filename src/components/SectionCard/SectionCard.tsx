import type {TrendLevel} from "@/types/Progress.types";
import {getTopicKey} from "@/utils/topicKeys";

import {Metric} from "../ScoreBoard";
import {Tag} from "../shared/Tag";
import {TrendSparkline} from "../TrendSparkline";
import type {InterviewAttempt, SectionCardProps} from "./types";

const levelRank = {
  poor: 0,
  weak: 1,
  decent: 2,
  strong: 3,
} as const;

const sectionLevelStyles = {
  poor: {
    card: "bg-danger-500 border-danger-500",
    text: "text-danger-700",
    badge: "poor",
    progress: "bg-danger-300",
    indicator: "bg-danger-300",
  },
  weak: {
    card: "bg-warning-500 border-warning-500",
    text: "text-warning-700",
    badge: "weak",
    progress: "bg-warning-300",
    indicator: "bg-warning-300",
  },
  decent: {
    card: "bg-info-500 border-info-500",
    text: "text-info-500",
    badge: "decent",
    progress: "bg-info-300",
    indicator: "bg-info-500",
  },
  strong: {
    card: "bg-success-500 border-success-500",
    text: "text-success-700",
    badge: "strong",
    progress: "bg-success-300",
    indicator: "bg-success-300",
  },
} as const;

const trendConfig = {
  up: {
    icon: "trending_up",
    className: "text-success-500",
    color: "#4ade80",
  },
  down: {
    icon: "trending_down",
    className: "text-danger-500",
    color: "#f87171",
  },
  same: {
    icon: "trending_flat",
    className: "text-warning-500",
    color: "#facc15",
  },
};

export function SectionCard({
  subject,
  section,
  interviewScore,
  interviewHistory,
  flaggedTopics,
  completedTopics,
  mockQuestions,
  totalTopics,
  onOpen,
}: SectionCardProps) {
  // Data
  const progress = totalTopics
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  const topicEntries = section.items.map((item) => {
    const topicKey = getTopicKey(subject, section.title, item.name);

    return {
      item,
      topicKey,
      flaggedLevel: flaggedTopics[topicKey],
      inMockInterview: mockQuestions[topicKey],
    };
  });

  const isComplete = totalTopics > 0 && completedTopics === totalTopics;

  const potentialInterviewQuestionCount = topicEntries.filter(
    ({item}) => item.interview,
  ).length;

  const poorCount = topicEntries.filter(
    (e) => e.flaggedLevel === "poor",
  ).length;

  const weakCount = topicEntries.filter(
    (e) => e.flaggedLevel === "weak",
  ).length;

  const mockQuestionsCount = section.items.reduce((total, item) => {
    const topicKey = getTopicKey(subject, section.title, item.name);
    const isSelected = !!mockQuestions[topicKey];

    if (!isSelected) return total;

    return total + (item.mockQuestions?.length ?? 0);
  }, 0);

  const attempts: InterviewAttempt[] = interviewHistory[subject] ?? [];

  const sectionHistory = attempts
    .map((attempt) => {
      const values: number[] = topicEntries
        .map(({topicKey}) => {
          const level = attempt.topics[topicKey];
          return level ? levelRank[level] : null;
        })
        .filter((value) => value !== null);

      if (values.length === 0) return null;

      const average =
        values.reduce((sum, value) => sum + value, 0) / values.length;

      return Number(average.toFixed(2));
    })
    .filter((value): value is number => value !== null);

  const topicLevels = topicEntries
    .map(({flaggedLevel}) => flaggedLevel)
    .filter((level): level is NonNullable<typeof level> => level !== null);

  const sectionLevel = topicLevels.includes("poor")
    ? "poor"
    : topicLevels.includes("weak")
      ? "weak"
      : topicLevels.includes("decent")
        ? "decent"
        : topicLevels.includes("strong")
          ? "strong"
          : null;

  const latestScore = sectionHistory[sectionHistory.length - 1];
  const previousScore = sectionHistory[sectionHistory.length - 2];

  const sectionTrend: TrendLevel | null =
    latestScore == null || previousScore == null
      ? null
      : latestScore > previousScore
        ? "up"
        : latestScore < previousScore
          ? "down"
          : "same";

  // Presentation
  const baseClasses = `flex flex-col gap-4 justify-between rounded-xl bg-tertiary-500 border-tertiary-400/20 border p-3 text-left transition shadow-soft hover:shadow-[0_0_10px_rgba(91,192,190,0.25)]`;

  const levelStyles = sectionLevel ? sectionLevelStyles[sectionLevel] : null;
  const trendStyle = sectionTrend ? trendConfig[sectionTrend] : null;

  const opacityClasses = isComplete
    ? "opacity-30 inset-shadow-sm inset-shadow-black"
    : "opacity-100";

  const progressClass = "bg-secondary-500";
  const indicatorClass = levelStyles?.indicator ?? "bg-tertiary-600";

  const hasInterviewScore = (interviewScore ?? 0) > 0;
  const hasAttentionMetrics =
    poorCount > 0 || weakCount > 0 || mockQuestionsCount > 0;
  const hasAnyTopMetrics = hasInterviewScore || hasAttentionMetrics;

  const hasHistory = interviewHistory[subject]?.length > 1;

  // Render
  return (
    <button onClick={onOpen} className={`${baseClasses} ${opacityClasses}`}>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-3">
          <div className="flex justify-between gap-1">
            <h3 className="text-sm font-semibold text-white/50">
              {section.title}
            </h3>
            <div
              className={`rounded-full h-4 w-4  ${indicatorClass} ${levelStyles?.indicator ? "shadow-soft-dark" : "inner-shadow-soft"}`}
            />
          </div>
          {potentialInterviewQuestionCount > 0 && (
            <div className="inner-shadow-wider p-px w-fit rounded flex items-center outline outline-white/10 shadow-2xl shadow-white/50">
              <Tag
                tagLabel="Interview-focused"
                tagStyle="secondary"
                extraClasses="shadow-soft"
              />
            </div>
          )}
        </div>

        {hasAnyTopMetrics && (
          <div className="flex flex-col gap-4 ">
            {(poorCount > 0 || weakCount > 0) && (
              <div className="grid grid-cols-2 gap-2 text-center  ">
                <Metric
                  metricValue={poorCount}
                  metricIcon="warning"
                  metricIconStyle="danger"
                  metric="Topics needing attention"
                />

                {weakCount > 0 && (
                  <Metric
                    metricValue={weakCount}
                    metricIcon="warning"
                    metricIconStyle="warning"
                    metric="Topics to review"
                  />
                )}
              </div>
            )}

            {(mockQuestionsCount > 0 || hasInterviewScore) && (
              <div className="flex flex-col gap-2 bg-tertiary-600 rounded p-2 shadow-soft">
                {mockQuestionsCount > 0 && (
                  <div className="text-xxs flex items-center justify-between leading-normal">
                    <p className="text-white font-bold">
                      <span className="material-symbols-outlined material-filled align-middle text-base! mr-2">
                        group_add
                      </span>
                      Questions added
                    </p>
                    <Tag tagStyle="primary" tagLabel={mockQuestionsCount} />
                  </div>
                )}
                {hasInterviewScore && (
                  <div className="text-xxs flex items-center justify-between leading-normal">
                    <p className="text-white font-bold">
                      <span className="material-symbols-outlined material-filled align-middle text-base! mr-2">
                        leaderboard
                      </span>
                      Current Interview Score
                    </p>
                    <Tag tagStyle="primary" tagLabel={`${interviewScore}%`} />
                  </div>
                )}
              </div>
            )}
            {hasHistory && (
              <div className="flex flex-col items-center gap-4 rounded bg-tertiary-600 p-2 shadow-soft">
                <div className="flex w-full flex-row items-center justify-between">
                  <p className="mb-1 text-xxs text-white leading-normal">
                    Performance Progress
                  </p>
                  <div>
                    {trendStyle && (
                      <span
                        className={`material-symbols-outlined align-middle mr-2 ${trendStyle.className}`}
                      >
                        {trendStyle.icon}
                      </span>
                    )}
                  </div>
                </div>

                <div className="w-full rounded bg-tertiary-700 p-2">
                  <div className={trendStyle?.className}>
                    <TrendSparkline
                      values={sectionHistory}
                      lineColour={trendStyle ? trendStyle.color : "#94a3b8"}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-black/30 border border-black/20 py-2 px-3 rounded-lg inner-shadow-soft">
        <div className="flex gap-2 items-center text-xxs text-text/50">
          <span>
            {completedTopics}/{totalTopics}
          </span>
          <div className="flex-1">
            <div className="h-2 rounded-full bg-tertiary-800 inner-shadow-soft">
              <div
                className={`h-2 ${progressClass} rounded-full transition-all duration-300 shadow-soft ${progress > 0 && "glow-soft"}`}
                style={{width: `${progress}%`}}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
