import type {SectionCardProps} from "../types/Section.types";
import {getTopicKey} from "../utils/topicKeys";

function SectionCard({
  subject,
  section,
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

  return (
    <button
      onClick={onOpen}
      className={`flex flex-col justify-between rounded-xl border p-3 text-left transition hover:shadow-[0_0_10px_rgba(91,192,190,0.25)]

  ${
    isComplete
      ? "border-white/10 bg-surface/50 hover:bg-surface-light/50 opacity-30"
      : "border-white/10 bg-surface hover:bg-surface-light"
  }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <div className="inline-flex items-center justify-center rounded-full bg-accent w-4 h-4 text-xxs font-bold text-black">
              {section.items.length}
            </div>
          </div>
          {interviewCount > 0 && (
            <p className="my-1 text-xs text-accent">Interview-focused</p>
          )}
        </div>

        {(flaggedCount > 0 || mockQuestionsCount > 0) && (
          <div className="bg-note border border-black text-note-text py-1 px-3 rounded-lg mb-4">
            {flaggedCount > 0 && (
              <p className="text-xxs  flex items-center justify-between">
                Flagged for further review
                <span className="rounded-full inline-flex items-center justify-center w-4 h-4 bg-white/30 border border-black/50 text-xxs  font-bold text-black/70 ml-2">
                  {flaggedCount}
                </span>
              </p>
            )}
            {mockQuestionsCount > 0 && (
              <p className="text-xxs  flex items-center justify-between">
                Added to mock interview
                <span className="rounded-full inline-flex items-center justify-center w-4 h-4 bg-white/30 border border-black/50 text-xxs  font-bold text-black/70 ml-2">
                  {mockQuestionsCount}
                </span>
              </p>
            )}
          </div>
        )}
      </div>
      <div className="bg-black/30 border border-black/20 py-2 px-3 rounded-lg">
        <div className="flex gap-2 items-center text-xs text-slate-400">
          <span>
            {completedTopics}/{totalTopics}
          </span>
          <div className="flex-1">
            <div className="h-2 rounded-full bg-slate-900">
              <div
                className={`h-2 rounded-full transition-all duration-300 ${
                  isComplete ? "bg-accent" : "bg-accent"
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
