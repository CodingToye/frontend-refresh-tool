// Swatch.tsx
import {getTextColour} from "./getTextColour";
import type {SwatchProps} from "./types";

export function Swatch({colour, variant, hex}: SwatchProps) {
  const textColor = getTextColour(hex);

  return (
    <div className={`bg-${colour}-${variant} rounded p-2 ${textColor}`}>
      <p>
        {colour} - {variant} <span className="ml-2 opacity-70">{hex}</span>
      </p>
    </div>
  );
}
