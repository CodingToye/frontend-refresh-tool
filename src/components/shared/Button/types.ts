export type ButtonProps = {
  buttonLabel: string;
  buttonIcon?: string;
  buttonStyle?: "primary" | "secondary" | "tertiary";
  handleClick: () => void;
};
