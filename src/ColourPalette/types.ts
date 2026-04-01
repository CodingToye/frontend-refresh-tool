// types.ts
import type {ColourName} from "./colours";
export type ColourVariant =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950;

export type SwatchProps = {
  colour: ColourName;
  variant: number;
  hex: string;
};

export type PaletteGroup = {
  colour: ColourName;
  variants: ColourVariant[];
};
