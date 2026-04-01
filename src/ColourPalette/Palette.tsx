// Palette.tsx
import {colours} from "./colours";
import {Swatch} from "./Swatch";

export function Palette() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {(
        Object.entries(colours) as [
          keyof typeof colours,
          (typeof colours)[keyof typeof colours],
        ][]
      ).map(([colour, variants]) => (
        <section key={colour} className="flex flex-col gap-2">
          <header>
            <h2 className="mb-2 font-bold capitalize">{colour}</h2>
          </header>

          <div className="bg-tertiary-700 rounded border border-tertiary-500/70 p-4 shadow-soft">
            <div className="flex flex-col gap-2">
              {Object.entries(variants).map(([variant, hex]) => (
                <Swatch
                  key={`${colour}-${variant}`}
                  colour={colour}
                  variant={Number(variant)}
                  hex={hex}
                />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
