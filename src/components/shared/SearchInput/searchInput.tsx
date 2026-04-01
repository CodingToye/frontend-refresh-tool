import type {SearchInputProps} from "./types";

const searchInputClasses =
  "peer w-full rounded-xl bg-black/20 px-4 pl-10 h-8 text-xxs text-tertiary-200 font-bold outline-none placeholder:text-tertiary-200 transition focus:bg-secondary-400 focus:text-secondary-900 focus:placeholder:text-secondary-700 inner-shadow-soft";
export function SearchInput({searchTerm, handleChange}: SearchInputProps) {
  return (
    <div className="flex-1 relative">
      <input
        value={searchTerm}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Search topics or summaries"
        className={searchInputClasses}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-tertiary-200 material-symbols-outlined peer-focus:text-secondary-700">
        search
      </span>
    </div>
  );
}
