import { BrandWrapper, BrandName, Slogan } from "./BrandSloganElements";

interface BrandProps {
  name: String;
  slogan: String;
}

export const BrandSlogan: React.FC<BrandProps> = ({ name, slogan }) => (
  <BrandWrapper>
    <BrandName>{name}</BrandName>
    <Slogan>{slogan}</Slogan>
  </BrandWrapper>
);
