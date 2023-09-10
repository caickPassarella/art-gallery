import { ReactNode } from "react";
import { Wrapper } from "./ContainerElements";

interface ContainerProps {
  align?: string;
  direction?: string;
  bgColor?: string;
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  align,
  direction,
  bgColor,
  className,
}) => {
  return (
    <Wrapper
      align={align}
      direction={direction}
      bgColor={bgColor}
      className={className}
    >
      {children}
    </Wrapper>
  );
};
