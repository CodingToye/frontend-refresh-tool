import type {SearchInputProps} from "./types";

const searchInputClasses =
  "w-full rounded-xl bg-tertiary-600 px-4 pl-10 h-8 text-xxs text-white outline-none placeholder:text-tertiary-200 transition focus:bg-black/40 inner-shadow-soft";
export function SearchInput({searchTerm, handleChange}: SearchInputProps) {
  return (
    <div className="flex-1 relative">
      <input
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search topics or summaries"
        className={searchInputClasses}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary-200 material-symbols-outlined">
        search
      </span>
    </div>
  );
}
