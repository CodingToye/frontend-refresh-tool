import type {SectionCardProps} from "../types/Section.types";
import {getTopicKey} from "../utils/topicKeys";
import {Badge} from "./shared/Badge";

function SectionCard({
  subject,
  section,
  interviewScore,
  completedTopics,
  flaggedTopics,
  mockQuestions,
  totalTopics,
  onOpen,
}: SectionCardProps) {
  const progress = totalTopics
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  const isComplete = totalTopics > 0 && completedTopics === totalTopics;

  const interviewCount = section.items.filter((item) => item.interview).length;

  const flaggedCount = section.items.filter(
    (item) => flaggedTopics[getTopicKey(subject, section.title, item.name)],
  ).length;

  const mockQuestionsCount = section.items.filter(
    (item) => mockQuestions[getTopicKey(subject, section.title, item.name)],
  ).length;

  const score = interviewScore;

  return (
    <button
      onClick={onOpen}
      className={`flex flex-col justify-between rounded-xl border p-3 text-left transition hover:shadow-[0_0_10px_rgba(91,192,190,0.25)]

  ${
    isComplete
      ? "border-none bg-surface/50 hover:bg-surface-light/50 opacity-30 inset-shadow-sm inset-shadow-black"
      : "border-white/10 bg-surface hover:bg-surface-light"
  }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex justify-between gap-2">
            <h3 className="text-lg font-semibold">{section.title}</h3>

            <Badge badgeLabel={section.items.length} badgeStyle="primary" />
          </div>
          {interviewCount > 0 && (
            <p className="my-1 text-xs text-primary-500">Interview-focused</p>
          )}
        </div>

        {(flaggedCount > 0 || mockQuestionsCount > 0 || score !== null) && (
          <div className="bg-secondary-400 border border-black text-secondary-text py-1 px-3 rounded-lg mb-4">
            {flaggedCount > 0 && (
              <p className="text-xxs flex items-center justify-between">
                Flagged for further review
                <Badge badgeLabel={flaggedCount} badgeStyle="secondary" />
              </p>
            )}

            {mockQuestionsCount > 0 && (
              <p className="text-xxs flex items-center justify-between">
                Added to mock interview
                <Badge badgeLabel={mockQuestionsCount} badgeStyle="secondary" />
              </p>
            )}

            {score !== null && (
              <div className="bg-card rounded px-2 py-1 my-2 inset-shadow-sm inset-shadow-black/20">
                <p className="text-xxs text-white flex flex-row items-center justify-between">
                  Current Interview Score
                  <span className="bg-primary-500 px-1 text-black rounded">
                    {score}%
                  </span>
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="bg-black/30 border border-black/20 py-2 px-3 rounded-lg">
        <div className="flex gap-2 items-center text-xxs text-text/50">
          <span>
            {completedTopics}/{totalTopics}
          </span>
          <div className="flex-1">
            <div className="h-2 rounded-full bg-slate-900">
              <div
                className={`h-2 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/50 ${
                  isComplete ? "bg-primary-500" : "bg-primary-500"
                }`}
                style={{width: `${progress}%`}}
              />
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}

export default SectionCard;
