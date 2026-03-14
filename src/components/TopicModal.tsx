import type {TopicModalProps} from "../types/Topic.types";
import TopicItem from "./TopicItem";
import {getTopicKey} from "../utils/topicKeys";
import {useEffect, useState} from "react";

export function TopicModal({
  subject,
  section,
  expandedTopic,
  checkedTopics,
  flaggedTopics,
  onClose,
  onToggleOpen,
  onToggleChecked,
  onToggleFlagged,
}: TopicModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);
  const totalTopics = section.items.length;

  const completedTopics = section.items.filter(
    (item) => checkedTopics[getTopicKey(subject, section.title, item.name)],
  ).length;

  const progress = totalTopics
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  const isComplete = totalTopics > 0 && completedTopics === totalTopics;

  return (
    <div
      className="z-20 fixed inset-0 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-600"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-5xl rounded-xl bg-surface p-6 transition-all duration-200 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <button
            onClick={onClose}
            className="text-xs text-slate-300 hover:text-white transition-all duration-200"
          >
            Close
          </button>
        </div>

        <div className="mb-4">
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

        {isComplete && (
          <p className="my-2 text-sm font-medium text-amber-400">
            Section completed
          </p>
        )}

        <ul className="max-h-[60vh] space-y-3 overflow-y-auto pr-1">
          {section.items.map((item, index) => {
            const isOpen = expandedTopic === item.name;
            const topicKey = getTopicKey(subject, section.title, item.name);
            const isChecked = !!checkedTopics[topicKey];
            const isFlagged = !!flaggedTopics[topicKey];

            return (
              <TopicItem
                key={item.name}
                item={item}
                sectionTitle={section.title}
                subject={subject}
                isOpen={isOpen}
                isChecked={isChecked}
                isFlagged={isFlagged}
                onToggleOpen={() => onToggleOpen(isOpen ? null : item.name)}
                onToggleChecked={onToggleChecked}
                onToggleFlagged={onToggleFlagged}
                onArrowDown={() => {
                  const next = section.items[index + 1];
                  if (next) onToggleOpen(next.name);
                }}
                onArrowUp={() => {
                  const prev = section.items[index - 1];
                  if (prev) onToggleOpen(prev.name);
                }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
