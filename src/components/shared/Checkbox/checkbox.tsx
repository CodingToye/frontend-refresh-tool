import type {CheckboxProps} from "./types";

export function Checkbox({label, checked, onChange}: CheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-4 rounded-xl shadow-sm">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="sr-only"
      />

      {/* <div className="flex h-7 w-7 items-center justify-center rounded bg-black/20 inner-shadow-soft"> */}
      <div
        className={`flex h-4 w-4 items-center justify-center rounded inner-shadow-soft transition ${
          checked ? "bg-secondary-200" : "bg-black/20"
        }`}
      >
        <span
          className={`material-symbols-outlined text-base! font-bold! text-secondary-900 transition ${
            checked ? "opacity-100" : "opacity-0"
          }`}
        >
          check
        </span>
      </div>
      {/* </div> */}
      {label && (
        <div className="flex flex-1 flex-col gap-2 text-xxs text-white">
          {label}
        </div>
      )}
    </label>
  );
}
