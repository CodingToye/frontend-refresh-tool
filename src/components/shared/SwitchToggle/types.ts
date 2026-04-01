export type SlidingToggleProps<T extends string> = {
  leftLabel: string;
  rightLabel: string;
  leftValue: T;
  rightValue: T;
  value: T;
  onChange: (value: T) => void;
};
