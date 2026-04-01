export type ButtonProps = {
  buttonLabel?: string | number;
  buttonIcon?: string;
  buttonStyle?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "info"
    | "success";
  buttonIconColour?: string;
  handleClick: () => void;
  extraClasses?: string;
  iconOnly?: boolean;
};
