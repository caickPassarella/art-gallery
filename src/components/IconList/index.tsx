import { IconContainer, GridItem, Img } from "./IconListElements";

type Props = {
  icons: Array<string>;
};

export const IconList = ({ icons }: Props) => {
  const columns = Math.ceil(Math.sqrt(icons.length));
  return (
    <IconContainer style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
      {icons.map((icon, index) => (
        <GridItem key={index}>
          <Img src={icon} alt="" />
        </GridItem>
      ))}
    </IconContainer>
  );
};
