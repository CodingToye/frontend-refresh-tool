import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {synthwave84} from "react-syntax-highlighter/dist/esm/styles/prism";

import {subjectData} from "@/data/subjects";

import {Checkbox} from "../shared/Checkbox";
import {Tag} from "../shared/Tag";
import type {TopicItemProps} from "./types";

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

export function TopicItem({
  item,
  subject,
  sectionTitle,
  isOpen,
  isChecked,
  flagLevel,
  trend,
  onToggleOpen,
  onToggleChecked,
  onToggleFlagSelected,
  onArrowUp,
  onArrowDown,
}: TopicItemProps) {
  // Data
  const fileType = subjectData[subject].fileType;
  const trendStyle = trend ? trendConfig[trend] : null;
  const flagTagStyle =
    flagLevel === "poor" || flagLevel === "weak" ? flagLevel : null;

  // Handlers
  const handleToggleChecked = () =>
    onToggleChecked(subject, sectionTitle, item.name);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown") onArrowDown();
    if (e.key === "ArrowUp") onArrowUp();
  };

  // Presentation
  const baseItemClasses =
    "w-full rounded-lg border px-3 py-3 text-left transition shadow-soft inset-shadow-sm inset-shadow-primary/20";
  const checkedClasses = isChecked
    ? "border-black/30 bg-tertiary-500/50 hover:bg-tertiary-600/50 opacity-25 inset-shadow-sm inset-shadow-black"
    : "border-black/30 bg-tertiary-800/50  hover:border-black";
  const openClasses = isOpen
    ? "bg-tertiary-800 hover:bg-tertiary-800/50"
    : "hover:bg-tertiary-800";

  // Render
  return (
    <li className={`${baseItemClasses} ${checkedClasses} ${openClasses}`}>
      <div className="flex items-center gap-3">
        <Checkbox checked={isChecked} onChange={handleToggleChecked} />

        <button
          type="button"
          onClick={onToggleOpen}
          onKeyDown={handleKeyDown}
          className="flex flex-1 items-start justify-between lg:gap-4 text-left group"
        >
          <div className="flex items-start gap-3 w-full justify-between">
            <div className="flex flex-row gap-2 items-start">
              <span className="text-xs font-medium text-secondary-300">
                {item.name}
              </span>
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

              {flagTagStyle && (
                <Tag
                  tagLabel={
                    flagTagStyle === "poor"
                      ? "Flagged for review: Poor"
                      : "Flagged for review: Weak"
                  }
                  tagStyle={flagTagStyle}
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
        <div className="mt-3 space-y-3 px-7">
          <p className="mb-6 text-xs leading-6 text-slate-300">
            {item.summary}
          </p>

          {item.code && (
            <div className="relative hidden lg:block shadow-soft">
              <span className="absolute top-0 right-5 text-xxs bg-black/20 text-secondary-200 px-2 uppercase inner-shadow-soft rounded-b-md ">
                {fileType}
              </span>
              <SyntaxHighlighter
                language={fileType}
                style={synthwave84}
                PreTag="pre"
                CodeTag="code"
                wrapLongLines={false}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  padding: "0px",
                  borderRadius: 0,
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
                    borderRadius: 0,
                  },
                }}
              >
                {item.code.trim()}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      )}
    </li>
  );
}
