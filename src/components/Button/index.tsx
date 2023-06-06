import { ReactNode } from "react";
import { ButtonStyle } from "./ButtonElements";

interface ButtonProps {
  children: ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};
