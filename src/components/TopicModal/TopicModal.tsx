import {useEffect, useState} from "react";

import {TopicItem} from "@/components/TopicItem";
import {getTopicKey} from "@/utils/topicKeys";

import type {TopicModalProps} from "./types";

export function TopicModal({
  subject,
  section,
  expandedTopic,
  checkedTopics,
  mockSelectedTopics,
  flaggedTopics,
  interviewHistory,
  getTopicTrend,
  onClose,
  onToggleOpen,
  onToggleChecked,
  onToggleMockSelected,
  setTopicFlagged,
}: TopicModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isVisible]);

  const attempts = interviewHistory[subject] ?? [];
  const latestAttempt = attempts[attempts.length - 1];
  const previousAttempt = attempts[attempts.length - 2];

  const topicEntries = section.items.map((item, index) => {
    const topicKey = getTopicKey(subject, section.title, item.name);
    const currentLevel = latestAttempt?.topics[topicKey];
    const previousLevel = previousAttempt?.topics[topicKey];

    return {
      item,
      index,
      topicKey,
      isOpen: expandedTopic === item.name,
      isChecked: !!checkedTopics[topicKey],
      isFlagged: !!flaggedTopics[topicKey],
      isMockSelected: !!mockSelectedTopics[topicKey],
      trend: getTopicTrend(previousLevel, currentLevel),
    };
  });

  const totalTopics = topicEntries.length;
  const completedTopics = topicEntries.filter(
    ({isChecked}) => isChecked,
  ).length;

  const progress = totalTopics
    ? Math.round((completedTopics / totalTopics) * 100)
    : 0;

  const isComplete = totalTopics > 0 && completedTopics === totalTopics;

  // Presentation
  const overlayClasses =
    "z-20 fixed inset-0 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity duration-600";
  const panelClasses = `w-full max-w-5xl rounded-xl bg-surface p-6 transition-all duration-200 ${isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"}`;
  const progressBarClasses =
    "h-2 rounded-full bg-primary-500 transition-all duration-300 shadow-lg shadow-primary-500/50";
  return (
    <div className={overlayClasses} onClick={onClose}>
      <div className={panelClasses} onClick={(e) => e.stopPropagation()}>
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
              className={progressBarClasses}
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
          {topicEntries.map(
            ({
              item,
              index,
              topicKey,
              isOpen,
              isChecked,
              isFlagged,
              isMockSelected,
              trend,
            }) => {
              const next = topicEntries[index + 1];
              const prev = topicEntries[index - 1];

              return (
                <TopicItem
                  key={item.name}
                  item={item}
                  sectionTitle={section.title}
                  subject={subject}
                  isOpen={isOpen}
                  isChecked={isChecked}
                  isFlagged={isFlagged}
                  isMockSelected={isMockSelected}
                  trend={trend}
                  onToggleOpen={() => onToggleOpen(isOpen ? null : item.name)}
                  onToggleChecked={onToggleChecked}
                  onToggleMockSelected={onToggleMockSelected}
                  onToggleFlagSelected={() => setTopicFlagged(topicKey, null)}
                  onArrowDown={() => {
                    if (next) onToggleOpen(next.item.name);
                  }}
                  onArrowUp={() => {
                    if (prev) onToggleOpen(prev.item.name);
                  }}
                />
              );
            },
          )}
        </ul>
      </div>
    </div>
  );
}
