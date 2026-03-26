export type ButtonProps = {
  buttonLabel: string | number;
  buttonIcon?: string;
  buttonStyle?: "primary" | "secondary" | "tertiary";
  buttonIconColour?: string;
  handleClick: () => void;
  extraClasses?: string;
};
