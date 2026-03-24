export type ButtonProps = {
  buttonLabel: string | number;
  buttonIcon?: string;
  buttonStyle?: "primary" | "secondary" | "tertiary";
  handleClick: () => void;
  extraClasses?: string;
};
