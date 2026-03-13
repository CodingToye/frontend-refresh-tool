type TopicFilterToggleProps = {
  value: "all" | "interview";
  onChange: (value: "all" | "interview") => void;
};

export function TopicFilterToggle({value, onChange}: TopicFilterToggleProps) {
  return (
    <div className="relative inline-flex rounded-full bg-slate-800 p-1 shadow-inner">
      <div
        className={`absolute top-1 bottom-1 w-1/2 rounded-full bg-amber-600 transition-all duration-300 ${
          value === "all" ? "translate-x-0" : "translate-x-full"
        }`}
      />

      <button
        type="button"
        onClick={() => onChange("all")}
        className={`relative z-10 w-36 rounded-full px-2 py-1 text-xxs font-medium transition-colors ${
          value === "all" ? "text-white" : "text-slate-300"
        }`}
      >
        All Topics
      </button>

      <button
        type="button"
        onClick={() => onChange("interview")}
        className={`relative z-10 w-36 rounded-full px-2 py-1 text-xxs font-medium transition-colors ${
          value === "interview" ? "text-white" : "text-slate-300"
        }`}
      >
        Interview Topics
      </button>
    </div>
  );
}
