import { InputHTMLAttributes } from "react";

import { useTheme } from "../../hooks/useTheme";

import "./styles.scss";

type ToggleSwitchProps = InputHTMLAttributes<HTMLInputElement>;

export function ToggleSwitch(props: ToggleSwitchProps) {
  const { theme } = useTheme();

  return (
    <div className={`toggle ${theme.title === "dark" ? "on" : "off"}`} {...props}>
      <div className="toggle-circle"></div>
    </div>
  );
}
