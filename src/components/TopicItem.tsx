import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/esm/styles/prism";
import type {TopicItemProps} from "../types/Topic.types";

function TopicItem({
  item,
  subject,
  sectionTitle,
  isOpen,
  isChecked,
  onToggleOpen,
  onToggleChecked,
  onArrowUp,
  onArrowDown,
}: TopicItemProps) {
  return (
    <li>
      <button
        onClick={onToggleOpen}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") onArrowDown();
          if (e.key === "ArrowUp") onArrowUp();
        }}
        className={`w-full rounded-lg border  px-3 py-3 text-left transition
          ${
            isChecked
              ? "border-amber-600 bg-amber-900/40 hover:bg-amber-900/60"
              : "border-black/50 bg-slate-900 hover:bg-slate-950 hover:border-black"
          }`}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => onToggleChecked(subject, sectionTitle, item.name)}
              onClick={(e) => e.stopPropagation()}
              className="h-4 w-4 rounded border-slate-600 bg-slate-800 accent-amber-600"
            />
            <span className="font-medium text-slate-100">{item.name}</span>
            {item.interview && (
              <span className="ml-2 rounded bg-amber-500 px-2 py-0.5 text-xs text-black">
                Potential interview question
              </span>
            )}
          </div>
          <span className="text-slate-400">{isOpen ? "−" : "+"}</span>
        </div>

        {isOpen && (
          <div className="mt-3 space-y-3">
            <p className="text-xs mb-6 leading-6 text-slate-300">
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
                  padding: "16px",
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
      </button>
    </li>
  );
}

export default TopicItem;
