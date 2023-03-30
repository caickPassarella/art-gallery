import { ReactNode } from "react";
import { Wrapper } from "./ContainerElements";

type ContainerProps = {
  children: ReactNode;
};

export const Container = ({ children }: ContainerProps) => {
  return <Wrapper>{children}</Wrapper>;
};
