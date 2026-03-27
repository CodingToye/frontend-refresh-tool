import type {TrendLevel} from "@/types/Progress.types";
import {buildSparklinePath} from "@/utils/buildSparklinePath";
import {getTopicKey} from "@/utils/topicKeys";

import {Pill} from "../shared/Pill";
import {Tag} from "../shared/Tag";
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

const trendStyles: Record<TrendLevel, {icon: string; className: string}> = {
  up: {
    icon: "trending_up",
    className: "text-success-300",
  },
  down: {
    icon: "trending_down",
    className: "text-danger-300",
  },
  same: {
    icon: "horizontal_rule",
    className: "text-warning-300",
  },
} as const;

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

  const interviewCount = topicEntries.filter(({item}) => item.interview).length;
  const flaggedCount = topicEntries.filter(
    ({flaggedLevel}) => flaggedLevel,
  ).length;

  const poorCount = topicEntries.filter(
    (e) => e.flaggedLevel === "poor",
  ).length;

  const reviewCount = topicEntries.filter(
    (e) => e.flaggedLevel === "weak",
  ).length;

  const mockQuestionsCount = topicEntries.filter(
    ({inMockInterview}) => inMockInterview,
  ).length;

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

  const sparklinePath = buildSparklinePath(sectionHistory, 300, 24);

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

  const sectionTrend =
    latestScore == null || previousScore == null
      ? null
      : latestScore > previousScore
        ? "up"
        : latestScore < previousScore
          ? "down"
          : "same";

  const hasMeta =
    flaggedCount > 0 || mockQuestionsCount > 0 || interviewScore !== null;

  // Presentation
  const baseClasses = `flex flex-col gap-4 justify-between rounded-xl bg-surface border-surface/70 border p-3 text-left transition shadow-soft hover:shadow-[0_0_10px_rgba(91,192,190,0.25)]`;

  const levelStyles = sectionLevel ? sectionLevelStyles[sectionLevel] : null;
  const trendStyle = sectionTrend ? trendStyles[sectionTrend] : null;

  const opacityClasses = isComplete
    ? "opacity-30 inset-shadow-sm inset-shadow-black"
    : "opacity-100";

  const badgeStyle = levelStyles?.badge ?? "primary";
  const progressClass = levelStyles?.progress ?? "bg-primary-500";
  const indicatorClass = levelStyles?.indicator ?? "bg-tertiary-600";

  console.log(levelStyles?.indicator);

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

            {/* <Badge badgeLabel={section.items.length} badgeStyle={badgeStyle} /> */}
          </div>
          {interviewCount > 0 && (
            <Tag tagLabel="Interview-focused" tagStyle="primary" />
          )}
        </div>

        {hasMeta && (
          <div className="flex flex-col gap-4 bg-black/30 border border-black/20 text-secondary-700 p-4 rounded-lg mb-4 inner-shadow-soft">
            {(poorCount > 0 || reviewCount > 0) && (
              <div className="flex flex-col bg-tertiary-600 rounded p-2 shadow-soft">
                {poorCount > 0 && (
                  <div className="text-xxs flex items-center justify-between leading-normal">
                    <p className="text-danger-500 font-bold">
                      <span className="material-symbols-outlined material-filled align-middle text-base! mr-2">
                        warning
                      </span>
                      Topics needing attention
                    </p>
                    <Pill pillStyle={badgeStyle} pillLabel={poorCount} />
                  </div>
                )}

                {reviewCount > 0 && (
                  <div className="text-xxs flex items-center justify-between leading-normal">
                    <p className="text-warning-500 font-bold">
                      <span className="material-symbols-outlined material-filled align-middle text-base! mr-2">
                        warning
                      </span>
                      Topics to review
                    </p>
                    <Pill pillStyle="weak" pillLabel={reviewCount} />
                  </div>
                )}
              </div>
            )}

            <div className="flex flex-col gap-2 bg-tertiary-600 rounded p-2 shadow-soft">
              {mockQuestionsCount > 0 && (
                <div className="text-xxs flex items-center justify-between leading-normal">
                  <p className="text-white font-bold">
                    <span className="material-symbols-outlined material-filled align-middle text-base! mr-2">
                      group_add
                    </span>
                    Questions added to mock interview
                  </p>
                  <Pill pillStyle="primary" pillLabel={mockQuestionsCount} />
                </div>
              )}
              {interviewScore !== null && (
                <div className="text-xxs flex items-center justify-between leading-normal">
                  <p className="text-white font-bold">
                    <span className="material-symbols-outlined material-filled align-middle text-base! mr-2">
                      leaderboard
                    </span>
                    Current Interview Score
                  </p>
                  <Pill pillStyle="primary" pillLabel={`${interviewScore}%`} />
                </div>
              )}
            </div>

            {sectionHistory.length > 1 && (
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
                <div className="w-full bg-tertiary-700 rounded p-2">
                  <svg
                    viewBox="0 0 300 24"
                    className="h-6 w-full overflow-visible"
                  >
                    <path
                      d={sparklinePath}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={trendStyle?.className}
                    />
                  </svg>
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
                className={`h-2 ${progressClass} rounded-full transition-all duration-300 inner-shadow-soft`}
                style={{width: `${progress}%`}}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
