import { ReactNode } from "react";
import { Wrapper } from "./ContainerElements";

type ContainerProps = {
  children: ReactNode;
};

export const Container = (props: ContainerProps) => {
  return <Wrapper>{props.children}</Wrapper>;
};
