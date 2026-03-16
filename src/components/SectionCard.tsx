import type {SectionCardProps} from "../types/Section.types";
import {getTopicKey} from "../utils/topicKeys";

function SectionCard({
  subject,
  section,
  completedTopics,
  flaggedTopics,
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
      <div>
        <h3 className="text-lg font-semibold">{section.title}</h3>
        <p className="mt-2 text-xs text-white/50">
          {section.items.length} topics
        </p>
        {interviewCount > 0 && (
          <p className="mt-1 text-xs text-accent">
            {interviewCount} interview-focused
          </p>
        )}
        {flaggedCount > 0 && (
          <p className="mt-1 text-xs text-amber-400">
            {flaggedCount} flagged for further review
          </p>
        )}
      </div>
      <div className="mt-4 ">
        <div className="bg-black/30 border border-black/20 py-2 px-3 rounded-lg">
          <div className="mb-2 flex items-center justify-between text-xs text-slate-400">
            <span>Progress</span>
            <span>
              {completedTopics}/{totalTopics}
            </span>
          </div>

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
    </button>
  );
}

export default SectionCard;
