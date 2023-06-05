import { BrandWrapper, BrandName, Slogan } from "./BrandSloganElements";

type Props = {
  name: String;
  slogan: String;
};

export const BrandSlogan = ({ name, slogan }: Props) => (
  <BrandWrapper>
    <BrandName>{name}</BrandName>
    <Slogan>{slogan}</Slogan>
  </BrandWrapper>
);
