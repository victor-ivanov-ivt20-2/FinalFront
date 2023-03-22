import { ReactNode } from "react";

export interface ButtonProps {
  onClick: () => void;
  height?: string;
  width?: string;
  disabled?: boolean;
  rounded?: string;
  children: ReactNode;
}

export interface PrimaryButtonProps extends ButtonProps {}

export interface SecondaryButtonProps extends ButtonProps {
  color?: string;
}
