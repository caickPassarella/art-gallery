import { ReactNode } from "react";
import { Wrapper } from "./ContainerElements";

interface ContainerProps {
  align?: string;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, align }) => {
  return <Wrapper align={align}>{children}</Wrapper>;
};
