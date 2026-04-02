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
  buttonIconStyle?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "danger"
    | "warning"
    | "info"
    | "success"
    | "white";
  handleClick: () => void;
  extraClasses?: string;
  iconOnly?: boolean;
};
