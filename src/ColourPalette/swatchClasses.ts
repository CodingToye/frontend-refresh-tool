// swatchClasses.ts
import type {ColourName} from "./colours";
import type {ColourVariant} from "./types";

export const swatchClasses: Record<
  ColourName,
  Record<ColourVariant, string>
> = {
  primary: {
    50: "bg-primary-50",
    100: "bg-primary-100",
    200: "bg-primary-200",
    300: "bg-primary-300",
    400: "bg-primary-400",
    500: "bg-primary-500",
    600: "bg-primary-600",
    700: "bg-primary-700",
    800: "bg-primary-800",
    900: "bg-primary-900",
    950: "bg-primary-950",
  },

  secondary: {
    50: "bg-secondary-50",
    100: "bg-secondary-100",
    200: "bg-secondary-200",
    300: "bg-secondary-300",
    400: "bg-secondary-400",
    500: "bg-secondary-500",
    600: "bg-secondary-600",
    700: "bg-secondary-700",
    800: "bg-secondary-800",
    900: "bg-secondary-900",
    950: "bg-secondary-950",
  },

  tertiary: {
    50: "bg-tertiary-50",
    100: "bg-tertiary-100",
    200: "bg-tertiary-200",
    300: "bg-tertiary-300",
    400: "bg-tertiary-400",
    500: "bg-tertiary-500",
    600: "bg-tertiary-600",
    700: "bg-tertiary-700",
    800: "bg-tertiary-800",
    900: "bg-tertiary-900",
    950: "bg-tertiary-950",
  },
};
