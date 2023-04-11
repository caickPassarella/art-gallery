import { ReactNode } from "react";
import { ButtonStyle } from "./ButtonElements";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return <ButtonStyle>{children}</ButtonStyle>;
};
