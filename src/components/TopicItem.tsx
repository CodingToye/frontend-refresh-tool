import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import type {TopicItemProps} from "../types/Topic.types";

function TopicItem({
  item,
  subject,
  sectionTitle,
  isOpen,
  isChecked,
  isFlagged,
  onToggleOpen,
  onToggleChecked,
  onToggleFlagged,
  onArrowUp,
  onArrowDown,
  onGenerateAIQuestions,
}: TopicItemProps) {
  return (
    <li
      className={`w-full rounded-lg border px-3 py-3 text-left transition ${
        isChecked
          ? "border-black/50 bg-card/50 hover:bg-card-hover/50 opacity-25"
          : "border-black/50 bg-card hover:bg-card-hover hover:border-black"
      }`}
    >
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => onToggleChecked(subject, sectionTitle, item.name)}
          className="h-4 w-4 shrink-0 rounded border-slate-600 bg-slate-800 accent-accent cursor-pointer"
        />

        <button
          type="button"
          onClick={onToggleOpen}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") onArrowDown();
            if (e.key === "ArrowUp") onArrowUp();
          }}
          className="flex flex-1 items-center justify-between gap-4 text-left group"
        >
          <div className="flex items-center gap-3">
            <span className="font-medium text-slate-100">{item.name}</span>

            {item.interview && (
              <span className="ml-2 rounded bg-accent px-2 py-0.5 text-xxs text-black">
                Potential interview question
              </span>
            )}
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

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFlagged(subject, sectionTitle, item.name);
          }}
          disabled={isChecked}
          className={`transition ${isFlagged ? " text-accent" : " text-white"}`}
        >
          <span
            className={`material-symbols-outlined text-lg ${
              isFlagged
                ? "[font-variation-settings:'FILL'_1]"
                : "[font-variation-settings:'FILL'_0]"
            }`}
          >
            flag
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="mt-3 space-y-3 pl-7">
          <button
            onClick={() =>
              onGenerateAIQuestions(subject, sectionTitle, item.name)
            }
            className="mt-2 rounded bg-amber-600 px-3 py-1 text-xs font-medium text-black hover:bg-amber-500"
          >
            Generate AI Questions
          </button>
          <p className="mb-6 text-xs leading-6 text-slate-300">
            {item.summary}
          </p>

          {item.code && (
            <SyntaxHighlighter
              language="tsx"
              style={oneDark}
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
                },
              }}
            >
              {item.code.trim()}
            </SyntaxHighlighter>
          )}
        </div>
      )}
    </li>
  );
}

export default TopicItem;
