import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {nord} from "react-syntax-highlighter/dist/esm/styles/prism";

import {subjectData} from "@/data/subjects";

import {Tag} from "../shared/Tag";
import type {TopicItemProps} from "./types";

const trendStyles = {
  up: {
    icon: "trending_up",
    className: "text-success-300",
  },
  down: {
    icon: "trending_down",
    className: "text-danger-500",
  },
  same: {
    icon: "horizontal_rule",
    className: "text-warning-300",
  },
} as const;

export function TopicItem({
  item,
  subject,
  sectionTitle,
  isOpen,
  isChecked,
  isFlagged,
  isMockSelected,
  trend,
  onToggleOpen,
  onToggleChecked,
  onToggleMockSelected,
  onToggleFlagSelected,
  onArrowUp,
  onArrowDown,
}: TopicItemProps) {
  // Data
  const fileType = subjectData[subject].fileType;
  const trendStyle = trend ? trendStyles[trend] : null;

  // Handlers
  const handleToggleChecked = () =>
    onToggleChecked(subject, sectionTitle, item.name);
  const handleToggleMockSelected = () =>
    onToggleMockSelected(subject, sectionTitle, item.name);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") onArrowDown();
    if (e.key === "ArrowUp") onArrowUp();
  };

  // Presentation
  const baseItemClasses =
    "w-full rounded-lg border px-3 py-3 text-left transition inset-shadow-sm inset-shadow-primary/20";
  const checkedClasses = isChecked
    ? "border-black/50 bg-card/50 hover:bg-card-hover/50 opacity-25 inset-shadow-sm inset-shadow-black"
    : "border-black/50 bg-card hover:bg-card-hover hover:border-black";
  const openClasses = isOpen ? "bg-card-hover" : "";

  // Render
  return (
    <li className={`${baseItemClasses} ${checkedClasses} ${openClasses}`}>
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleToggleChecked}
          className="h-4 w-4 shrink-0 rounded border-slate-600 bg-slate-800 accent-primary-500 cursor-pointer"
        />

        <button
          type="button"
          onClick={onToggleOpen}
          onKeyDown={handleKeyDown}
          className="flex flex-1 items-start justify-between lg:gap-4 text-left group"
        >
          <div className="flex items-start gap-3 w-full justify-between">
            <div className="flex flex-row gap-2 items-start">
              <span className="font-medium text-slate-100">{item.name}</span>
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

            <div className="hidden lg:flex gap-2 justify-end">
              {item.interview && (
                <Tag
                  tagLabel="Potential interview question"
                  tagStyle="primary"
                />
              )}
              {isMockSelected && (
                <Tag
                  tagLabel="Mock interview question"
                  tagStyle="secondary"
                  tagVariant
                  tagClose
                  onClose={handleToggleMockSelected}
                />
              )}
              {isFlagged && (
                <Tag
                  tagLabel="Flagged for review"
                  tagStyle="poor"
                  tagVariant
                  tagClose
                  onClose={onToggleFlagSelected}
                />
              )}
            </div>
          </div>

          <svg
            className={`h-4 w-4 text-slate-400 group-hover:text-white transition-all duration-200 ${
              isOpen ? "rotate-180 text-white" : ""
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 space-y-3 lg:pl-7">
          <p className="mb-6 text-xs leading-6 text-slate-300">
            {item.summary}
          </p>

          {item.code && (
            <div className="relative hidden lg:block">
              <span className="absolute top-0 right-10 text-xxs bg-secondary text-black px-2 uppercase shadow-lg shadow-secondary/30 rounded-b ">
                {fileType}
              </span>
              <SyntaxHighlighter
                language={fileType}
                style={nord}
                PreTag="pre"
                CodeTag="code"
                wrapLongLines={false}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  padding: "0px",
                  borderRadius: "0.75rem",
                  background: "#020617",
                  whiteSpace: "pre-wrap",
                  overflowX: "auto",
                  fontSize: "0.75rem",
                  lineHeight: "1.6",
                }}
                codeTagProps={{
                  style: {
                    whiteSpace: "pre-wrap",
                    display: "block",
                    fontFamily: "var(--font-mono)",
                    fontSize: "13px",
                    padding: "16px",
                  },
                }}
              >
                {item.code.trim()}
              </SyntaxHighlighter>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 mt-4">
            {item.mockQuestions && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleToggleMockSelected();
                }}
                disabled={isChecked}
                className={`rounded bg-tertiary-500 hover:bg-tertiary-800 px-2 py-0.5 text-xxs font-medium text-white transition  ${isMockSelected ? "opacity-100 inset-shadow-sm inset-shadow-black shadow-lg shadow-white/10" : "opacity-50"}`}
              >
                Add mock interview questions
              </button>
            )}
          </div>
        </div>
      )}
    </li>
  );
}
