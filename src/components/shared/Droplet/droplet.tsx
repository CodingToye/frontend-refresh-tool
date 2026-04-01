import type {DropletProps} from "./types";

export function Droplet({dropletLabel, dropletStyle}: DropletProps) {
  return (
    <div className="flex flex-col">
      <span
        className={`material-symbols-outlined material-filled text-${dropletStyle}-500`}
      >
        water_drop
      </span>
      <span className="text-micro text-white font-bold uppercase">
        {dropletLabel}
      </span>
    </div>
  );
}
