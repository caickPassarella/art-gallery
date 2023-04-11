import { ReactNode } from "react";
import { Wrapper } from "./ContainerElements";

type ContainerProps = {
  align?: string;
  children: ReactNode;
};

export const Container = ({ children, align }: ContainerProps) => {
  return <Wrapper align={align}>{children}</Wrapper>;
};
