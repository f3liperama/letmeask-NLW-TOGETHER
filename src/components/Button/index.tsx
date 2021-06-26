import { ButtonHTMLAttributes } from "react";

import "./styles.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
};

export function Button({ secondary = false, ...props }: ButtonProps) {
  return (
    <button className={`button ${secondary ? "outlined" : ""}`} {...props} />
  );
}
