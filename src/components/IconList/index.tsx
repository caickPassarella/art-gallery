import { IconContainer, GridItem, Img } from "./IconListElements";

type IconListProps = {
  icons: Array<string>;
  height?: string;
};

export const IconList = ({ icons, height }: IconListProps) => {
  const columns = Math.ceil(Math.sqrt(icons.length));
  return (
    <IconContainer style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {icons.map((icon, index) => (
        <GridItem key={index}>
          <Img src={icon} height={height} alt="" />
        </GridItem>
      ))}
    </IconContainer>
  );
};
