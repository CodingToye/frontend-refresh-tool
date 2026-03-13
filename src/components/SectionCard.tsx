import type {SectionCardProps} from "../types/Section.types";

function SectionCard({
  section,
  completedTopics,
  totalTopics,
  onOpen,
}: SectionCardProps) {
  const progress = totalTopics
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  const isComplete = totalTopics > 0 && completedTopics === totalTopics;

  const interviewCount = section.items.filter((item) => item.interview).length;

  return (
    <button
      onClick={onOpen}
      className={`flex flex-col justify-between rounded-xl border p-3 text-left transition
  ${
    isComplete
      ? "border-amber-600 bg-amber-900/40 hover:bg-amber-900/60"
      : "border-slate-700 bg-slate-800 hover:bg-slate-700"
  }`}
    >
      <div>
        <h3 className="text-lg font-semibold">{section.title}</h3>
        <p className="mt-2 text-xs text-slate-400">
          {section.items.length} topics
        </p>
        {interviewCount > 0 && (
          <p className="mt-1 text-xs text-amber-400">
            {interviewCount} interview-focused
          </p>
        )}
      </div>
      <div className="mt-4 bg-black/30 border border-black/20 py-2 px-3 rounded-lg">
        <div className="mb-1 flex items-center justify-between text-xxs  text-white">
          <span>Progress</span>
          <span>
            {completedTopics}/{totalTopics}
          </span>
        </div>
        <div className="relative">
          <div
            className={`relative z-10 h-2 rounded-full transition-all duration-300 ${
              isComplete ? "bg-amber-500" : "bg-amber-600"
            }`}
            style={{width: `${progress}%`}}
          />
          <div className="absolute top-0 w-full h-2 rounded-full bg-black" />
        </div>
      </div>
    </button>
  );
}

export default SectionCard;
