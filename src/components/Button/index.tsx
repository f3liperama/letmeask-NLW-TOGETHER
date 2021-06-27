import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
};

export function Button({ secondary = false, ...props }: ButtonProps) {
  return (
    <Container className={`button ${secondary ? "outlined" : ""}`} {...props} />
  );
}
