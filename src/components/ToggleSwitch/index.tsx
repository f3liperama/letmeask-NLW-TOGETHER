import { InputHTMLAttributes } from "react";

import { useTheme } from "../../hooks/useTheme";

import { Toggle, ToggleCircle } from "./styles";

type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement>;

export function ToggleSwitch(props: ToggleSwitchProps) {
  const { theme } = useTheme();

  return (
    <Toggle className={`toggle ${theme.title === "dark" ? "on" : "off"}`} {...props}>
      <ToggleCircle />
    </Toggle>
  );
}
