import { ButtonHTMLAttributes } from "react";

import { Container } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  secondary?: boolean;
  block?: boolean;
};

export function Button({
  secondary = false,
  block = false,
  ...props
}: ButtonProps) {
  return (
    <Container
      className={`${secondary ? "outlined" : ""}`}
      {...props}
    />
  );
}
